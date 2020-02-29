<template>
    <sui-menu attached="top">
        <sui-menu-item 
            v-for="({ title, href }, i) in links"
            :key="i"
            :active="$route.path === href"
            link 
            @click="$router.push(href)"
        >
            {{ title }}
        </sui-menu-item>
        <sui-menu-menu position="right">
            <sui-menu-item 
                :active="$route.path === '/search'"
                link 
                right
                @click="$router.push('/search')"
            >
                Поиск
            </sui-menu-item>
        </sui-menu-menu>
    </sui-menu>
</template>

<script>

export default {
    name: "Header",
    data() {
        return {
            searchText: "",
            links: [
                {
                    title: "Радио",
                    href: "/"
                },
                {
                    title: "Исполнители",
                    href: "/artists"
                }
            ]
        };
    }
};
</script>
