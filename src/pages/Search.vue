<template>
<div id="app">
    <div class="container">
        <Header/>
        <SearchPanel/>
        <Tracks/>
    </div>
</div>
</template>

<script>
import Header from '../layout/Header.vue'
import SearchPanel from '../layout/SearchPanel.vue'
import Tracks from '../layout/Tracks.vue'

import '../assets/style.css';

export default {
    name: 'Search',
    components: {
        Header,
        SearchPanel,
        Tracks
    }
}
</script>
