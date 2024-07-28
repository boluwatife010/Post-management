import mongoose from "mongoose";
const Schema = mongoose.Schema;
const voteSchema = new Schema ({
  user: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  post: { type: Schema.Types.ObjectId, ref: 'Post', required: true },
  type: { type: String, enum: ['upvote', 'downvote'], required: true }
})
export const voteModel = mongoose.model('Vote', voteSchema);