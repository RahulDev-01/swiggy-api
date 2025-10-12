# Swiggy Clone API 📍 ⚡

A Node.js Express API server for the Swiggy clone application, providing endpoints for categories and restaurant chains data.

## Features

- **Categories API**: Get food categories data
- **Restaurant Chains API**: Get top restaurant chains data
- **CORS enabled**: Ready for cross-origin requests
- **Vercel deployment ready**: Configured for serverless deployment

## API Endpoints

- `GET /` - Health check and API information
- `GET /categories` - Get all food categories
- `GET /top-restaurant-chains` - Get top restaurant chains

## Local Development

1. Install dependencies:
   ```bash
   npm install
   ```

2. Start the development server:
   ```bash
   npm run dev
   ```

3. The server will run on `http://localhost:5000`

## Deployment on Vercel

This API is configured for deployment on Vercel. Follow these steps:

### Prerequisites
- A Vercel account (sign up at [vercel.com](https://vercel.com))
- Git repository with your code

### Deployment Steps

1. **Install Vercel CLI** (optional but recommended):
   ```bash
   npm i -g vercel
   ```

2. **Deploy via Vercel CLI**:
   ```bash
   vercel
   ```
   Follow the prompts to deploy.

3. **Deploy via Vercel Dashboard**:
   - Go to [vercel.com](https://vercel.com) and sign in
   - Click "New Project"
   - Import your Git repository
   - Vercel will automatically detect the configuration
   - Click "Deploy"

### Environment Variables

If you have environment variables in your `.env` file, add them in the Vercel dashboard:
1. Go to your project settings
2. Navigate to "Environment Variables"
3. Add your variables

## Project Structure

```
swiggy-api/
├── data/
│   ├── category.json
│   └── restaurantChains.json
├── public/
├── index.js
├── package.json
├── vercel.json
└── README.md
```

## Configuration Files

- `vercel.json`: Vercel deployment configuration
- `package.json`: Node.js dependencies and scripts
- `.gitignore`: Git ignore rules