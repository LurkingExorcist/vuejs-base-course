<template>
<div id="app">
    <div class="container">
        <Header/>
        <NowPlaying/>
        <SearchPanel/>
        <Tracks/>
    </div>
</div>
</template>

<script>
import Header from '../layout/Header.vue'
import NowPlaying from '../layout/NowPlaying.vue'
import SearchPanel from '../layout/SearchPanel.vue'
import Tracks from '../layout/Tracks.vue'

import '../assets/style.css';

export default {
    name: 'Search',
    components: {
        Header,
        NowPlaying,
        SearchPanel,
        Tracks
    }
}
</script>
