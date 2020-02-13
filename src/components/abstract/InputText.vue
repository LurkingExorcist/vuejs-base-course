<template>
<div class="input-container">
    <input :class="classes" :value="value" type="text" @input="onInput">
    <Icon v-if="icon" :name="icon" :theme="theme" @click="$emit('icon-click')"/>
</div>
</template>

<script>
import Icon from './Icon.vue';

export default {
    name: 'InputText',
    components: {
        Icon
    },
    props: {
        value: String,
        theme: [String, Array],
        icon: String
    },
    data() {
        return {
            classes: ['input'],
        }
    },
    created() {
        if (Array.isArray(this.theme)) {
            this.classes = [...this.classes, ...this.theme.map(t => 'input--' + t)];
        } else {
            this.classes = [...this.classes, 'input--' + this.theme];
        }
    },
    methods: {
        onInput(e) {
            this.$emit('input', e.target.value);
        }
    }
}
</script>

<style scoped>
.input-container {
    display: flex;
}

.input {
    background: none;
    border: none;
    outline: none;
    font-size: 14px;
}

.input--dark {
    color: white;
    border-bottom: 1px solid white;
}
</style>
