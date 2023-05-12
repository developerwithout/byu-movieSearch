<template>
    <div class="movie-card" @click="$emit('click', movie)">
        <img :src="movie.poster_image_url" alt="Movie Poster" />
        <div class="movie-info">
            <h2>{{ movie.title }}</h2>
            <p>{{ movie.description }}</p>
            <p>{{ movie.popularity_summary }}</p>
        </div>
    </div>
</template>

<script>
export default {
    props: {
        movie: Object
    }
}
</script>
    
<style>
.movie-card {
    cursor: pointer;
    display: flex;
    align-items: center;
    margin-bottom: 1rem;
}

.movie-card img {
    width: 200px;
    border-radius: 5px;
    margin-right: 1rem;
}

.movie-card h2 {
    margin-bottom: 0.25rem;
    font-size: 1.5rem;
    font-weight: bold;
}

.movie-card p {
    margin: 0;
    font-size: 1.25rem;
    margin-top: .5rem
}
</style >