# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

Fumble is a dating app built with Next.js 16, React 19, and Socket.IO for real-time communication. It features a Tinder-like card swiping interface with profiles, chat functionality, and user authentication.

## Running the Application

```bash
# Install dependencies
npm install

# Run development server (uses custom server.js with Socket.IO)
npm run dev

# Build for production
npm run build

# Run production server
npm run start

# Lint code
npm run lint
```

The app runs on http://localhost:3000 by default.

## Architecture

**Custom Server Setup:**
- Uses a custom Node.js server (`server.js`) instead of the default Next.js server
- Integrates Socket.IO with Next.js for real-time features
- Server creates both HTTP server and Socket.IO instance

**Tech Stack:**
- Next.js 16 with App Router (not Pages Router)
- React 19 with client components
- TypeScript
- Tailwind CSS 4 (inline theme configuration in globals.css)
- Framer Motion for animations and swipe gestures
- Socket.IO for real-time chat
- Lucide React for icons

**Project Structure:**
- `/app` - Next.js App Router directory
  - `/components` - All UI components (11 total)
  - `page.tsx` - Main application entry point with tab navigation
  - `layout.tsx` - Root layout with custom font (Alliance No.1 Light)
  - `globals.css` - Tailwind imports and custom CSS variables
  - `socket.js` - Socket.IO client initialization
- `/public` - Static assets (profile images, SVGs)
- `server.js` - Custom HTTP server with Socket.IO integration

**Component Architecture:**
The app uses a tab-based navigation with three main views:
1. **SwipingView** - Card-based profile browsing with swipe gestures
2. **ChatView** - List of chat conversations
3. **SelfProfileView** - User's own profile

**Key Components:**
- `SwipeableCard` (app/components/SwipeableCard.tsx:14) - Wrapper providing swipe gesture handling with Framer Motion drag controls, visual feedback overlays (like/nope indicators), and threshold-based swipe detection
- `ProfileCard`, `PhotoCard`, `PromptCard`, `VitalsCard` - Different card types for profile content
- `ChatDetailView` - Individual chat conversation interface
- `LoginView` - Authentication interface

## State Management

- React useState hooks for local component state
- No global state management library (Redux, Zustand, etc.)
- Socket.IO connection state managed in main page.tsx (app/page.tsx:20-49)
- Authentication state stored as boolean flag (app/page.tsx:16)

## Styling

- Uses Tailwind CSS 4 with inline theme configuration
- Custom CSS variables defined in globals.css (--background, --foreground, --card-bg)
- Custom font: Alliance No.1 Light loaded via Next.js localFont
- Mobile-first responsive design with max-w-md container
- Color palette: Rose-500 for primary actions, Zinc grays for UI

## Socket.IO Integration

- Client: `socket.js` exports a singleton socket instance
- Server: Socket.IO server initialized in `server.js:15`
- Connection lifecycle managed with connect/disconnect event handlers
- Transport upgrades tracked (polling -> websocket)

## TypeScript Configuration

- Target: ES2017
- Uses `"use client"` directive for all interactive components
- Path alias: `@/*` maps to project root
- Strict mode enabled
