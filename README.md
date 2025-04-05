# randstrgen

`randstrgen` is a customizable random string generator built with simplicity, performance, and flexibility in mind.

## 🚀 Features

- Generates secure, random strings
- Fully customizable character set:
  - Lowercase letters
  - Uppercase letters
  - Numbers
  - Special characters
- Command-line interface (CLI) support
- No external dependencies

## 📦 Installation

```bash
npm install randstrgen
```

Or to use it as a CLI tool globally:

```bash
npm install -g randstrgen
```

## 🧑‍💻 Usage

### In Code

```js
const RandStrGen = require('randstrgen');

// Default: 20 characters, all types included
const generator = new RandStrGen();
console.log(generator.generate());

// Custom: 12 characters, no specials
const customGen = new RandStrGen({ length: 12, useSpecials: false });
console.log(customGen.generate());
```

### Options

| Option         | Type    | Default | Description                         |
|----------------|---------|---------|-------------------------------------|
| `length`       | Number  | 20      | Length of the generated string      |
| `useLowercase` | Boolean | true    | Include lowercase letters           |
| `useUppercase` | Boolean | true    | Include uppercase letters           |
| `useNumbers`   | Boolean | true    | Include numbers                     |
| `useSpecials`  | Boolean | true    | Include special characters          |

## 🔧 CLI Usage

You can use `randstrgen` directly from the command line:

```bash
randstrgen
```

#### Available CLI Options

```bash
--length=NUMBER        Set string length (default: 20)
--no-lowercase         Exclude lowercase letters
--no-uppercase         Exclude uppercase letters
--no-numbers           Exclude numbers
--no-specials          Exclude special characters
```

Example:

```bash
randstrgen --length=16 --no-specials
```

## 📁 Project Structure

```
randstrgen/
├── bin/              # CLI entry point
│   └── global.js
├── src/              # Source code
│   ├── utils/
│   │   └── charsets.js
│   ├── RandStrGen.js
│   └── index.js
├── README.md
└── package.json
```

## 📄 License

MIT © 2025 crisacalo