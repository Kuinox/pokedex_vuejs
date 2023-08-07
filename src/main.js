import { createApp } from 'vue'
import App from './App.vue'
import { initializePokemonStore } from "@kuinox/pokedex.js";

initializePokemonStore("").then((pokeStore) => {
    createApp(App, {
        "pokeStore": pokeStore
    }).mount('#app')
});
