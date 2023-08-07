<script setup>
import TopBar from './components/TopBar.vue'
import PokemonListDisplay from './components/PokemonListDisplay.vue'
import PokemonInfoDisplay from './components/PokemonInfoDisplay.vue'
import { ref } from 'vue'

defineProps({
  pokeStore: {
    type: Object,
    required: true
  }
});

let search = ref("");
function onSearch(searchText) {
  search.value = searchText;
}
let pokeId = ref(-1);
function onPokemonClicked(pokemonId) {
  pokeId.value = pokemonId;
}
</script>

<template>
  <TopBar @search="onSearch" />
  <PokemonListDisplay :pokeStore="pokeStore" :searchText="search" @pokemon-clicked="onPokemonClicked" />
  <PokemonInfoDisplay v-if="pokeId!==-1" :pokeStore="pokeStore" @on-close="pokeId=-1" :pokemonId="pokeId"/>
</template>
