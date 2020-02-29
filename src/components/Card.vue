<template>
    <section 
        :class="[
            'card-container', 
            expanded && 'card-container--expanded'
        ]" 
        ref="container"
        @click="expand"
    >
        <div class="card" ref="card">
            <div class="card__content">
                <img 
                    class="card__image" 
                    :src="img" 
                    @load="onLoad" 
                >
                <div 
                    v-if="imgText"
                    class="card__image-content-container"
                >
                    <sui-loader 
                        :active="!imageLoaded" 
                        centered 
                        inline 
                    />
                    <div class="card__image-text">
                        {{ imgText }}
                    </div>
                    <TrackList
                        v-if="expanded"
                        class="card__image-tracklist"
                        :tracks="tracks"
                        :loaded="tracklistLoaded"
                    />
                </div>
            </div>
            <div class="card__caption" v-if="!noCaption">
                <slot />
            </div>
        </div>
    </section>
</template>

<script>
import axios from 'axios';
import TrackList from './TrackList.vue';

export default {
    name: 'Card',
    components: {
        TrackList
    },
    props: {
        tracklist: String,
        index: Number,
        img: String,
        imgText: String,
        noCaption: Boolean
    },
    data() {
        return {
            imageLoaded: false,
            tracklistLoaded: false,
            expanded: false,
            tracks: []
        }
    },
    methods: {
        onLoad(e) {
            this.imageLoaded = true;
        },
        async loadTrackList() {
            try {
                const {
                    data
                } = await axios.get('/api/tracklist?url=' + this.tracklist);

                this.tracks = data;
                this.tracklistLoaded = true;
            } catch(e) {
                alert('Произошла ошибка! Попробуйте в другой раз.')
            }
        },
        expand(e) {
            if (e && e.target.closest('.tracklist')) return;

            const { container, card } = this.$refs;
            this.$emit('expand', {
                index: this.index,
                value: !this.expanded
            });

            if (!this.expanded) {
                card.style.width = '49%';
                setTimeout(() => {
                    card.style.transition = '0.5s all';
                    card.style.width = '100%';
                    container.scrollIntoView({ behavior: 'smooth' });
                }, 0);

                container.style['grid-column-start'] = 1;
                container.style['grid-column-end'] = 'span 2';
                container.style['grid-row-start'] = Math.floor(this.index / 2) + 1;
                container.style['grid-row-end'] = 'span 2';
                this.expanded = true;

                if (!this.tracks.length) {
                    this.loadTrackList();
                }
            } else {
                card.style.width = '49%';
                setTimeout(() => {
                    card.style.transition = '0s all';
                    card.style.width = '100%';
                    container.style = {};
                }, 500);
                this.expanded = false;
            }
        }
    }
}
</script>

<style scoped>

    .card {
        transition: 1s all;
        height: 100%;
    }

    .card__content {
        display: flex;
        position: relative;
        overflow: hidden;
        height: 100%;
    }

    .card__image {
        width: 100%;
        height: 100%;
    }

    .card__image-content-container {
        cursor: pointer;
        position: absolute;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        transition: 0.5s all;
        overflow-y: auto;
    }

    .card-container--expanded
    .card__image-content-container {
        justify-content: end;
        background: rgba(60, 60, 60, 0.5);
    }
    
    .card__image-content-container:hover {
        background: rgba(60, 60, 60, 0.5);
    }

    .card__image-text {
        color: white;
        font-size: 36px;
        text-align: center;
        margin-top: 32px;
        margin-bottom: 32px;
    }

    .card__image-tracklist {
        width: 90%;
    }

    @media (max-width: 1400px) {
        .card__image-text {
            font-size: 32px;
        }
    }

    @media (max-width: 1000px) {
        .card__image-text {
            font-size: 28px;
        }
    }

    @media (max-width: 600px) {
        .card__image-text {
            font-size: 20px;
        }
    }

    .card__caption {
        border-top: 1px solid;
        padding: 8px;
    }
</style>