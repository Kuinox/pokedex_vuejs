<script setup>
import SearchResult from './SearchResult.vue';
const props = defineProps({
    pokeStore: {
        type: Object,
        required: true
    },
    searchText: {
        type: String,
        required: true
    }
})

const event = defineEmits(['pokemonClicked']);
const pokemons = props.pokeStore.getPokemonsWithId();
function doMatch(pokemon) {
    return pokemon.name.match(new RegExp(".*"+props.searchText+ ".*"));
}
</script>

<template>
    <ul class="pokeListUl">
        <div class="pokeList">
            <SearchResult v-for="pokemon in pokemons"
                :key="pokemon.id"
                @click="$emit('pokemonClicked', pokemon.id)"
                :hidden="!doMatch(pokemon)"
                :pokemonId="pokemon.id"
                :pokemonName="pokemon.name"
                :color="pokemon.color"
                :generations="pokemon.generations"
                :types="pokemon.types"
            />
        </div>
    </ul>
</template>