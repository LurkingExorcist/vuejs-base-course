<template>
<div id="app">
    <div class="container">
        <Header/>
        <SubHeader/>
        <Content/>
    </div>
</div>
</template>

<script>
import Header from './layout/Header.vue'
import SubHeader from './layout/SubHeader.vue'
import Content from './layout/Content.vue'

import './assets/style.css';

export default {
    name: 'app',
    components: {
        Header,
        SubHeader,
        Content
    }
}
</script>
