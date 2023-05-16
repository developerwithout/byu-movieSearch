import { Router } from 'express';
import controller from './movies.controller.js'

export const router = Router();

router.route('/')
    .get(controller.search);

router.route('/popular/')
    .get(controller.popular)

export default router;