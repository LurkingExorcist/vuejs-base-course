<template>
<div id="app">
    <div class="container">
        <Header/>
        <Playlists subject-type="artist"/>
    </div>
</div>
</template>

<script>
import Header from '../layout/Header.vue'
import Playlists from '../layout/Playlists.vue'

import '../assets/style.css';

export default {
    name: 'Artists',
    components: {
        Header,
        Playlists
    }
}
</script>
