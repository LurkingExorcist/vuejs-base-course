<template>
    <div :class="classes" v-html="icon">
    </div>
</template>

<script>
export default {
    name: 'Icon',
    props: {
        name: String,
        theme: [String, Array]
    },
    data() {
        return {
            icon: require(`!raw-loader!../assets/icons/${this.name}.svg`).default,
            classes: ['icon']
        };
    },
    created() {
        if (Array.isArray(this.theme)) {
            this.classes = [...this.classes, ...this.theme.map(t => 'icon--' + t)];
        } else {
            this.classes = [...this.classes, 'icon--' + this.theme];
        }
    },
}
</script>

<style>
.icon svg{
    width: 20px;
    height: 20px;
}

.icon--dark svg {
    fill: white;
}
</style>