<template>
    <div class="main-page">
        <h1 class="page-title">Movie Search</h1>
        <div class="user-card-list">
            <MovieCard v-for="(movie) in movies" :key="movie.movie_id" :movie="movie" @click="goToMovie(movie)" />
            <Pagination :current="currentPage" :pages="totalPages" />
        </div>
    </div>
</template>

<script>
import MovieCard from '~/components/MovieCard.vue';

export default {
    components: {
        MovieCard
    },
    setup() {
        // this.movie = useMovies();
    },
    data() {
        return {
            movies: [],
            currentPage: 0,
            totalPages: 0
        }
    },
    async created() {
        const data = await useFetch('http://localhost:8080/api/movies/popular/').then(response => response.data.value.response);
        this.movies = data.movies;
        this.currentPage = data.page;
        this.totalPages = data.pages;
    },
    methods: {
        goToMovie(movie) {
            console.dir(movie.title)
            // this.$router.push(`/movie/${movie.title}`)
        }
    }
}
</script>

<style>
.main-page {
    max-width: 900px;
    margin: 0 auto;
}

.page-title {
    font-size: 5rem;
    display: center;
    text-align: center;
}

.movie-card-list {
    display: flex;
    flex: column wrap;
    justify-content: center;
    margin-top: 2rem;
}
</style>