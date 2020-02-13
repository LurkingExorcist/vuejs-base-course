<template>
    <Card
        img="https://picsum.photos/480"
    >
        <div class="artist-title">Artist: {{ title }}</div>
        <div class="artist-genres-container">
            Genres: 
            <div class="artist-genres">
                <div 
                    class="artist-genres__item"
                    v-for="(genre, i) in genres"
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
    name: 'ArtistCard',
    components: {
        Card
    },
    props: {
        title: String,
        genres: Array
    }
}
</script>

<style scoped>
    .artist-genres-container {
        display: flex;
        align-items: center;
    }

    .artist-genres {
        display: flex;
        margin-left: 8px;
    }

    .artist-genres__item:not(:last-child) {
        margin-right: 8px;
    }

    .artist-genres__item {
        background: rgb(109, 221, 236);
        padding: 4px;
        border-radius: 4px;
    }
</style>