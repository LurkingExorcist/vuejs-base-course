<template>
    <main class="content">
        <component
            v-for="(item, i) in items"
            :item="item"
            :is="component"
            :key="i"
        />
    </main>
</template>

<script>
import { mapActions, mapState } from 'vuex';

import AlbumCard from '../components/AlbumCard.vue';
import TracklistCard from '../components/TracklistCard.vue';

export default {
    name: 'Content',
    components: {
        AlbumCard,
        TracklistCard
    },
    computed: {
        component() {
            switch(this.subjectType) {
                case 'album':
                    return AlbumCard;
                case 'radio':
                    return TracklistCard;
            }
        },
        ...mapState(['subjectType', 'items'])
    },
    async created() {
        await this.getRadio();
    },
    methods: {
        ...mapActions(['getRadio'])
    }
}
</script>
