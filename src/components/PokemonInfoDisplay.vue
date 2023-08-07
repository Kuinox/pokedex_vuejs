<script setup>
const props = defineProps({
    pokeStore: {
        type: Object,
        required: true
    },
    pokemonId: {
        type: Number,
        required: true
    }
});

const emit = defineEmits(['onClose']);

const stats = props.pokeStore.getStatsWithId(props.pokemonId);
const color = props.pokeStore.getPokemonColor(props.pokemonId);
const handleClickOutside = (e) => {
        if (e.target === e.currentTarget) {
            emit('onClose');
        }
    }
</script>

<template>
    <div class="modal" @click="handleClickOutside">
            <div :class="`modal-content ${color}`">
                <span class="close" @click="$emit('onClose')">&times;</span>
                <h3>Pokemon Stats</h3>
                <img :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`" alt="Pokemon sprite" />
                <ul>
                    <li v-for="(stat, i) in stats" :key="i">
                        {{ stat.statsName }}: {{ stat.value }}
                    </li>
                </ul>
            </div>
        </div>
</template>