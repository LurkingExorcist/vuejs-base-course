<template>
<div class="header">
    <div class="header-logo">
        Music Service
    </div>
    <div class="subheader-container">
        <div class="subheader__item search">
            <VInputText
                v-model="searchText"
                theme="dark"
                icon="search"
            />
        </div>
    </div>
</div>
</template>

<script>
import VLink from '../components/Link.vue';
import VInputText from '../components/InputText.vue';

export default {
    name: 'Header',
    components: {
        VLink,
        VInputText
    },
    data() {
        return {
            searchText: '',
            links: [{
                title: 'Home',
                href: '/home'
            }, {
                title: 'Music',
                href: '/music'
            }]
        }
    },
    mounted() {}

}
</script>

<style scoped>
.header-logo {
    font-size: 24px;
}

.subheader-container {
    display: flex;
    font-size: 16px;
}

.subheader__item:not(:last-child) {
    margin-right: 8px;
}
</style>
