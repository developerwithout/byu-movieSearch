<script setup>
defineProps({
    searchTerm: String,
    searchMovies: Function
})

let emit = defineEmits(['update:searchTerm'])
</script>

<template>
    <input
        type="text"
        @keyup="emit('update:searchTerm', $event.target.value)"
        placeholder="Search Movies" />
</template>