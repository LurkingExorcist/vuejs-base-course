<template>
<a :class="classes" :href="href">
    <slot />
</a>
</template>

<script>
export default {
    name: 'Link',
    props: {
        href: String,
        theme: [String, Array]
    },
    data() {
        return {
            classes: ['link']
        }
    },
    created() {
        if (Array.isArray(this.theme)) {
            this.classes = [...this.classes, ...this.theme.map(t => 'link--' + t)];
        } else {
            this.classes = [...this.classes, 'link--' + this.theme];
        }
    }
}
</script>

<style scoped>
.link {
    text-decoration: none;
}

.link--header {
    color: #f0f0f0;
}

.link--header:hover {
    color: #f5f5f5;
}

.link--header:active {
    color: #f3f3f3;
}
</style>
