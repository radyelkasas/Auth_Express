# Express.js Authentication Starter with TypeScript

A robust starter template for building authentication systems with Express.js and TypeScript. This project provides a foundation for quickly setting up authentication in new projects without starting from scratch.

## Features

- **TypeScript Integration**: Fully typed codebase for better development experience
- **Authentication System**: Ready-to-use authentication endpoints
- **Express.js Framework**: Built on top of the popular Express.js framework
- **Email Service**: Integration with Nodemailer for verification emails
- **Input Validation**: Using Zod schema validation
- **Environment Configuration**: Dotenv for environment variable management
- **Code Quality Tools**: ESLint and Prettier configured for code consistency

## Getting Started

### Prerequisites

- Node.js (v16 or higher)
- npm or yarn package manager
- Git

### Installation

1. Clone the repository:
```bash
git clone https://github.com/radyelkasas/express-auth-typescript.git
cd express-auth-typescript
```

2. Install dependencies:
```bash
npm install
```

3. Set up environment variables:
```bash
cp .env.example .env
```

4. Edit the `.env` file with your configuration:
```
PORT=3000
JWT_SECRET=your_jwt_secret
EMAIL_SERVICE=gmail
EMAIL_USER=your_email@gmail.com
EMAIL_PASSWORD=your_app_password
```

### Development

To start the development server with hot reloading:

```bash
npm run dev
```

The server will be running at `http://localhost:3000` (or the port specified in your .env file).

### Building for Production

```bash
npm run build
```

This will compile TypeScript to JavaScript in the `dist` directory.

### Running in Production

```bash
npm start
```

## Project Structure

```
├── src/
│   ├── config/        # Configuration files
│   ├── controllers/   # Request handlers
│   ├── middleware/    # Express middleware
│   ├── models/        # Data models
│   ├── routes/        # API routes
│   ├── services/      # Business logic
│   ├── utils/         # Utility functions
│   ├── validators/    # Input validation schemas
│   └── index.ts       # Application entry point
├── .env               # Environment variables
├── .eslintrc.js       # ESLint configuration
├── .prettierrc        # Prettier configuration
├── package.json       # Project dependencies
├── tsconfig.json      # TypeScript configuration
└── README.md          # Project documentation
```

## API Endpoints

The authentication system provides the following endpoints:

### Authentication

- `POST /api/auth/register` - Register a new user
- `POST /api/auth/login` - Login user
- `POST /api/auth/logout` - Logout user
- `GET /api/auth/verify-email/:token` - Verify email address
- `POST /api/auth/forgot-password` - Request password reset
- `POST /api/auth/reset-password/:token` - Reset password with token

## Scripts

- `npm run build` - Compile TypeScript to JavaScript
- `npm start` - Run the compiled application
- `npm run dev` - Run the application in development mode with hot reloading
- `npm run lint` - Check code for linting errors
- `npm run format` - Format code using Prettier

## Dependencies

### Main Dependencies

- `express`: Web framework for Node.js
- `dotenv`: Environment variable management
- `nodemailer`: Email sending functionality
- `zod`: Schema validation

### Development Dependencies

- `typescript`: TypeScript language support
- `ts-node`: TypeScript execution for Node.js
- `nodemon`: Auto-restart server during development
- `eslint`: Linting utility
- `prettier`: Code formatting
- `@types/*`: TypeScript type definitions

## Contributing

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## License

This project is licensed under the ISC License.

## Acknowledgments

- Express.js team for the excellent framework
- TypeScript team for the powerful type system
