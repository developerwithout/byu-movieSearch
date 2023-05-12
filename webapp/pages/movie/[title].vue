<template>
    <div class="movie">
        <img class="movie-poster" :src="this.movie.poster_image_url" alt="Movie Poster" />
        <div class="movie-info">
            <h1>{{ this.movie.title }}</h1>
            <div class="movie-description">
                <p>{{ this.movie.description }}</p>
                <div class="credits">
                    <h4>Director</h4>
                    <ul>
                        <li v-for="(director, key) in this.movie.directors" :key="key">{{ director }}</li>
                    </ul>
                    <h4>Actors</h4>
                    <ul>
                        <li v-for="(actor, key) in this.movie.actors" :key="key">
                            {{ actor }}
                        </li>
                    </ul>
                </div>
            </div>
            <p>{{ this.movie.popularity_summary }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            movie: {}
        }
    },
    async created() {
        try {
            this.movie = {
                "movie_id": 1,
                "title": "Some Movie",
                "poster_image_url": 'https://dummyimage.com/400x600/AAA/0011ff.jpgtext=poster+image',
                "description": "Deserunt excepteur et id mollit occaecat incididunt mollit ex. Labore est id sint ipsum esse labore. Ipsum occaecat pariatur et et minim laboris. Exercitation culpa ipsum veniam dolore ad irure dolor aliqua anim non ex magna officia nulla.",
                "directors": [
                    "Director",
                    "Director 1",
                    "Director 2",
                    "Director 3",
                    "Director 4",
                ],
                "actors": [
                    "Actor",
                    "Actor 1",
                    "Actor 2",
                    "Actor 3",
                    "Actor 4",
                ],
                "popularity_summary": "{popularity} out of {vote_count}"
            }
        } catch (error) {
            console.error(error)
        }
    }
}
</script>

<style>
.movie {
    max-width: 1000px;
    margin: 1rem auto;
    display: flex;
    align-items: center;
    justify-content: space-between;
}

.movie-poster {
    /* width: 200px; */
}

img {
    border-radius: 5px;
}

.movie-info {
    width: 35rem;
}

h1 {
    font-size: 5rem;
    display: center;
    margin-bottom: .5rem;
}
.movie-description {
    margin-bottom: 1rem;
}
.movie-description > * , .movie-description > .credits > *{
    margin-bottom: 0.25rem;
}
</style>