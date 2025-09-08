# My Express App

This project is a web application built using Express, Prisma, MongoDB, Socket.IO, and OAuth2 for authentication. 

## Features

- RESTful API for user authentication
- Real-time communication using Socket.IO
- Database management with Prisma and MongoDB
- OAuth2 authentication support

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd my-express-app
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Set up your environment variables:
   - Create a `.env` file in the root directory and add your configuration variables.

## Usage

1. Start the application:
   ```
   npm start
   ```

2. The application will run on `http://localhost:3000`.

## API Endpoints

- **Authentication**
  - `POST /auth/login` - Log in a user
  - `POST /auth/logout` - Log out a user

## WebSocket

- The application supports real-time communication through WebSocket connections.

## License

This project is licensed under the MIT License.