<template>
<header class="header">
    <div class="header-logo">
        Deezer Wrapper
    </div>
    <div class="subheader-container">
        <div class="subheader__item search">
            <VInputText
                v-model="searchText"
                :theme="['dark', 'clickable']"
                icon="search"
                @icon-click="onSearch"
            />
        </div>
    </div>
</header>
</template>

<script>
import VLink from '../components/abstract/Link.vue';
import VInputText from '../components/abstract/InputText.vue';

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
    methods: {
        async onSearch() {
            // todo: vuex dispatch or smthng
            const {
                data
            } = await axios.get(`/api/artist?q=${this.searchText}`);
            console.log(data);
        }
    }
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
