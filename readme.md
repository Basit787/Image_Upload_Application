# Image Upload Project

## Description

This project provides an image upload service with key features for secure and efficient image management. It supports multiple file formats, provides secure uploads, and integrates additional capabilities such as image resizing. Ideal for applications requiring robust image-handling solutions.

## Table of Contents

- [Features](#features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [API Reference](#api-reference)
- [Technologies Used](#technologies-used)

## Features

- Supports multiple image formats (e.g., JPEG, PNG,JPG, etc.)
- Secure file upload with validation
- Integration with cloud storage services
- RESTful API for managing images
- Easy-to-use frontend interface

## Installation

```bash
# Clone the repository
git clone https://github.com/Basit787/S3_Image_upload.git

# Navigate to the project directory
cd Image_Upload_Application

# Install dependencies
npm install
```

## Usage

Examples of how to use the image upload service:

### Uploading an Image

Use the provided API endpoint to upload images using a POST request with form-data containing the image file.

### Fetching Uploaded Images

Use the GET endpoint to retrieve a list of uploaded images with their URLs.

## Configuration

### Environment Variables

The following environment variables are required:

- `AWS_ACCESS_KEY_ID` - Your AWS access key
- `AWS_SECRET_ACCESS_KEY` - Your AWS secret key
- `S3_BUCKET_NAME` - The name of your S3 bucket
- `S3_REGION` - The AWS region of your S3 bucket

### Configuration Files

Ensure you have a `.env` file in the root of the project with the required variables set.

### API Keys or Credentials

Obtain the necessary API keys for cloud storage and set them in your environment file.

## API Reference

### Upload Image

**Endpoint**: `/api/upload`

**Method**: `POST`

**Request Body**: Form-data containing the image file

**Response**:

```json
{
  "status": "success",
  "imageUrl": "https://<bucket-name>.s3.<region>.amazonaws.com/<image-key>"
}
```

### Fetch Images

**Endpoint**: `/api/images`

**Method**: `GET`

**Response**:

```json
[
  {
    "id": "1",
    "url": "https://<bucket-name>.s3.<region>.amazonaws.com/<image-key>"
  },
  {
    "id": "2",
    "url": "https://<bucket-name>.s3.<region>.amazonaws.com/<image-key>"
  }
]
```

## Technologies Used

- **Next.js** - Frontend framework for React
- **Tailwind CSS** - Utility-first CSS framework
- **shadcn** - Pre-built UI components
- **React Query** - Data-fetching and state management
- **Axios** - Promise-based HTTP client
- **Zod** - Schema validation
- **TypeScript** - Type-safe JavaScript
- **Hono** - Lightweight web framework for the backend
- **Node.js** - Backend runtime
- **MongoDB** - Database for storing metadata
- **Docker** - Containerization platform
- **AWS S3** - Cloud storage for images
