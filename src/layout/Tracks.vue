<template>
    <main class="tracks">
        <template v-if="itemsLoaded && items.length === 0">
            Ничего не нашлось :(
        </template>
        <template v-else>
            <Tracklist
                :tracks="items"
                :loaded="itemsLoaded"
            />
        </template>
    </main>
</template>

<script>
import { mapState } from 'vuex';

import Tracklist from '../components/TrackList.vue'

export default {
    name: 'Tracks',
    components: {
        Tracklist
    },
    computed: {
        ...mapState(['items', 'itemsLoaded'])
    },
}
</script>