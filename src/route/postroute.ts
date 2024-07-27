import { Router } from 'express';
import { createPostHandler, updatePostHandler, deletePostHandler, getPostHandler } from '../controller/postcontrol';
import authMiddleware from '../middleware/auth';

const router = Router();

router.post('/', authMiddleware, createPostHandler);
router.put('/:postId', authMiddleware, updatePostHandler);
router.delete('/:postId', authMiddleware, deletePostHandler);
router.get('/', getPostHandler);

export default router;
