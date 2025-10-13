# iamdev-site

A modern, customizable personal developer portfolio and blog built with Next.js, Tailwind CSS, and TypeScript. Designed for Persian (Farsi) language and RTL (right-to-left) layout, it features beautiful typography, modular architecture, and easy content management.

---

## Table of Contents

- [Project Purpose](#project-purpose)
- [Technologies Used](#technologies-used)
- [Folder Structure](#folder-structure)
- [Key Features](#key-features)
- [Installation](#installation)
- [Usage](#usage)
- [Configuration](#configuration)
- [Contribution Guidelines](#contribution-guidelines)
- [Special Notes](#special-notes)

---

## Project Purpose

**iamdev-site** is a template for developers to showcase their skills, projects, and blog posts. It supports Persian fonts, RTL layout, and is optimized for customization and scalability.

---

## Technologies Used

| Technology      | Purpose                                 |
|-----------------|-----------------------------------------|
| Next.js         | React-based framework for SSR/SSG       |
| TypeScript      | Type safety for JavaScript              |
| Tailwind CSS    | Utility-first CSS framework             |
| tailwindcss-rtl | RTL support for Tailwind                |
| MDX             | Markdown + JSX for content              |
| ESLint          | Code linting                            |
| PostCSS         | CSS processing                          |

---

## Folder Structure

```bash
.
├── public/                # Static files
│   ├── images/            # Image assets
│   └── favicon.ico        # Favicon
├── src/                   # Source files
│   ├── components/        # Reusable components
│   ├── layouts/           # Layout components
│   ├── pages/             # Page components
│   ├── styles/            # Global styles
│   └── utils/             # Utility functions
├── .eslintrc.json         # ESLint configuration
├── .gitignore             # Ignored files in Git
├── next.config.js         # Next.js configuration
├── package.json            # Project metadata and dependencies
└── tailwind.config.js     # Tailwind CSS configuration
```

---

## Key Features

- **Responsive Design**: Mobile-friendly and responsive layout.
- **Dark Mode**: Elegant dark mode for better readability at night.
- **Blog Support**: Built-in support for blogging with MDX.
- **i18n Ready**: Easily translatable with built-in i18n support.
- **SEO Optimized**: Out-of-the-box SEO optimization features.

---

## Installation

To get started with iamdev-site, follow these steps:

1. **Clone the repository**:

   ```bash
   git clone https://github.com/Kasraco/iamdev-site.git
   ```

2. **Navigate to the project directory**:

   ```bash
   cd iamdev-site
   ```

3. **Install dependencies**:

   ```bash
   npm install
   ```

---

## Usage

To run the development server:

```bash
npm run dev
```

Open your browser and navigate to `http://localhost:3000`.

---

## Configuration

iamdev-site is highly configurable. Key configuration files include:

- **next.config.js**: Next.js specific configurations.
- **tailwind.config.js**: Tailwind CSS customizations.
- **package.json**: Scripts and project metadata.

---

## Contribution Guidelines

Contributions are welcome! Please follow these steps:

1. Fork the repository.
2. Create a new branch: `git checkout -b feature/YourFeature`
3. Make your changes.
4. Commit your changes: `git commit -m 'Add some feature'`
5. Push to the branch: `git push origin feature/YourFeature`
6. Submit a pull request.

---

## Special Notes

- This project is in active development. Features and APIs may change.
- For detailed documentation, visit the [Next.js](https://nextjs.org/docs) and [Tailwind CSS](https://tailwindcss.com/docs) websites.
