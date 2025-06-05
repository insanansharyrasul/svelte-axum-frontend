# Svelte + Axum Frontend

A modern web application frontend built with SvelteKit and TypeScript, designed to work with a Rust Axum backend API. The API is taken from [axum-backend](https://github.com/insanansharyrasul/svelte-axum-backend) (Vibe coded)

## ✨ Features

- **Modern Architecture**: Built with SvelteKit and TypeScript for type safety
- **Modular Design**: Clean separation of concerns with organized component structure
- **API Integration**: Seamless integration with Rust Axum backend
- **User Management**: Create and display users with real-time updates
- **Responsive UI**: Clean, modern interface with proper loading states
- **Error Handling**: Robust error handling throughout the application

## 🚀 Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm, pnpm, or yarn
- Rust Axum backend server running on `http://localhost:3000`

### Installation

1. **Install dependencies**:
   ```bash
   npm install
   ```

2. **Start the development server**:
   ```bash
   npm run dev
   
   # or start and open in browser
   npm run dev -- --open
   ```

3. **Access the application**:
   Open your browser and navigate to `http://localhost:5173`

## 🏗️ Project Structure

```
src/
├── lib/                    # Shared libraries and components
│   ├── api.ts             # API functions for backend communication
│   ├── types.ts           # TypeScript type definitions
│   ├── styles.css         # Global styles
│   ├── components/        # Reusable Svelte components
│   │   ├── UserForm.svelte
│   │   └── UserList.svelte
│   └── index.ts           # Library exports
├── routes/                # SvelteKit routes
│   └── +page.svelte       # Main application page
├── app.html               # HTML template
└── app.d.ts               # TypeScript declarations
```

## 🛠️ Available Scripts

| Command               | Description                              |
| --------------------- | ---------------------------------------- |
| `npm run dev`         | Start development server with hot reload |
| `npm run build`       | Build for production                     |
| `npm run preview`     | Preview production build locally         |
| `npm run check`       | Run TypeScript and Svelte type checking  |
| `npm run check:watch` | Run type checking in watch mode          |

## 🔧 Development

### API Configuration

The app is configured to communicate with a backend API at `http://localhost:3000/api`. Make sure your Rust Axum server is running on port 3000.

### Adding New Features

1. **Components**: Add new Svelte components in `src/lib/components/`
2. **API Functions**: Add new API calls in `src/lib/api.ts`
3. **Types**: Define TypeScript types in `src/lib/types.ts`
4. **Styles**: Add global styles in `src/lib/styles.css`

### Code Organization

- **Modular Components**: Each component has a single responsibility
- **Type Safety**: Full TypeScript integration throughout
- **Error Handling**: Comprehensive error handling in API calls
- **Event-Driven**: Uses Svelte's event system for component communication

## 📦 Building for Production

1. **Create production build**:
   ```bash
   npm run build
   ```

2. **Preview the build**:
   ```bash
   npm run preview
   ```

The production build will be optimized and ready for deployment in the `build/` directory.

## 🚀 Deployment

To deploy your app, you may need to install an [adapter](https://svelte.dev/docs/kit/adapters) for your target environment:

- **Static hosting**: `@sveltejs/adapter-static`
- **Node.js**: `@sveltejs/adapter-node`
- **Vercel**: `@sveltejs/adapter-vercel`
- **Netlify**: `@sveltejs/adapter-netlify`

## 🤝 Backend Integration

This frontend is designed to work with a Rust Axum backend that provides:

- `GET /api/hello` - Welcome message
- `GET /api/users` - List all users
- `POST /api/users` - Create a new user

Make sure your backend server implements these endpoints and handles CORS appropriately.

## 📝 Tech Stack

- **Framework**: SvelteKit
- **Language**: TypeScript
- **Build Tool**: Vite
- **Styling**: CSS with modern features
- **Backend**: Rust Axum (separate project)

## 🐛 Troubleshooting

### Common Issues

1. **API Connection Errors**: Ensure your Rust backend is running on port 3000
2. **CORS Issues**: Configure CORS properly in your Axum backend
3. **Type Errors**: Run `npm run check` to identify TypeScript issues

### Development Tips

- Use `npm run check:watch` during development for real-time type checking
- The development server supports hot reload for fast iteration
- Check browser console for detailed error messages
