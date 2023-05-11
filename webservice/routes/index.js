import { Router } from 'express';

import Movies from './movies/index.js'

const router = Router();

router.use('/movies', Movies);

export default router;