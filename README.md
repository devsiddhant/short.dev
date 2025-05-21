# short.dev | URL Shortener

[![Next.js](https://img.shields.io/badge/Next.js-15.2.4-black?style=flat&logo=next.js)](https://nextjs.org/)
[![TypeScript](https://img.shields.io/badge/TypeScript-97.5%25-blue?style=flat&logo=typescript)](https://www.typescriptlang.org/)
[![TailwindCSS](https://img.shields.io/badge/TailwindCSS-3.4.17-06B6D4?style=flat&logo=tailwindcss&logoColor=white)](https://tailwindcss.com/)
[![Framer Motion](https://img.shields.io/badge/Framer_Motion-latest-blueviolet?style=flat&logo=framer)](https://www.framer.com/motion/)

> Simplify your links with style. Create short, memorable links in seconds.

## 📋 Overview

short.dev is a modern, sleek URL shortening application built with Next.js, TypeScript, and TailwindCSS. The application provides a simple and intuitive interface to convert long, unwieldy URLs into short, memorable links that are easy to share.

This project was generated using [v0.dev](https://v0.dev/), Vercel's AI-powered UI generation tool, and then customized with additional functionality.

<!-- Screenshots will be added once the application is fully deployed -->

## ✨ Features

- **URL Shortening** - Convert long URLs into short, easy-to-share links
- **Copy to Clipboard** - One-click copying of shortened URLs
- **Real-time Validation** - Validate URLs before shortening
- **Responsive Design** - Works seamlessly across desktop and mobile devices
- **Dark Mode** - Default dark theme with elegant UI
- **Smooth Animations** - Beautiful transitions and animations using Framer Motion

## 🛠️ Technology Stack

- **Frontend Framework**: [Next.js 15.2.4](https://nextjs.org/)
- **Language**: [TypeScript](https://www.typescriptlang.org/)
- **Styling**: [TailwindCSS](https://tailwindcss.com/)
- **UI Components**: [Radix UI](https://www.radix-ui.com/)
- **Animations**: [Framer Motion](https://www.framer.com/motion/)
- **Forms**: [React Hook Form](https://react-hook-form.com/)
- **Validation**: [Zod](https://github.com/colinhacks/zod)
- **API Integration**: [Bitly API](https://dev.bitly.com/)

## 🚀 Getting Started

### Prerequisites

- [Node.js](https://nodejs.org/) (v18 or higher)
- [pnpm](https://pnpm.io/) (recommended) or npm/yarn

### Installation

1. Clone the repository
   ```bash
   git clone https://github.com/devsiddhant/short.dev.git
   cd short.dev
   ```

2. Install dependencies
   ```bash
   pnpm install
   ```

3. Set up environment variables
   Create a `.env.local` file in the root directory and add your Bitly API token:
   ```env
   BITLY_ACCESS_TOKEN=your_bitly_access_token
   ```
   
   Note: You'll need to [register for a Bitly account](https://bitly.com/a/sign_up) and [generate an access token](https://app.bitly.com/settings/api/) to use the URL shortening functionality.

4. Start the development server
   ```bash
   pnpm dev
   ```

5. Open [http://localhost:3000](http://localhost:3000) in your browser to see the application

### Building for Production

```bash
pnpm build
pnpm start
```

## 📚 Usage

1. Enter the long URL you want to shorten in the input field
2. Click the "Shorten Link" button
3. Copy the generated short URL with the copy button
4. Share your shortened URL!

The application automatically:
- Validates your URL format
- Adds the https:// protocol if missing
- Uses the Bitly API to generate a short bit.ly link
- Provides error messages if shortening fails

## 🧩 Project Structure

```
short.dev/
├── app/                  # Next.js 15 app directory
│   ├── actions.ts        # Server actions for URL shortening
│   ├── globals.css       # Global styles
│   ├── layout.tsx        # Root layout component
│   └── page.tsx          # Main page component
├── components/           # Reusable UI components
│   ├── ui/               # UI components (buttons, inputs, etc.)
│   └── theme-provider/   # Theme provider for dark mode
├── hooks/                # Custom React hooks
├── lib/                  # Utility functions and helpers
├── public/               # Static assets
├── styles/               # Additional styles
├── components.json       # UI component configuration
├── next.config.mjs       # Next.js configuration
├── package.json          # Project dependencies
├── pnpm-lock.yaml        # pnpm lock file
├── postcss.config.mjs    # PostCSS configuration
├── tailwind.config.ts    # TailwindCSS configuration
└── tsconfig.json         # TypeScript configuration
```

## 💻 Development

The project follows modern Next.js 15 App Router conventions.

### Key Files

- **app/page.tsx** - The main page component that contains the URL shortening form and UI
- **app/actions.ts** - Server action for handling URL shortening using the Bitly API
- **app/layout.tsx** - The root layout component with theme provider
- **components/ui/** - Reusable UI components based on Radix UI primitives

### Key Dependencies

The project uses a number of dependencies to provide a rich user experience:

- **UI Components**: All Radix UI React components for building accessible interfaces
- **Styling**: TailwindCSS with animations plugin
- **Forms**: React Hook Form with Zod validation
- **Date Handling**: date-fns
- **Notifications**: Sonner for toast notifications

## 🤝 Contributing

Contributions to short.dev are welcome! Feel free to open issues or submit pull requests.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/amazing-feature`)
3. Commit your changes (`git commit -m 'Add some amazing feature'`)
4. Push to the branch (`git push origin feature/amazing-feature`)
5. Open a Pull Request

## 📝 License

No specific license has been specified for this project. Please contact the repository owner for permission before using, modifying, or distributing this code.

## 👨‍💻 Author

**Siddhant**
- GitHub: [@devsiddhant](https://github.com/devsiddhant)

## 📊 Project Status

This project is in early development as indicated by:
- Version 0.1.0 in package.json
- Recent commit dates (May 2025)
- No published releases

---

Made with ❤️ using Next.js, TypeScript, and TailwindCSS