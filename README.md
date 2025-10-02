
# PIMUN25 Website

A web application for **PIMUN ’25**, built using Next.js, React Hooks, and the Next.js router.  
This repository contains the client (frontend) and server (backend) code, along with shared utilities.  

## Table of Contents

- [Demo / Live Site](#demo--live-site)  
- [Tech Stack](#tech-stack)  
- [Features](#features)  
- [Repository Structure](#repository-structure)  
- [Getting Started](#getting-started)  
  - [Prerequisites](#prerequisites)  
  - [Installation](#installation)  
  - [Running Locally](#running-locally)  
  - [Environment Variables](#environment-variables)  
- [Scripts](#scripts)  
- [Deployment](#deployment)  
- [Contributing](#contributing)  
- [License](#license)  
- [Contact](#contact)  

## Demo / Live Site

You can view the live deployment here:  
[pimun25.vercel.app](https://pimun25.vercel.app)  

## Tech Stack

- **Frontend / Client**: Next.js, React, React Hooks, Tailwind CSS  
- **Backend / Server**: (if exists — e.g. Node.js / Next API routes / custom server)  
- **Database / ORM**: Drizzle (configuration file `drizzle.config.ts`)  
- **Styling**: Tailwind CSS  
- **Build / Bundler**: Vite or Next.js internal build  
- **TypeScript** throughout  

## Features

- Multi-page navigation via Next.js Router  
- Reactive components built with React Hooks  
- Shared utilities & types in `shared/`  
- Backend API routes (if applicable)  
- Integration with database using Drizzle ORM  
- Responsive design with Tailwind CSS  

## Repository Structure

```
/
├── client/                   # Next.js frontend  
├── server/                   # Backend server / API routes (if separate)  
├── shared/                   # Shared types, utilities  
├── docs/                     # Documentation  
├── design_guidelines.md      # UI / design guidelines  
├── drizzle.config.ts         # Drizzle ORM config  
├── tailwind.config.ts        # Tailwind CSS config  
├── tsconfig.json  
├── package.json  
├── vercel.json  
└── …  
```

Here’s a brief description of core directories:

- **client/**: frontend application  
- **server/**: backend / API logic  
- **shared/**: types, interfaces, helper functions used by both client & server  
- **docs/**: project documentation  
- **design_guidelines.md**: design system, UI guidelines  
- Other config and root files for build, routing, environment, etc.

## Getting Started

### Prerequisites

- Node.js (>= 18 recommended)  
- npm or yarn  
- (If using a database) credentials / access to your database instance  

### Installation

1. Clone the repository  
   ```sh
   git clone https://github.com/dev-adalz/pimun25.git
   cd pimun25
   ```

2. Install dependencies  
   ```sh
   npm install
   # or
   yarn install
   ```

### Environment Variables

Create a `.env.local` file (in root or `client/` / `server/` as needed) with content like:

```
DATABASE_URL=<your_database_url>
NEXT_PUBLIC_API_BASE_URL=<base_url_for_api>
# other secrets / API keys
```

Adjust according to how your backend / frontend are configured.

### Running Locally

Run both client & server (if separate) or the Next.js app:

```sh
npm run dev
```

Then open `http://localhost:3000` in your browser.

## Scripts

Here are some important npm scripts you may have or want to include:

| Script | Description |
|--------|-------------|
| `dev` | Run in development mode with hot reloading |
| `build` | Build the production version |
| `start` | Start the production server |
| `lint` | Run linter / code checks |
| `format` | Format code (e.g. with Prettier) |
| `db:migrate` | Run database migrations (if applicable) |

You can check `package.json` for the complete list.

## Deployment

This project is deployable to Vercel (or other hosting platforms).  
Ensure environment variables are set appropriately in the deployment environment.  
If using a serverless / API route model, you may not need a separate server.

## Contributing

Contributions, bug reports, feature requests, etc. are welcome!  
Please follow these steps:

1. Fork the repository  
2. Create a feature branch: `git checkout -b feature/YourFeature`  
3. Make your changes  
4. Test thoroughly  
5. Submit a Pull Request  

You can also open issues to discuss ideas or propose changes.

## License

Specify the license under which your code is distributed (e.g. MIT, Apache, etc.).  
For example:

```
MIT License
```

## Contact

Project maintained by *dev-adalz*.  
Feel free to reach out via GitHub or email (if you want to provide your contact).
