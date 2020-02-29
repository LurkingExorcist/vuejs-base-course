<template>
    <main class="playlists">
        <sui-loader v-if="!itemsLoaded" active size="big">Загрузка...</sui-loader>
        <template v-else>
            <Card
                v-for="(item, i) in items"
                :tracklist="item.tracklist"
                :img="item.picture_big || item.picture"
                :img-text="item.name || item.title"
                :index="i"
                :ref="`card_${i}`"
                :key="i"
                no-caption
                @expand="handleExpand"
            />
        </template>
    </main>
</template>

<script>
import Card from '../components/Card.vue';
import { mapActions, mapState } from 'vuex';

export default {
    name: 'Playlists',
    components: {
        Card
    },
    props: {
        subjectType: String
    },
    data() {
        return {
            expandedIndex: -1
        }
    },
    computed: {
        ...mapState(['items', 'itemsLoaded'])
    },
    async created() {
        await this.getItems(this.subjectType);
    },
    methods: {
        ...mapActions(['getItems']),
        handleExpand({ index, value }) {
            if (value) {
                if (this.expandedIndex !== -1) {
                    this.$refs[`card_${this.expandedIndex}`][0].expand();
                }
                this.expandedIndex = index;
            } else {
                this.expandedIndex = -1
            }
        }
    }
}
</script>
