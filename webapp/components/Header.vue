<script setup>
const { movieList, setMovies } = useMovieData();
let searchTerm = ""

const emit = defineEmits(['update:search']);

const searchMovies = async () => {
    const response = await useFetch(`http://localhost:8080/api/movies?search=${searchTerm}`)
        .then(response =>response.data.value.response);

    setMovies(response)
}
</script>

<template>
    <header class="header">
        <div class="logo">
            LOGO
        </div>
        <div class="search">
            <SearchInput
                v-model="searchTerm" 
                @keyup.enter="searchMovies"/>
            <button @click="searchMovies">Search</button>
        </div>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href="/">Home</a></li>
            </ul>
        </nav>
    </header>
</template>
  
<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #2196f3;
    color: #fff;
}
.logo {
    display: flex;
    align-items: center;
    justify-content: center;
}
.logo-icon {
    stroke: #fff;
    fill: #fff;
}
.nav {
    width: 25%;
    display: flex;
    justify-content: flex-end;
}

.nav__list {
    list-style: none;
    display: flex;
    align-items: center;
}

.nav__item {
    margin: 0 1rem;
}

.nav__item a {
    color: #fff;
    text-decoration: none;
    font-weight: bold;
}

.search {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 50%;
}

.search input[type="text"] {
    padding: 0.5rem;
    font-size: 1rem;
    border-radius: 5px;
    border: none;
    margin-right: 0.5rem;
    width: 50%;
}

.search button {
    background-color: #1769aa;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
}
</style>