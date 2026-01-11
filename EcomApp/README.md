# TechStore - E-commerce Website

A professional e-commerce website for computer accessories built with React + Vite frontend and PocketBase backend.

## Features

- 🛍️ Professional product catalog
- 🛒 Shopping cart functionality
- 📱 Responsive design
- 🔍 Product search and filtering
- 📦 Category-based browsing
- 💳 Cart management

## Tech Stack

- **Frontend**: React 19, TypeScript, Vite, Tailwind CSS
- **Backend**: PocketBase
- **Icons**: Lucide React
- **Routing**: React Router DOM

## Setup Instructions

### Backend (PocketBase)

1. Navigate to the Backend folder:
   ```bash
   cd Backend
   ```

2. Run PocketBase:
   ```bash
   ./pocketbase.exe serve
   ```

3. Open PocketBase Admin UI at `http://127.0.0.1:8090/_/`

4. Create an admin account

5. Import the products collection:
   - Go to Settings > Import collections
   - Use the schema from `pocketbase-setup.js`

6. Add sample products manually or via the API

### Frontend (React + Vite)

1. Navigate to the frontend folder:
   ```bash
   cd frontend
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Start the development server:
   ```bash
   npm run dev
   ```

4. Open your browser at `http://localhost:5173`

## Project Structure

```
EcomApp/
├── Backend/
│   ├── pocketbase.exe
│   └── pocketbase-setup.js
└── frontend/
    ├── src/
    │   ├── components/
    │   │   ├── Header.tsx
    │   │   └── ProductCard.tsx
    │   ├── pages/
    │   │   ├── HomePage.tsx
    │   │   ├── ProductsPage.tsx
    │   │   └── CartPage.tsx
    │   ├── context/
    │   │   └── CartContext.tsx
    │   ├── lib/
    │   │   └── pocketbase.ts
    │   └── App.tsx
    └── package.json
```

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build
- `npm run lint` - Run ESLint

## PocketBase Collections

### Products Collection
- `name` (text, required)
- `description` (text)
- `price` (number, required)
- `category` (text, required)
- `image` (file)
- `stock` (number, required)
- `brand` (text)

## Usage

1. Browse products on the home page
2. Use the products page for detailed filtering
3. Add items to cart
4. Manage cart items and proceed to checkout

## Development Notes

- The app uses mock data for demonstration
- Replace mock data with actual PocketBase API calls
- Add authentication for user accounts
- Implement order management
- Add payment processing integration