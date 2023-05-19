<template>
    <div class="main-page">
        <h1 class="page-title">Movie Search</h1>
        <div class="movie-card-list">
            <MovieCard v-for="(movie) in movies" :key="movie.movie_id" :movie="movie" @click="goToMovie(movie)" />
        </div>
        <Pagination :currentPage="currentPage" :pageCount="totalPages" class="pagination" @update="goToPage"
            @nextPage="pageChangeHandle('next')" @previousPage="pageChangeHandle('previous')"
            @loadPage="pageChangeHandle" />
    </div>
</template>

<script>
import MovieCard from '~/components/MovieCard.vue';

export default {
    components: {
        MovieCard
    },
    data() {
        return {
            movies: [],
            currentPage: 0,
            totalPages: 0
        }
    },
    async created() {
        const data = await useFetch('http://localhost:8080/api/movies/popular/?page=1').then(response => response.data.value.response);
        this.movies = data.movies;
        this.currentPage = data.currentPage;
        this.totalPages = data.pages;
    },
    methods: {
        goToMovie(movie) {
            this.$router.push(`/movie/${movie.title}`)
        },
        async goToPage(page) {
            const data = await useFetch(`http://localhost:8080/api/movies/popular/?page=${page}`).then(response => response.data.value.response);
            this.movies = data.movies;
            this.currentPage = data.currentPage;
            this.totalPages = data.pages;
        },
        async pageChangeHandle(value) {
            switch (value) {
                case 'next':
                    this.currentPage += 1
                    break
                case 'previous':
                    this.currentPage -= 1
                    break
                default:
                    this.currentPage = value
            }
            const { data } = await useFetch(`http://localhost:8080/api/movies/popular/?&page=${this.currentPage}`).then(response => response.data.value.response);

            console.log(data)
            this.movies = data.movies;
            this.currentPage = data.currentPage;
            this.totalPages = data.pages;
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
    flex-flow: column;
    justify-content: center;
    margin-top: 2rem;
}
</style>