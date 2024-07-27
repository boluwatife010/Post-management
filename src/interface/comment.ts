export interface commentInterfaceRequestBody {
    _id: string;
    content: string;
    author: string;
    post: string;
    parentComment?: string;
    createdAt: Date;
    updatedAt: Date;
}