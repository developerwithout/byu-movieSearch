const movieSearchApiBase = 'https://api.themoviedb.org/3/search/movie?';
const popularApiBase = 'https://api.themoviedb.org/3/movie/popular?';
const apiKey = '1e59b2c0159f1a796faec2c49e9bd77e';
const defaultParams = '&language=en-US&include_adult=false&append_to_response=images'

const searchMovies = async (search, page = 1) => {
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1e59b2c0159f1a796faec2c49e9bd77e&query=${search}&append_to_response=genre,images&page=${page > 1 ? page - 1 : page}&include_adult=false&language=en-US&region=US`)
        .then(response => response.json())
        .catch(err => { throw Error(err) });

    const movies = restructureResults(filterResultsByPage(data, page))
    const pages = Math.ceil(data.total_results / 10);

    return { movies, total_movies: movies.length, currentPage: page, pages };
}

const getPopularMovies = async(page = 1) => {
    const data = await fetch(`https://api.themoviedb.org/3/movie/popular?api_key=1e59b2c0159f1a796faec2c49e9bd77e&language=en-US&page=1&include_adult=false&append_to_response=genre,images`)
        .then(response => response.json())
        .catch(err => { throw new Error(err) })

    const movies = restructureResults(filterResultsByPage(data, page))
    const pages = Math.ceil(data.total_results / 10);
    
    return { movies, total_movies: movies.length, currentPage: page, pages };
}

const filterResultsByPage = (data, page) => page % 2 === 0 ? data.results.slice(10,) : data.results.slice(0, 10);

const restructureResults = results => results.map(item => ({
    "movie_id": item.id,
    "title": item.original_title,
    "poster_image_url": `https://image.tmdb.org/t/p/original${item.poster_path}`,
    "summary": item.overview,
    "popularity": `${item.popularity} out of ${item.vote_count}`,
}));


const search = async(req, res, next) => {
    try {
        const { query } = req

        const data = await searchMovies(query.search, query.page);

        res.json({
            message: 'success',
            response: data
        });

    } catch (error) {
        console.error(error)
        res.status(500).json({
            status: 500,
            message: 'Error Retrieving Data',
            error
        })
        next()
    }
}

const popular = async(req, res, next) => {
    try {
        const { page } = req.query;
        const data = await getPopularMovies(page);

        res.json({
            message: 'success',
            response: data
        });
    } catch (error) {
        console.error(error)
        res.status(500).json({
            status: 500,
            message: 'Error Retrieving Data',
            error
        })
    }
}

export default {
    search,
    popular
}