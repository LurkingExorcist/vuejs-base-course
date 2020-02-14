<template>
    <Card
        :img="item.picture_big"
        :img-text="item.title"
        no-caption
    />
</template>

<script>
import Card from './abstract/Card.vue';

export default {
    name: 'TracklistCard',
    components: { Card },
    props: {
        item: Object
    }
}
</script>

<style scoped>

</style>