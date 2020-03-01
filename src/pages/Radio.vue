<template>
    <div class="content">
        <Playlists subject-type="radio"/>
    </div>
</template>

<script>
import Playlists from '../layout/Playlists.vue'

export default {
    name: 'Radio',
    components: {
        Playlists
    }
}
</script>
