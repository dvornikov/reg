<template>
<div class="app-layout">
    <header>
        <nav>
            <ul class="menu">
                <li class="menu__item">
                    <router-link :to="{ name: 'home' }" class="menu__link">Home</router-link>
                </li>
                <li class="menu__item">
                    <router-link :to="{ name: 'about' }" class="menu__link">About</router-link>
                </li>
                <li class="menu__item">
                    <router-link :to="{ name: 'what-ever' }" class="menu__link">Whatever</router-link>
                </li>
            </ul>
        </nav>
    </header>
    <router-view :tiles="tiles"></router-view>
</div>
</template>
<script>
import axios from 'axios';

export default {
    data() {
        return {
            tiles: [],
            errors: []
        }
    },
    mounted() {
        axios.get('/api/tiles')
        .then(response => {
            this.tiles = response.data.tiles
        })
        .catch(e => {
            this.errors.push(e)
        })
    }
};
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Source+Sans+Pro:400,700&subset=cyrillic');

.app-layout {
    font-family: "Source Sans Pro", sans-serif;
    margin: 0 auto;
    max-width: 1280px;

}
.app-layout * {
    -webkit-box-sizing: border-box;
            box-sizing: border-box;
}

.menu {
    padding: 10px;
    border: 1px solid #000;
}
.menu__item {
    display: inline-block;
    margin-left: 6px;
}
</style>
