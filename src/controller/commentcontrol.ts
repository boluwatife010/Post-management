import express from 'express';
import { commentPost, getComment } from '../service/commentservice';

// Add Comment Handler
export const addCommentHandler = async (req: express.Request, res: express.Response) => {
  const { content, postId, authorId } = req.body;
  try {
    if (!content || !postId || !authorId) {
      return res.status(400).send({ message: 'Please provide all required fields.' });
    }
    const newComment = await commentPost({
        content,
        post: postId,
        author: authorId,
        _id: '',
        createdAt: new Date(),  // Setting default values for createdAt and updatedAt
        updatedAt: new Date()
    });
    return res.status(201).send({ message: 'Comment successfully added', comment: newComment });
  } catch (err) {
    console.log(err, 'Invalid err');
    return res.status(500).send({ message: 'Internal server error.' });
  }
};

// Get Comments Handler
export const getCommentsHandler = async (req: express.Request, res: express.Response) => {
  const { postId } = req.params;
  try {
    if (!postId) {
      return res.status(400).send({ message: 'Please provide a valid post ID.' });
    }
    const comments = await getComment(postId);
    return res.status(200).send({ comments });
  } catch (err) {
    console.log(err, 'Invalid err');
    return res.status(500).send({ message: 'Internal server error.' });
  }
};
