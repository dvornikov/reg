<template>
<section class="masonry">
    <div class="masonry__inner">
        <template v-for="(item, index) in tiles">
            <div :class="classes('masonry__tile', [item.type])">
                <article :class="classes('tile', ['teaser', item.type])">
                    <router-link
                        class="tile__link"
                        :to="{ name: 'details', params: { id: item.id }}">
                        <div class="tile__inner" :style="styles(item.id)">
                            <div class="tile__text">
                                <h2 class="tile__title">
                                        {{ item.title }}
                                </h2>
                                <div class="tile__description">
                                    {{ item.description }}
                                </div>
                            </div>
                        </div>
                    </router-link>
                </article>
            </div>
        </template>
    </div>
</section>
</template>
<script>
export default {
    props: {
        tiles: {
            type: Array,
            required: true
        }
    },
    methods: {
        styles(id) {
            // let size = '600/400'
            return {
                backgroundImage: 'url(https://placekitten.com/300/200?image=' + id + ')'
            };
        },
        // Для лаконичсности лучше через directive
        classes(block, modifier) {
            let result = [
                block
            ];

            for (var i = 0; i < modifier.length; i++) {
                result.push(block + '_' + modifier[i]);
            }

            return result;
        }
    }
};
</script>
<style>
.masonry {
    overflow-x: hidden;
}

.masonry__inner {
    display: -webkit-box;
    display: -webkit-flex;
    display: -ms-flexbox;
    display: flex;
    -webkit-flex-wrap: wrap;
        -ms-flex-wrap: wrap;
            flex-wrap: wrap;
    margin: 0 -10px;
    padding: 0 5px;
}

.masonry__tile {
    padding: 0 5px 10px;
}
.masonry__tile_normal {
    width: 33.333333%;
}
.masonry__tile_double {
    width: 66.666666%;
}

.tile__link {
    display: block;
}

.tile__inner {
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 50% 60%;
    color: #fff;
    height: 200px;

    text-shadow: 0px 0px 2px rgba(0,0,0,.7);
    position: relative;
}

.tile_teaser .tile__text {
    background: -webkit-gradient(
      linear,
      left top, left bottom,
      from(rgba(0, 0, 0, 0)),
      to(rgba(0, 0, 0, 0.6))
    );
    background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0),
      rgba(0, 0, 0, 0.6)
    );
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    color: #fff;
    padding: 17px;
}

.tile_teaser .tile__title {
    margin: 0;
}

@media screen and (max-width: 1024px) {
    .masonry__tile_normal {
        width: 50%;
    }
    .masonry__tile_double {
        width: 100%;
    }
}

@media screen and (max-width: 479px) {
    .masonry__tile_normal {
        width: 100%;
    }
    .masonry__tile_double {
        width: 100%;
    }
    .masonry__inner {
        padding: 0;
        margin: 0;
    }
    .masonry__tile {
        padding: 0;
    }
}
</style>
