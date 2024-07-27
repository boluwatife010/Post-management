import mongoose from 'mongoose';
import validator from 'validator';
const Schema = mongoose.Schema
const postSchema = new Schema ({
  content: { type: String, required: true },
  image: { type: String },
  category: { type: Schema.Types.ObjectId, ref: 'Category', required: true },
  author: { type: Schema.Types.ObjectId, ref: 'User', required: true },
  upvotes: { type: Number, default: 0 },
  downvotes: { type: Number, default: 0 },
  viewCount: { type: Number, default: 0 }
},
{timestamps: true})
export const postModel = mongoose.model("Post", postSchema);