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

## API Documentation

For detailed API documentation, please refer to the [API Documentation](https://docs.google.com/document/d/your-document-id) on Google Docs.

## License

This project is licensed under the MIT License.
