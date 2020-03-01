<template>
    <div class="tracklist-container">
        <template v-if="loaded">
            <sui-list class="tracklist">
                <Track
                    v-for="(track, i) in tracks"
                    :data="track"
                    :key="i"
                />
            </sui-list>
        </template>
        <template v-else>
            <sui-loader 
                active
                centered 
                inline 
                size="large"
            />
        </template>
    </div>
</template>

<script>
import Track from './Track.vue'

export default {
    name: 'TrackList',
    components: {
        Track
    },
    props: {
        tracks: Array,
        loaded: Boolean
    }
}
</script>

<style scoped>
.tracklist-container {
    height: 100%;
    width: 100%;
    display: flex;
    align-items: center;
}

.tracklist {
    width: 100%;
    height: 100%;
}

</style>