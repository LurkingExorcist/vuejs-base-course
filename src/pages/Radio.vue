<template>
<div id="app">
    <div class="container">
        <Header/>
        <NowPlaying/>
        <Playlists subject-type="radio"/>
    </div>
</div>
</template>

<script>
import Header from '../layout/Header.vue'
import NowPlaying from '../layout/NowPlaying.vue'
import Playlists from '../layout/Playlists.vue'

import '../assets/style.css';

export default {
    name: 'Radio',
    components: {
        Header,
        NowPlaying,
        Playlists
    }
}
</script>
