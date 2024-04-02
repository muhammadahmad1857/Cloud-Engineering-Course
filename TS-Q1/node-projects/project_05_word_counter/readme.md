# Word-Counter-Application

m-word-counter is a command-line tool for counting words and characters in a paragraph.

## Installation

You can install m-word-counter globally using npm:

```bash
npm install -g m-word-counter
```

## Usage

To use m-word-counter, simply run the following command in your terminal:

```bash
npx m-word-counter
```

Follow the prompts to enter the paragraph you want to count. The tool will then display the total number of words and characters in the paragraph, including and excluding spaces.

2. **Publish to npm**:

To publish your package to npm, make sure you have an npm account. If you don't have one, you can create it on the npm website.

Next, navigate to the root directory of your project in the terminal and run the following command:

```bash

npm login

```

Enter your npm username, password, and email when prompted.

Once logged in, you can publish your package to npm by running:

```bash

npm publish

```

This command will publish your package to the npm registry with public access, allowing anyone to install it using `npm install Your-package-name`.

That's it! Your word counter application is now published on npm, and users can install it using `npm install Your-package-name` and use it via the `Your-package-name` command.
