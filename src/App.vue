<template>
<div id="app">
    <div class="container">
        <Header/>
        <NowPlaying/>
        <router-view></router-view>
    </div>
</div>
</template>

<script>
import Header from './layout/Header.vue'
import NowPlaying from './layout/NowPlaying.vue'

import './assets/style.css';

export default {
    name: 'app',
    components: {
        Header,
        NowPlaying
    }
}
</script>
