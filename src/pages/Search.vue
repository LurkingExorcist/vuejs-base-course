<template>
    <div class="content">
        <SearchPanel/>
        <Tracks/>
    </div>
</template>

<script>
import SearchPanel from '../layout/SearchPanel.vue'
import Tracks from '../layout/Tracks.vue'

export default {
    name: 'Search',
    components: {
        SearchPanel,
        Tracks
    }
}
</script>
