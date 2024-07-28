import { voteModel } from '../model/votemodel';
import { postModel } from '../model/postmodel';
import { voteRequestBody } from '../interface/vote';

export const votePost = async (body: voteRequestBody) => {
  const { user, post, type } = body;
  const existingVote = await voteModel.findOne({ user, post });
  if (!existingVote) {
    throw new Error ('Could not find an existing vote')
  }
  if (existingVote) {
    if (existingVote.type === type) {
      return existingVote;
    }
    await voteModel.deleteOne({ _id: existingVote._id });
  }

  const newVote = new voteModel({ user, post, type });
  await newVote.save();
  const voteChange = type === 'upvote' ? 1 : -1;
  await postModel.findByIdAndUpdate(post, {
    $inc: type === 'upvote' ? { upvotes: 1 } : { downvotes: 1 }
  });

  return newVote;
};
