<template>
    <article class="tile tile_type_normal">
        <h1 class="tile__title">{{ tile.title }}</h1>
        <img :src="'https://placekitten.com/300/200?image=' + tile.id " alt="">
        <div class="tile__text">{{ tile.text }}</div>
    </article>
</template>
<script>
export default {
    props: {
        id: {
            type: Number,
            required: true
        },
        tiles: {
            type: Array,
            required: true
        }
    },
    computed: {
        tile() {
            let i = this.tiles.map(item => item.id).indexOf(this.id);
            return this.tiles[i];
        }
    }
};
</script>
<style>
</style>
