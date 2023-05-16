<template>
    <header class="header">
        <div class="logo">
            <img src="/path/to/logo.png" alt="Logo" />
        </div>
        <div class="search">
            <input type="text" v-model="searchTerm" @keyup.enter="searchMovies" placeholder="Search Movies" />
            <button @click="searchMovies">Search</button>
        </div>
        <nav class="nav">
            <ul class="nav__list">
                <li class="nav__item"><a href="/">Home</a></li>
                <li class="nav__item"><a href="/about">About</a></li>
                <li class="nav__item"><a href="/random-movie">Random Movie</a></li>
            </ul>
        </nav>
    </header>
</template>
  
<script>
export default {
    setup() {
        // this.movie = useMovies();
    },
    data() {
        return {
            searchTerm: "",
            movies: []
        };
    },
    methods: {
        async searchMovies() {
            this.movies = await fetch(`http://localhost:8080/api/movies?search=${this.searchTerm}`)
                .then(response => response.json())
        },
    },
};
</script>
  
<style scoped>
.header {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 1rem;
    background-color: #f2f2f2;
}

.logo { width: 25%; }

.logo img {
    height: 50px;
    justify-self: flex-start;
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
    color: #333;
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
    background-color: #007bff;
    color: #fff;
    border: none;
    border-radius: 5px;
    padding: 0.5rem 1rem;
    cursor: pointer;
}
</style>