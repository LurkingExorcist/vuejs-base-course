<template>
    <Card
        img="https://picsum.photos/480/?random"
    >
        <div class="album-title">Title: {{ item.title }}</div>
        <div class="album-genres-container">
            Genres: 
            <div class="album-genres">
                <div 
                    class="album-genres__item"
                    v-for="(genre, i) in item.genres"
                    :key="i"
                >
                    {{ genre }}
                </div>
            </div>
        </div>
    </Card>
</template>

<script>
import Card from './abstract/Card.vue';

export default {
    name: 'AlbumCard',
    components: {
        Card
    },
    props: {
        item: Object
    }
}
</script>

<style scoped>
    .album-genres-container {
        display: flex;
        align-items: center;
    }

    .album-genres {
        display: flex;
        flex-wrap: wrap;
        margin-left: 8px;
    }

    .album-genres__item {
        background: rgb(109, 221, 236);
        padding: 4px;
        border-radius: 4px;
        margin: 4px;
    }
</style>