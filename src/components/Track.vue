<template>
    <sui-list-item>
        <div class="track" @click="togglePlay">
            <div class="track-section">
                <div :class="['track-cover', isPlaying && 'track-cover--playing']">
                    <img 
                        class="track-cover-image" 
                        :src="data.album.cover_small" 
                    >
                    <Icon
                        v-show="isPlaying"
                        class="control-icon"
                        theme="dark"
                        name="pause"
                    />
                    <Icon
                        v-show="!isPlaying"
                        class="control-icon"
                        theme="dark"
                        name="play"
                    />
                </div>
                <div class="track-title">
                    {{ data.artist.name }} - 
                    {{ data.title }}
                </div>
            </div>
            <div class="track-section">
                <div class="track-duration">
                    {{ parseDuration(data.duration) }}
                </div>
            </div>
        </div>
    </sui-list-item>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import Icon from './abstract/Icon.vue'

export default {
    name: 'Track',
    components: {
        Icon
    },
    props: {
        data: Object
    },
    data() {
        return {
            isPlaying: false,
            audio: new Audio(this.data.preview)
        }
    },
    computed: {
        ...mapState(['currentTrack'])
    },
    created() {
        this.audio.artist = this.data.artist.name;
        this.audio.title = this.data.title;
        
        this.audio.addEventListener('play', this.setPlay);
        this.audio.addEventListener('pause', this.setPause);
    },
    beforeDestroy() {
        this.audio.removeEventListener('play', this.setPlay);
        this.audio.removeEventListener('pause', this.setPause);
    },
    methods: {
        ...mapActions(['setCurrentTrack']),
        setPlay() {
            this.isPlaying = true;
        },
        setPause() {
            this.isPlaying = false;
        },
        parseDuration(value) {
            let secs = value % 60;
            if (secs.toString().length === 1) secs = '0' + secs;
            
            let mins = Math.floor(value / 60) % 60;
            if (mins.toString().length === 1) mins = '0' + mins;
            
            let hours = Math.floor(value / 3600) % 3600;
            if (hours.toString().length === 1) hours = '0' + hours;

            return `${hours}:${mins}:${secs}`;
        },
        togglePlay() {
            if (this.currentTrack) {
                this.currentTrack.pause();
            }

            this.setCurrentTrack(this.audio);
            if (this.isPlaying) {
                this.audio.pause();
            } else {
                this.audio.play();
            }
        },
    }
}
</script>

<style scoped>
.track {
    display: flex;
    justify-content: space-between;
    background: rgba(0, 0, 0, 0.5);
    padding: 12px;
    color: white;
}

.track-cover {
    position: relative;
    width: 56px;
    height: 56px;
}

.track-cover-image {
    transition: .5s all;
}

.control-icon {
    position: absolute;
    top: 18px;
    left: 18px;
    opacity: 0;
    transition: .5s all;
}

.track-cover--playing
.control-icon,
.track:hover
.control-icon {
    opacity: 1;
}

.track-cover--playing
.track-cover-image ,
.track:hover
.track-cover-image {
    border-radius: 50%;
    filter: brightness(50%);
}

.track-section {
    display: flex;
    align-items: center;
}

.track-title {
    margin-left: 16px;
}

.track-duration {
    float: right;
}

</style>