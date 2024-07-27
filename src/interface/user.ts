export interface IUser {
    _id: string;
    username: string;
    email: string;
    password: string;
    profilePicture: string;
  }
  export interface loginRequestBody {
    email: string,
    password: string
}
export interface updateRequestBody {
    username: string,
    email: string,
    password: string
}