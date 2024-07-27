import express from 'express';
import { deletePost, createPost, updatePost, getPost } from '../service/postservice';
import { postRequestBody, updateRequestBody, deleteRequestBody, getPostRequestBody } from '../interface/post';

// Create Post Handler
export const createPostHandler = async (req: express.Request, res: express.Response) => {
  const { postData } = req.body;
  const authorId = req.headers.authorid as string;  // Extract authorId from headers
  try {
    if (!postData || !authorId) {
      return res.status(400).send({ message: 'Please fill in your post details' });
    }
    const post: postRequestBody = await createPost({ ...postData, author: authorId, upvotes: 0, downvotes: 0, viewCount: 0, createdAt: new Date(), updatedAt: new Date() });
    return res.status(200).send({ message: 'Post successfully created', post });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: 'Internal server error.' });
  }
};

// Update Post Handler
export const updatePostHandler = async (req: express.Request, res: express.Response) => {
  const { postId } = req.params;
  const updateData = req.body;
  const authorId = req.headers.authorid as string;  // Extract authorId from headers
  try {
    if (!postId || !updateData || !authorId) {
      return res.status(400).send({ message: 'Please complete the following requirements' });
    }
    const update: postRequestBody = await updatePost({ postId, userId: authorId }, updateData);
    return res.status(200).send({ message: 'Successfully updated post details', update });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: 'Internal server error.' });
  }
};

// Delete Post Handler
export const deletePostHandler = async (req: express.Request, res: express.Response) => {
  const { postId } = req.params;
  const authorId = req.headers.authorid as string;  // Extract authorId from headers
  try {
    const post: postRequestBody = await deletePost({ postId, userId: authorId });
    return res.status(200).send({ message: 'Post successfully deleted', post });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: 'Internal server error.' });
  }
};

// Get Post Handler
export const getPostHandler = async (req: express.Request, res: express.Response) => {
  const { sortBy, category } = req.query;
  try {
    if (!sortBy) {
      return res.status(400).send({ message: 'Please provide a valid sortBy parameter.' });
    }
    const posts = await getPost({ sortBy: sortBy as string, category: category as string | undefined });
    return res.status(200).send({ posts });
  } catch (err) {
    console.log(err);
    return res.status(500).send({ message: 'Internal server error.' });
  }
};
