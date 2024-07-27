export interface postRequestBody {
    _id: string;
    content: string;
    image: string;
    category: string;
    author: string;
    upvotes: number;
    downvotes: number;
    viewCount: number;
    createdAt: Date;
    updatedAt: Date;
}
export interface updateRequestBody {
    postId: string,
    userId: string,

}
export interface deleteRequestBody {
    postId: string,
    userId: string
}
export interface getPostRequestBody {
    sortBy: string,
     category?: string
}