# @ngmd/linter

🔧 **Комплексное решение для линтинга Angular проектов**

Библиотека `@ngmd/linter` предоставляет готовые конфигурации ESLint, Prettier и Stylelint для Angular проектов. Включает в себя автоматическую настройку всех необходимых линтеров и форматтеров.

## ✨ Особенности

- 🔍 **ESLint конфигурация** с Angular-специфичными правилами
- 💅 **Prettier форматирование** для консистентного стиля кода
- 🎨 **Stylelint настройки** для SCSS и CSS файлов
- ⚡ **Zero-config setup** - работает из коробки
- 📦 **Модульная архитектура** - используйте только нужные компоненты
- 🔧 **Расширяемые конфигурации** для кастомизации под проект

## 📋 Включенные инструменты

### ESLint плагины и правила

- `@angular-eslint` - специфичные правила для Angular
- `@typescript-eslint` - поддержка TypeScript
- `eslint-plugin-import` - проверка импортов
- `eslint-plugin-prettier` - интеграция с Prettier
- `eslint-plugin-simple-import-sort` - сортировка импортов
- `eslint-plugin-unused-imports` - удаление неиспользуемых импортов

### Prettier конфигурация

- Автоматическое форматирование TypeScript, HTML, CSS/SCSS
- Поддержка Angular шаблонов
- Организация атрибутов в HTML
- Форматирование многострочных массивов

### Stylelint правила

- Стандартные правила для SCSS
- Интеграция с Prettier
- Упорядочивание CSS свойств

## 🚀 Быстрый старт

### 1. Установка

```bash
npm install @ngmd/linter --save-dev
```

### 2. Инициализация при помощи CLI

> ⚡ **Быстрая настройка в одну команду**

Для автоматической настройки всего проекта выполните команду из корневой директории:

```bash
npx ngmd-linter
```

**Что делает команда:**

- ✅ Создает конфигурационные файлы для ESLint, Prettier и Stylelint
- ✅ Настраивает все необходимые правила автоматически
- ✅ Интегрируется с существующей структурой Angular проекта

**Требования:**

- Команда должна запускаться из корня Angular проекта (где находится `angular.json`)
- В проекте должны отсутствовать файлы `.prettierignore`, `.prettierrc.js`, `eslint.config.js`, `stylelint.config.js`

**Пример использования:**

```bash
cd your-angular-project
npx ngmd-linter
# ✅ Проект настроен и готов к работе!
```

**Удалить prettier блок из package.json**

Если при создании проекта через `@angular/cli` был добавлен блок **prettier** в корневой `package.json`, то этот блок нужно удалить

```json
// package.json
{
  // Удалить блок полностью
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
  // Удалить блок полностью
}
```

> ⚡ **После автоматического подключения желательно перезагрузить вашу IDE**

### 3. Ручная настройка (альтернативный способ)

#### 3.1. Настройка ESLint

Создайте в корне вашего проекта файл `eslint.config.js`:

```javascript
const { useAggregatorConfigs } = require("@ngmd/linter/eslint");

module.exports = useAggregatorConfigs();
```

#### 3.2. Настройка Stylelint

Создайте файл `stylelint.config.js`:

```javascript
const useStylelintConfig = require("@ngmd/linter/stylelint");

module.exports = useStylelintConfig();
```

#### 3.3. Настройка Prettier

Создайте файл `.prettierrc.js`:

```javascript
const base = require("@ngmd/linter/prettier");

module.exports = {
  ...base,
  overrides: [...base.overrides],
};
```

#### 3.3. Настройка Prettier Ignore

Создайте файл `.prettierignore`;

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

#### 3.4. Обновление tsconfig.json

В файле `tsconfig.json` установите:

```json
{
  "compilerOptions": {
    "strictNullChecks": false
  }
}
```

#### 3.5. Добавление скриптов в angular.json

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

> ⚡ **После ручного подключения желательно перезагрузить вашу IDE**

## 📚 Подробное руководство

### Структура проекта после настройки

```
your-angular-project/
├── eslint.config.js              # конфигурация ESLint
├── .prettierrc.js                # конфигурация Prettier
├── stylelint.config.js           # конфигурация Stylelint
├── .prettierignore               # игнорируемые файлы для Prettier
└── angular.json                  # обновленный с lint командами
```

### Переопределение и расширение правил

#### Eslint

```javascript
const {
  useAggregatorConfigs,
  expandLintIgnores,
} = require("@ngmd/linter/eslint");

const configOverrideSettings = {
  // Расширение списка игнорируемых файлов
  ignores: expandLintIgnores(["dist", "coverage"]),

  // Переопределение правил (желательна только минимальная настройка)
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

Для prettier на данный момент не предусмотрена возможность изменения конфигурации

### Команды для запуска

```bash
# Запуск линтинга через Angular CLI
ng lint

# Прямой запуск ESLint
npx eslint src/**/*.ts

# Форматирование с Prettier
npx prettier --write src/**/*.{ts,html,scss}

# Проверка стилей с Stylelint
npx stylelint src/**/*.{css,scss}
```

## 🔧 Решение проблем

### Команда npx ngmd-linter не работает

1. Убедитесь, что пакет установлен: `npm list @ngmd/linter`

### Конфликты с существующими конфигурациями

1. Сделайте резервную копию существующих файлов
2. Удалите старые конфигурации ESLint/Prettier/Stylelint
3. Запустите `npx ngmd-linter` заново

### Ошибки линтинга в существующем коде

1. Запустите автоисправление: `ng lint --fix`
2. Для массовых изменений используйте: `npx prettier --write src/`
3. При необходимости добавьте исключения в конфигурацию

## 📦 Зависимости

Пакет включает в себя следующие зависимости:

- `angular-eslint` ~18.3.1
- `eslint` ~9.9.1
- `prettier` ~3.3.3
- `stylelint` ~16.10.0
- `typescript-eslint` ~8.2.0

## 🔄 Совместимость

- **Angular:** 15+
- **Node.js:** 16+
- **TypeScript:** 4.8+
- **npm:** 8+

## 📄 Лицензия

MIT © [Maxim Demidov](mailto:sxemax1@gmail.com)
