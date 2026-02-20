


/*

GIT BASICS

- view your branches with `git branch`
- make a new branch with `git checkout -b new-branch-name`
- swith to an existing branch with `git checkout branch-name`
- Add all of your changes by navigating to the root directory of your project in the terminal
  and then enter `git add .`
- enter `git commit -m "My commit messge here"` to commit your changes and log a brief description
- publish your changes to github with `git push`
  - the first time you push a commit on a new branch you will have to type `git push -u origin branch-name`

Some advanced tips
- `git stash` temporarily saves your changes since your last commit and reverts to the old version. you can
  you can re-load them with `git stash pop`
- `git restore file-path` irrevocably reverts the changes you have made since the last commit for the file path specified
  - for example, I could `git restore my-file.txt` to target a specific file, or `git restore src/` to target a folder
- `git diff .` will show you the changes since your last commit. You can also specify a file path instead of the .

Creating a new git project:
- option 1: create the folder first in github and then follow the steps provided
- option 2: in an existing project directory:
  - enter `git init`
  - make a commit: `git add . && git commit -m "initial commit"` or whatever you would like to commit
  - in github, make a project with the same name as your project directory (ie results-modal)
  - connect to github: `git remote add origin https://github.com/gracemcmc/project-name.git && git push -u origin main`


*/




# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react) uses [Babel](https://babeljs.io/) (or [oxc](https://oxc.rs) when used in [rolldown-vite](https://vite.dev/guide/rolldown)) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## React Compiler

The React Compiler is currently not compatible with SWC. See [this issue](https://github.com/vitejs/vite-plugin-react/issues/428) for tracking the progress.

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type-aware lint rules:

```js
export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...

      // Remove tseslint.configs.recommended and replace with this
      tseslint.configs.recommendedTypeChecked,
      // Alternatively, use this for stricter rules
      tseslint.configs.strictTypeChecked,
      // Optionally, add this for stylistic rules
      tseslint.configs.stylisticTypeChecked,

      // Other configs...
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```

You can also install [eslint-plugin-react-x](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-x) and [eslint-plugin-react-dom](https://github.com/Rel1cx/eslint-react/tree/main/packages/plugins/eslint-plugin-react-dom) for React-specific lint rules:

```js
// eslint.config.js
import reactX from 'eslint-plugin-react-x'
import reactDom from 'eslint-plugin-react-dom'

export default defineConfig([
  globalIgnores(['dist']),
  {
    files: ['**/*.{ts,tsx}'],
    extends: [
      // Other configs...
      // Enable lint rules for React
      reactX.configs['recommended-typescript'],
      // Enable lint rules for React DOM
      reactDom.configs.recommended,
    ],
    languageOptions: {
      parserOptions: {
        project: ['./tsconfig.node.json', './tsconfig.app.json'],
        tsconfigRootDir: import.meta.dirname,
      },
      // other options...
    },
  },
])
```
