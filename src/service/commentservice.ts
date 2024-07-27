import {commentModel} from '../model/commentmodel'
import { commentInterfaceRequestBody } from '../interface/comment'

//Comment on a post
export const commentPost = async(body: commentInterfaceRequestBody) => {
    const newComment = await commentModel.create(body);
    if (!newComment) {
        throw new Error ('Could not add comment');
    }
    await newComment.save();
    return newComment;
}
//Get comment
export const getComment = async(postId: string) => {
    const comments = await commentModel.find({ post: postId }).populate('author', 'username profilePicture').sort({ createdAt: -1 });
    if(!comments) {
        throw new Error('Could not get all comments')
    }
  return comments;
}