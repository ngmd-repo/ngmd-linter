# @ngmd/linter

🔧 **Comprehensive linting solution for Angular projects**

The `@ngmd/linter` library provides ready-to-use configurations for ESLint, Prettier, and Stylelint for Angular projects. Includes automatic setup of all necessary linters and formatters.

## ✨ Features

- 🔍 **ESLint configuration** with Angular-specific rules
- 💅 **Prettier formatting** for consistent code style
- 🎨 **Stylelint settings** for SCSS and CSS files
- ⚡ **Zero-config setup** - works out of the box
- 📦 **Modular architecture** - use only the components you need
- 🔧 **Extensible configurations** for project customization

## 📋 Included tools

### ESLint plugins and rules

- `@angular-eslint` - Angular-specific rules
- `@typescript-eslint` - TypeScript support
- `eslint-plugin-import` - import checks
- `eslint-plugin-prettier` - Prettier integration
- `eslint-plugin-simple-import-sort` - import sorting
- `eslint-plugin-unused-imports` - unused imports removal

### Prettier configuration

- Automatic formatting for TypeScript, HTML, CSS/SCSS
- Angular template support
- HTML attribute organization
- Multi-line array formatting

### Stylelint rules

- Standard SCSS rules
- Prettier integration
- CSS property ordering

## 🚀 Quick start

### 1. Installation

```bash
npm install @ngmd/linter --save-dev
```

### 2. CLI initialization

> ⚡ **Quick setup with one command**

For automatic setup of the entire project, run the command from the root directory:

```bash
npx ngmd-linter
```

**What the command does:**

- ✅ Creates configuration files for ESLint, Prettier, and Stylelint
- ✅ Sets up all necessary rules automatically
- ✅ Integrates with existing Angular project structure

**Requirements:**

- The command must be run from the Angular project root (where `angular.json` is located)
- The project must not have existing `.prettierignore`, `.prettierrc.js`, `eslint.config.js`, `stylelint.config.js` files

**Usage example:**

```bash
cd your-angular-project
npx ngmd-linter
# ✅ Project is configured and ready to go!
```

**Remove the prettier block from the package.json**

If the **prettier** block was added to the root `package.json` when creating the angular app via `@angular/cli`, then this block needs to be deleted

```json
// package.json
{
  // Delete the entire block
  "prettier": {
    "printWidth": 100,
    "singleQuote": true,
    "overrides": [
      {
        "files": "*.html",
        "options": {
          "parser": "angular"
        }
      }
    ]
  }
  // Delete the entire block
}
```

> ⚡ **After automatic setup, it's recommended to reload your IDE**

### 3. Manual setup (alternative method)

#### 3.1. ESLint setup

Create an `eslint.config.js` file in the root of your project:

```javascript
const { useAggregatorConfigs } = require("@ngmd/linter/eslint");

module.exports = useAggregatorConfigs();
```

#### 3.2. Stylelint setup

Create a `stylelint.config.js` file:

```javascript
const useStylelintConfig = require("@ngmd/linter/stylelint");

module.exports = useStylelintConfig();
```

#### 3.3. Prettier setup

Create a `.prettierrc.js` file:

```javascript
const prettierConfig = require("@ngmd/linter/prettier");

module.exports = prettierConfig;
```

#### 3.3. Prettier ignore setup

Create a `.prettierignore` file:

```javascript
# See http://help.github.com/ignore-files/ for more about ignoring files.
# Compiled output
/dist
/tmp
/out-tsc
/bazel-out
# Node
/node_modules
npm-debug.log
yarn-error.log
# IDEs and editors
.idea/
.project
.classpath
.c9/
*.launch
.settings/
*.sublime-workspace
# Visual Studio Code
.vscode
.history/*
# Miscellaneous
/.angular/cache
.sass-cache/
/connect.lock
/coverage
/libpeerconnection.log
testem.log
/typings
# System files
.DS_Store
Thumbs.db
**/*.md
```

#### 3.4. Updating tsconfig.json

In the `tsconfig.json` file, set:

```json
{
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

#### 3.5. Adding scripts to angular.json

```json
{
  "projects": {
    "your-project": {
      "architect": {
        "lint": {
          "builder": "@angular-eslint/builder:lint",
          "options": {
            "lintFilePatterns": ["src/**/*.ts", "src/**/*.html"]
          }
        }
      }
    }
  }
}
```

> ⚡ **After manual setup, it's recommended to reload your IDE**

## 📚 Detailed guide

### Project structure after setup

```
your-angular-project/
├── eslint.config.js              # ESLint configuration
├── .prettierrc.js                # Prettier configuration
├── stylelint.config.js           # Stylelint configuration
├── .prettierignore               # ignored files for Prettier
└── angular.json                  # updated with lint commands
```

### Rule overriding and extending

#### Eslint

```javascript
const {
  useAggregatorConfigs,
  expandLintIgnores,
} = require("@ngmd/linter/eslint");

const configOverrideSettings = {
  // Expanding the list of ignored files
  ignores: expandLintIgnores(["dist", "coverage"]),

  // Redefining rules (only minimal configuration is desirable)
  overrides: [
    {
      files: ["**/*.ts"],
      rules: {
        "@angular-eslint/component-selector": [
          "error",
          {
            type: "element",
            prefix: ["my-prefix"],
            style: "kebab-case",
          },
        ],
        "@angular-eslint/directive-selector": [
          "error",
          {
            type: "attribute",
            prefix: ["my-prefix"],
            style: "camelCase",
          },
        ],
      },
    },
  ],
};

module.exports = useAggregatorConfigs(configOverrideSettings);
```

#### Stylelint

```js
const useStylelintConfig = require("@ngmd/linter/stylelint");

module.exports = useStylelintConfig({
  plugins: ["your-plugins"],
  rules: {
    // ... your rules
  },
});
```

#### Prettier

Configuration changes are not currently available for prettier

### Running commands

```bash
# Run linting through Angular CLI
ng lint

# Direct ESLint run
npx eslint src/**/*.ts

# Formatting with Prettier
npx prettier --write src/**/*.{ts,html,scss}

# Style checking with Stylelint
npx stylelint src/**/*.{css,scss}
```

## 🔧 Troubleshooting

### The npx ngmd-linter command doesn't work

1. Make sure the package is installed: `npm list @ngmd/linter`

### Conflicts with existing configurations

1. Make a backup of existing files
2. Remove old ESLint/Prettier/Stylelint configurations
3. Run `npx ngmd-linter` again

### Linting errors in existing code

1. Run auto-fix: `ng lint --fix`
2. For bulk changes use: `npx prettier --write src/`
3. Add exceptions to configuration if necessary

## 📦 Dependencies

The package includes the following dependencies:

- `angular-eslint` ~18.3.1
- `eslint` ~9.9.1
- `prettier` ~3.3.3
- `stylelint` ~16.10.0
- `typescript-eslint` ~8.2.0

## 🔄 Compatibility

- **Angular:** 15+
- **Node.js:** 16+
- **TypeScript:** 4.8+
- **npm:** 8+

## 📄 License

MIT © [Maxim Demidov](mailto:sxemax1@gmail.com)
