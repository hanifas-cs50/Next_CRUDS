# Blog Website

A simple blog website built with Next.js and SQLite, featuring CRUD operations for posts.

## Prerequisites

Before you begin, ensure you have the following installed:
- Node.js (v18 or later)
- npm or yarn
- Git

## Project Setup

1. Clone the repository:
```bash
git clone <repository-url>
cd next_cruds
```

2. Install dependencies:
```bash
npm install
# or
yarn install
```

3. Set up the environment:
   - Create a `.env` file in the root directory
   - Add the following environment variable:
   ```
   DATABASE_URL=sqlite.db
   ```

4. Initialize the database:
```bash
npm run db:push
# or
yarn db:push
```

5. Start the development server:
```bash
npm run dev
# or
yarn dev
```

The application will be available at `http://localhost:3000`

## Database Setup

### Initial Setup

1. After installing dependencies, ensure you have the `.env` file with the correct `DATABASE_URL`:
   ```
   DATABASE_URL=sqlite.db
   ```

2. The database schema is defined in `lib/db/schema.js`. It includes:
   - `post` table with fields:
     - `id` (primary key)
     - `post` (text content)
     - `username` (author)
     - `createdAt` (timestamp)

3. To create the initial database and tables:
   ```bash
   npm run db:push
   ```

### Database Migrations

1. When making changes to the schema:
   - Modify the schema in `lib/db/schema.js`
   - Generate a new migration:
     ```bash
     npm run db:generate
     ```
   - Apply the migration:
     ```bash
     npm run db:push
     ```

2. To view the current database state:
   - The database file will be created at the root of your project as `sqlite.db`
   - You can use SQLite tools to inspect the database:
     ```bash
     sqlite3 sqlite.db
     ```

### Database Operations

The application uses Drizzle ORM for database operations. Key operations are handled in:
- `actions/postActions.js` - CRUD operations
- `lib/db/index.js` - Database connection setup
- `lib/db/schema.js` - Database schema definition

### Troubleshooting

If you encounter database-related issues:
1. Check if the `.env` file exists and has the correct `DATABASE_URL`
2. Ensure you have write permissions in the project directory
3. Try deleting the `sqlite.db` file and running `npm run db:push` again
4. Verify that all migrations are up to date

## Project Structure

- `/app` - Next.js app directory containing pages and layouts
- `/components` - React components
- `/lib/db` - Database configuration and schema
- `/actions` - Server actions for CRUD operations

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build the application
- `npm run start` - Start production server
- `npm run db:push` - Push database schema changes
- `npm run db:generate` - Generate database migrations

## Features

- Create, read, update, and delete posts
- User-specific post filtering
- Real-time updates
- SQLite database with Drizzle ORM

## Contributing

1. Create a new branch for your feature
2. Make your changes
3. Submit a pull request
