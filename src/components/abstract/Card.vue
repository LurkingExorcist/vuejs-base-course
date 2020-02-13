<template>
    <div class="card">
        <div class="card__content">
            <img class="card__image" :src="img">
        </div>
        <div class="card__caption">
            <slot />
        </div>
    </div>
</template>

<script>
export default {
    name: 'Card',
    props: {
        img: String
    }
}
</script>

<style scoped>
    .card__content {
        display: flex;
    }

    .card__image {
        width: 100%;
        height: 100%;
    }

    .card {
        border: 1px solid;
    }

    .card__caption {
        border-top: 1px solid;
        padding: 8px;
    }
</style>