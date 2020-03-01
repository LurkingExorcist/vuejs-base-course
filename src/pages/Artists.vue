<template>
    <div class="content">
        <Playlists subject-type="artist"/>
    </div>
</template>

<script>
import Playlists from '../layout/Playlists.vue'

export default {
    name: 'Artists',
    components: {
        Playlists
    }
}
</script>
