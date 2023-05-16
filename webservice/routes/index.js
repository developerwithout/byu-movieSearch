import { Router } from 'express';

import Movies from './movies/movies.routes.js'

const router = Router();

router.use('/movies', Movies);

export default router;