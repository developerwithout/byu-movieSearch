
const getData = async (query, page = 1) => {
    console.log(`requested page: ${page > 1 ? page - 1 : page}`)
    const data = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=1e59b2c0159f1a796faec2c49e9bd77e&query=${query}&append_to_response=genre, images&page=${page > 1 ? page - 1 : page}`)
        .then(response => response.json())
        .catch(err => { throw Error(err) });

    const movies = structureResults(filterResultsByPage(page))
    const pages = Math.ceil(data.total_results / 10);

    return { movies, total_movies: movies.length, currentPage: page, pages };
}

const filterResultsByPage = page => page % 2 === 0 ? data.results.slice(10,) : data.results.slice(0, 10);

const structureResults = results => results.map(item => ({
    "movie_id": item.id,
    "title": item.original_title,
    "poster_image_url": `https://image.tmdb.org/t/p/original${item.poster_path}`,
    "popularity": `${item.popularity} out of ${item.vote_count}`
}));

async function index(req, res, next) {
    try {
        const { query } = req;

        const data = await getData(query.search, query.page);

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
    index
}