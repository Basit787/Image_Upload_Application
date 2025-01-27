# Image Upload Application

A modern web application that allows users to upload, view, and manage images using AWS S3 for storage.

## Features

- 🖼️ Image upload functionality
- 🔍 Image preview and viewing
- 🗑️ Image deletion capability
- ⚡ Real-time updates using React Query
- 🎨 Modern UI with customizable components
- ☁️ AWS S3 integration for reliable storage
- 🔒 Secure image handling

## Tech Stack

- Hono.js
- TypeScript
- Docker
- MongoDB
- Zod

## Project Structure

```
Backend/
├── src/
│ ├── constants/
│ ├── controller/
│ ├── db/
│ ├── lib/
│ ├── middleware/
│ ├── models/
│ ├── routes/
│ ├── utils/
│ └── zod/
```

## Getting Started

### 1. Install dependencies

```bash
npm install
```

### 2. Setting up environment variables

Copy contents from `.env.sample` and add into `.env`

### 3. Run docker to start mongoDb

```bash
docker compose up
```

### 4. Run the application

Run the development server.

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.
