<template>
<div id="app">
    <Header />
    <div class="container">
        <SideBar />
        <Content />
    </div>
</div>
</template>

<script>
import Header from './views/Header.vue'
import Content from './views/Content.vue'
import SideBar from './views/SideBar.vue'

import './assets/style.css';

export default {
    name: 'app',
    components: {
        Header,
        Content,
        SideBar
    }
}
</script>
