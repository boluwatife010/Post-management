import express from 'express';
import { addCommentHandler, getCommentsHandler } from '../controller/commentcontrol';

const router = express.Router();

// Route to add a comment
router.post('/add', addCommentHandler);

// Route to get comments for a post
router.get('/:postId', getCommentsHandler);

export default router;
