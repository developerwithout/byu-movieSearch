<template>
    <div class="main-page">
        <h1 class="page-title">Movie Search</h1>
        <div class="user-card-list">
            <MovieCard
                v-for="(movie) in movies"
                :key="movie.movie_id"
                :movie="movie"
                @click=" goToMovie(movie)" />
        </div>
    </div>
</template>

<script>
import MovieCard from '~/components/MovieCard.vue'

export default{
    components: {
        MovieCard
    },
    data() {
        return {
            movies: [
                {
                    "movie_id": 1,
                    "title": "Some Movie",
                    "poster_image_url": 'https://dummyimage.com/400x600/AAA/0011ff.jpgtext=poster+image',
                    "description": "Deserunt excepteur et id mollit occaecat incididunt mollit ex. Labore est id sint ipsum esse labore. Ipsum occaecat pariatur et et minim laboris. Exercitation culpa ipsum veniam dolore ad irure dolor aliqua anim non ex magna officia nulla.",
                    "popularity_summary": "{popularity} out of {vote_count}"
                }, {
                    "movie_id": 2,
                    "title": "Some Movie 2",
                    "poster_image_url": 'https://dummyimage.com/400x600/AAA/0011ff.jpgtext=poster+image',
                    "description": "Deserunt excepteur et id mollit occaecat incididunt mollit ex. Labore est id sint ipsum esse labore. Ipsum occaecat pariatur et et minim laboris. Exercitation culpa ipsum veniam dolore ad irure dolor aliqua anim non ex magna officia nulla.",
                    "popularity_summary": "{popularity} out of {vote_count}"
                }, {
                    "movie_id": 3,
                    "title": "Some Movie 3",
                    "poster_image_url": 'https://dummyimage.com/400x600/AAA/0011ff.jpgtext=poster+image',
                    "description": "Deserunt excepteur et id mollit occaecat incididunt mollit ex. Labore est id sint ipsum esse labore. Ipsum occaecat pariatur et et minim laboris. Exercitation culpa ipsum veniam dolore ad irure dolor aliqua anim non ex magna officia nulla.",
                    "popularity_summary": "{popularity} out of {vote_count}"
                }, {
                    "movie_id": 4,
                    "title": "Some Movie 4",
                    "poster_image_url": 'https://dummyimage.com/400x600/AAA/0011ff.jpgtext=poster+image',
                    "description": "Deserunt excepteur et id mollit occaecat incididunt mollit ex. Labore est id sint ipsum esse labore. Ipsum occaecat pariatur et et minim laboris. Exercitation culpa ipsum veniam dolore ad irure dolor aliqua anim non ex magna officia nulla.",
                    "popularity_summary": "{popularity} out of {vote_count}"
                }, {
                    "movie_id": 5,
                    "title": "Some Movie 5",
                    "poster_image_url": 'https://dummyimage.com/400x600/AAA/0011ff.jpgtext=poster+image',
                    "description": "Deserunt excepteur et id mollit occaecat incididunt mollit ex. Labore est id sint ipsum esse labore. Ipsum occaecat pariatur et et minim laboris. Exercitation culpa ipsum veniam dolore ad irure dolor aliqua anim non ex magna officia nulla.",
                    "popularity_summary": "{popularity} out of {vote_count}"
                }
            ] 
        }
    },
    async created() {},
    methods: {
        goToMovie(movie) {
            console.dir(movie.title)
            this.$router.push(`/movie/${movie.title}`)
        }
    }
}
</script>

<style>
* {
    font-size: 1rem;
    box-sizing: border-box;
    margin: 0;
    font-family: Arial, Helvetica;
}

.main-page {
    max-width: 900px;
    margin: 0 auto;
}

.page-title {
    font-size: 5rem;
    display: center;
}

.movie-card-list {
    display: flex;
    flex: column wrap;
    justify-content: center;
    margin-top: 2rem;
}
</style>