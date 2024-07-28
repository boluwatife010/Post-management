export interface voteRequestBody {
  _id: string;
  user: string;
  post: string;
  type: 'upvote' | 'downvote';
}