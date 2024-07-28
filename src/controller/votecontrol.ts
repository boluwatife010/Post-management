import express from 'express';
import { votePost } from '../service/voteservice';

export const votePostHandler = async (req: express.Request, res: express.Response) => {
  const { userId, postId, type } = req.body;
 try {
    if (!userId || !postId || !type) {
      return res.status(400).send({ message: 'Please provide all required fields.' });
    }

    const newVote = await votePost({
        user: userId, post: postId, type,
        _id: ''
    });
    return res.status(201).send({ message: 'Vote successfully recorded', vote: newVote });
  } catch (err) {
    console.log(err, 'Invalid err');
    return res.status(500).send({ message: 'Internal server error.' });
  }
};
