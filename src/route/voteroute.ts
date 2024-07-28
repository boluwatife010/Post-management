import express from 'express';
import { votePostHandler } from '../controller/votecontrol';

const router = express.Router();

router.post('/vote', votePostHandler);

export default router;
