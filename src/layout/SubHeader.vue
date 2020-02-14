<template>
<section class="sub-header">
    <div class="sub-header__item sub-header__item--static">
        Search By
    </div>
    <div 
        v-for="(cat, i) in categories"
        :key="i"
        :class="{
            'sub-header__item': true,
            'sub-header__item--active': 
                cat.type === subjectType
        }"
    >
        {{ cat.title }}
    </div>
</section>
</template>

<script>
import { mapState } from 'vuex';

export default {
    name: 'SubHeader',
    data() {
        return {
            categories: [
                {
                    title: 'Artist',
                    type: 'artist'
                },
                {
                    title: 'Album',
                    type: 'album'
                },
                {
                    title: 'Track',
                    type: 'track'
                },
                {
                    title: 'Radio',
                    type: 'radio'
                }
            ]
        }
    },
    computed: {
        ...mapState(['subjectType', 'isSearchFocused'])
    }
}
</script>

<style scoped>
.sub-header {
    display: flex;
    padding: 8px;
    border-right: 1px solid;
    border-left: 1px solid;
}

.sub-header__item:not(:last-child) {
    margin-right: 8px;
}

.sub-header__item {
    cursor: pointer;
    border: 1px solid black;
    padding: 2px;
    transition: 0.3s;
}

.sub-header__item--active {
    background: black;
    color: white;
}

.sub-header__item--static {
    border: none;
    font-weight: bold;
}

</style>
