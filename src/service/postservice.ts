import { postRequestBody, updateRequestBody, deleteRequestBody, getPostRequestBody } from '../interface/post';
import { postModel } from '../model/postmodel';

// Create post
export const createPost = async (body: Omit<postRequestBody, '_id' | 'upvotes' | 'downvotes' | 'viewCount' | 'createdAt' | 'updatedAt'>): Promise<any> => {
  try {
    const newPost = await postModel.create(body);
    if (!newPost) {
      throw new Error('Could not create post');
    }
    return newPost;
  } catch (error) {
    throw new Error('Could not create a post');
  }
};

// Update post
export const updatePost = async (updateData: updateRequestBody, updateBody: Partial<Omit<postRequestBody, '_id' | 'author'>>): Promise<any> => {
  try {
    const post = await postModel.findOneAndUpdate(
      { _id: updateData.postId, author: updateData.userId },
      updateBody,
      { new: true } // Return the updated document
    );
    if (!post) {
      throw new Error('Could not update post');
    }
    return post;
  } catch (error) {
    throw new Error('Could not update a post');
  }
};

// Delete post
export const deletePost = async (body: deleteRequestBody): Promise<any> => {
  try {
    const post = await postModel.findOneAndDelete({ _id: body.postId, author: body.userId });
    if (!post) {
      throw new Error('Post not found or not authorized');
    }
    return post;
  } catch (error) {
    throw new Error('Could not delete post');
  }
};

// Get post
export const getPost = async (body: getPostRequestBody): Promise<any> => {
  try {
    const filter: any = {};
    if (body.category) {
      filter.category = body.category;
    }
    const posts = await postModel
      .find(filter)
      .sort(body.sortBy === 'upvotes' ? { upvotes: -1 } : { createdAt: -1 })
      .populate('author', 'username profilePicture')
      .populate('category', 'name');
    if (!posts || posts.length === 0) {
      throw new Error('No posts found');
    }
    return posts;
  } catch (error) {
    throw new Error('Could not get post');
  }
};
