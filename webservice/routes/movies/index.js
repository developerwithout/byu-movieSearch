import { Router } from 'express';
import controller from './movies.controller.js'

export const router = Router();

router.route('/')
    .get(controller.index);

export default router;