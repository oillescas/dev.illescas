# illescas.dev Linktree Clone

This project is a simple Linktree clone built with Astro and Tailwind CSS for illescas.dev. It provides a clean and customizable page to showcase multiple links in a user-friendly interface.

## 🚀 Project Structure

Inside of your Astro project, you'll see the following folders and files:

```text
/
├── public/
│   └── favicon.svg
├── src/
│   ├── components/
│   │   ├── Card.astro
│   │   ├── LinkButton.astro
│   │   └── ThemeToggle.astro
│   ├── content/
│   │   └── links/
│   │       ├── github.md
│   │       ├── linkedin.md
│   │       ├── twitter.md
│   │       └── website.md
│   ├── layouts/
│   │   └── Layout.astro
│   ├── pages/
│   │   └── index.astro
│   └── styles/
│       └── global.css
├── astro.config.mjs
├── package.json
└── tailwind.config.mjs
```

## 🧞 Commands

All commands are run from the root of the project, from a terminal:

| Command                   | Action                                           |
| :------------------------ | :----------------------------------------------- |
| `npm install`             | Installs dependencies                            |
| `npm run dev`             | Starts local dev server at `localhost:4321`      |
| `npm run build`           | Build your production site to `./dist/`          |
| `npm run preview`         | Preview your build locally, before deploying     |
| `npm run astro ...`       | Run CLI commands like `astro add`, `astro check` |
| `npm run astro -- --help` | Get help using the Astro CLI                     |
| `npm run test`            | Run tests using Vitest                           |
| `npm run lint`            | Run ESLint to check for code issues              |

## 🔗 Adding New Links

To add a new link to your Linktree clone:

1. Create a new Markdown file in the `src/content/links/` directory. Name it something descriptive, like `newplatform.md`.

2. In the new file, add the following frontmatter:

   ```markdown
   ---
   title: New Platform Name
   href: https://newplatform.com/yourusername
   order: 5  # Adjust this number to change the order of appearance
   icon: fa-newplatform  # Use a Font Awesome icon class
   ---
   ```

3. Adjust the `title`, `href`, `order`, and `icon` fields as needed:
   - `title`: The text that will appear on the button
   - `href`: The URL the button should link to
   - `order`: A number that determines the position of the link (lower numbers appear first)
   - `icon`: A Font Awesome icon class (make sure it's available in the project)

4. Save the file. The new link will automatically appear on your page the next time you build or run the development server.

Remember to use unique `order` numbers to avoid conflicts in positioning.

## 🎨 Customization

You can customize the appearance of your Linktree clone by modifying the following files:

- `src/styles/global.css`: For global CSS styles
- `tailwind.config.mjs`: To adjust Tailwind CSS configuration
- `src/components/LinkButton.astro`: To change the appearance of link buttons
- `src/pages/index.astro`: To modify the overall layout of the page

## 👀 Want to learn more?

Feel free to check [Astro documentation](https://docs.astro.build) for more information on how to extend this project.