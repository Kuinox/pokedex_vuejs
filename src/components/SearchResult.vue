<script setup>
const props = defineProps({
    pokemonId: {
        type: Number,
        required: true
    },
    pokemonName: {
        type: String,
        required: true
    },
    color: {
        type: String,
        required: true
    },
    generations: {
        type: Array,
        required: true
    },
    types: {
        type: Array,
        required: true
    },
    hidden: {
        type: Boolean,
        required: true
    }
});
defineEmits(['click']);

function convertToRoman(num) {
    const romanNumerals = [
        "I",
        "II",
        "III",
        "IV",
        "V",
        "VI",
        "VII",
        "VIII",
        "IX",
        "X",
        "XI",
        "XII",
        "XIII",
        "XIV",
        "XV",
        "XVI",
        "XVII",
        "XVIII",
        "XIX",
        "XX",
    ];

    return romanNumerals[num - 1];
}
</script>

<template>
    <li :class="!hidden ? 'pokeEntry' : 'pokeEntry hidden'">
        <button @click="$emit('click')" :class="color">
            <div class="buttonContent">
                <div class="genList">
                    <span v-for="( g, i ) in  generations " :key=" i " :class=" `gen${g}` ">{{ convertToRoman(g) }}</span>
                </div>
                <img class="sprite" :src="`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${pokemonId}.png`" :alt="`Sprite of the pokemon ${pokemonName}.`" loading="lazy" />
                <span class="pokemonId"><svg xmlns="http://www.w3.org/2000/svg" height="1em" viewBox="0 0 448 512">
                        <path
                            d="M181.3 32.4c17.4 2.9 29.2 19.4 26.3 36.8L197.8 128h95.1l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3s29.2 19.4 26.3 36.8L357.8 128H416c17.7 0 32 14.3 32 32s-14.3 32-32 32H347.1L325.8 320H384c17.7 0 32 14.3 32 32s-14.3 32-32 32H315.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8l9.8-58.7H155.1l-11.5 69.3c-2.9 17.4-19.4 29.2-36.8 26.3s-29.2-19.4-26.3-36.8L90.2 384H32c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l21.3-128H64c-17.7 0-32-14.3-32-32s14.3-32 32-32h68.9l11.5-69.3c2.9-17.4 19.4-29.2 36.8-26.3zM187.1 192L165.8 320h95.1l21.3-128H187.1z" />
                    </svg>{{ pokemonId }}</span>
                <span>{{pokemonName}}</span>
                <ul className="typeList">
                    <li v-for="(t, i) in types" :key="i" :class="t">
                        {{t}}
                        <img class="typeIcon" :src="`${t}.png`" :alt="`${t} icon.`" />
                    </li>
                </ul>
                <br />
            </div>
        </button>
    </li>
</template>