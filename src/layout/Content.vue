<template>
    <div class="content">
        <ArtistCard
            v-for="(artist, i) in artists"
            :title="artist.title"
            :genres="artist.genres"
            :key="i"
        />
    </div>
</template>

<script>
import ArtistCard from '../components/ArtistCard.vue';

export default {
    name: 'Content',
    components: {
        ArtistCard
    },
    data() {
        return {
            artists: [...new Array(8)].map((_, i) => ({
                title: i.toString().repeat(8),
                genres: [...new Array(4)].map((_, i) => i.toString().repeat(4))
            }))
        }
    },
    mounted() {}

}
</script>
