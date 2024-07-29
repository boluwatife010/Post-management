# Post Management API

This project is a Node.js and TypeScript-based API for managing posts in a general board. It includes functionality for creating, updating, deleting, and retrieving posts, as well as commenting, upvoting, and downvoting.

## Features

- Create, update, and delete posts
- Retrieve posts with user information and timestamps
- Upvote and downvote posts
- Add and reply to comments
- View comments for specific posts with user information and timestamps
- Sort posts by time and number of upvotes
- Filter posts by categories
- User authentication and authorization

## Technologies Used

- Node.js
- Express
- TypeScript
- MongoDB
- Mongoose
- JWT for authentication

## Getting Started

### Prerequisites

- Node.js and npm installed
- MongoDB Atlas account

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/post-management-api.git
    cd post-management-api
    ```

2. Install dependencies:

    ```sh
    npm install
    ```

3. Create a `.env` file in the root of the project and add your environment variables:

    ```env
    MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/mydatabase?retryWrites=true&w=majority
    JWT_SECRET=your_jwt_secret
    PORT=5000
    ```

4. Start the server:

    ```sh
    npm start
    ```
## Challenges and Solutions

### 1. TypeScript Integration

**Challenge**: Ensuring type safety while interacting with Mongoose models.
**Solution**: Defined TypeScript interfaces for request bodies and Mongoose models to maintain type safety across the application.

### 2. Handling Optional Fields in Interfaces

**Challenge**: TypeScript errors when dealing with optional fields.
**Solution**: Used type assertions and optional chaining to handle optional fields properly.

### 3. Removing Documents in Mongoose

**Challenge**: Encountered issues with removing documents using Mongoose.
**Solution**: Updated Mongoose version and used `deleteOne` method to remove documents.

### 4. Connecting to MongoDB Atlas

**Challenge**: Difficulty in connecting to the cloud MongoDB instance.
**Solution**: Whitelisted IP addresses and used the correct connection string format provided by MongoDB Atlas.


## API Documentation

For detailed API documentation, please refer to the [API Documentation](https://documenter.getpostman.com/view/29099038/2sA3kaDKNS) on Postman.

## License

This project is licensed under the MIT License.
