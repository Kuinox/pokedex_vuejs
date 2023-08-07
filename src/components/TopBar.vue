<script setup>
defineEmits(['search']);
</script>

<template>
    <div class="topBar">
        <header>
            <nav>
                <span>Kuinox's Pokedex</span>
                <input type="text" placeholder="Search..." @input="$emit('search', $event.target.value)" aria-label="search" />
                <div id="frameDropped"></div>
            </nav>
        </header>
    </div>
</template>