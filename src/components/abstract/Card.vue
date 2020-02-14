<template>
    <section class="card">
        <div class="card__content">
            <img class="card__image" :src="img">
            <div class="card__image-text-container" v-if="imgText">
                <div class="card__image-text">
                    {{ imgText }}
                </div>
            </div>
        </div>
        <div class="card__caption" v-if="!noCaption">
            <slot />
        </div>
    </section>
</template>

<script>
export default {
    name: 'Card',
    props: {
        img: String,
        imgText: String,
        noCaption: Boolean
    }
}
</script>

<style scoped>
    .card__content {
        display: flex;
        position: relative;
        overflow: hidden;
    }

    .card__image {
        width: 100%;
        height: 100%;
    }

    .card__image-text-container {
        cursor: pointer;
        position: absolute;
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: 100%;
        transition: 0.5s;
    }

    .card__image-text-container:hover {
        background: rgba(60, 60, 60, 0.5)
    }

    .card__image-text {
        color: white;
        font-size: 36px;
        text-align: center;
    }

    @media (max-width: 1400px) {
        .card__image-text {
            font-size: 32px;
        }
    }

    @media (max-width: 1000px) {
        .card__image-text {
            font-size: 28px;
        }
    }

    @media (max-width: 600px) {
        .card__image-text {
            font-size: 20px;
        }
    }

    .card {
        border: 1px solid;
    }

    .card__caption {
        border-top: 1px solid;
        padding: 8px;
    }
</style>