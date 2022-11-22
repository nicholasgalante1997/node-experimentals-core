# Webpack Bundled Monorepo with Subpackages, Chunked / Multiple Output

## What is this?

### Babel 

#### What is Babel?

Babel is a JavaScript compiler

Babel is a toolchain that is mainly used to convert ECMAScript 2015+ code into a backwards compatible version of JavaScript in current and older browsers or environments. Here are the main things Babel can do for you:

- Transform syntax
- Polyfill features that are missing in your target environment (through a third-party polyfill such as core-js)
- Source code transformations (codemods)

#### JSX and React

Babel can convert JSX syntax! 

You can install this preset with

```bash
npm install --save-dev @babel/preset-react
```

and add @babel/preset-react to your Babel configuration.

#### Type Annotations (Flow and TypeScript)

Babel can strip out type annotations! Keep in mind that Babel doesn't do type checking; you'll still have to install and use Flow or TypeScript to check types.

You can install the typescript preset

```bash
npm install --save-dev @babel/preset-typescript
```

and add @babel/preset-typescript to your babel configuration

#### Pluggable

Babel is built out of plugins. Compose your own transformation pipeline using existing plugins or write your own. Easily use a set of plugins by using or creating a preset.

Create a plugin on the fly with astexplorer.net or use generator-babel-plugin to generate a plugin template.

```js
// A plugin is just a function
export default function({ types: t }) {
  return {
    visitor: {
      Identifier(path) {
        let name = path.node.name; // reverse the name: JavaScript -> tpircSavaJ
        path.node.name = name
          .split("")
          .reverse()
          .join("");
      },
    },
  };
}
```

#### Debuggable

Source map support so you can debug your compiled code with ease.

#### Spec Compliant

Babel tries to stay true to the ECMAScript standard, as much as reasonably possible. It may also have specific options to be more spec compliant as a tradeoff to performance.

#### Compact

Babel tries using the least amount of code possible with no dependence on a bulky runtime.

This may be difficult to do in cases, and there are "assumptions" options that tradeoff spec compliancy for readability, file size, and speed.

#### Usage Guide (loose tutorial)

This guide will show you how to compile your JavaScript application code that uses ES2015+ syntax into code that works in current browsers. That will involve both transforming new syntax and polyfilling missing features.

The entire process to set this up involves:

Start a new node workspace

```bash
npm init
```

Running these commands to install the packages:

```bash
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

Creating a config file named babel.config.json (requires v7.8.0 and above) in the root of your project with this content:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

The browsers list above is just an arbitrary example. You will have to adapt it for the browsers you want to support. See here for more @babel/preset-env options.

Or babel.config.js if you are using an older Babel version

```js
const presets = [
  [
    "@babel/preset-env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
];

module.exports = { presets };
```

And running this command to compile all your code from the src directory to lib:

```shell
./node_modules/.bin/babel src --out-dir lib
```

You can use the npm package runner that comes with npm@5.2.0 to shorten that command by replacing ./node_modules/.bin/babel with npx babel

#### Basic usage with CLI

All the Babel modules you'll need are published as separate npm packages scoped under @babel (since version 7). This modular design allows for various tools each designed for a specific use case. 

Here we'll look at @babel/core and @babel/cli.

##### Core Library

The core functionality of Babel resides at the @babel/core module. After installing it:

```shell
npm install --save-dev @babel/core
```

you can require it directly in your JavaScript program and use it like this:

```js
const babel = require("@babel/core");

babel.transformSync("code", optionsObject);
```

As an end-user though, you'll probably want to install other tools that serve as an interface to @babel/core and integrate well with your development process. Even so, you might still want to check its documentation page to learn about the options, most of which can be set from the other tools as well.

##### CLI tool

**@babel/cli** is a tool that allows you to use babel from the terminal. Here's the installation command and a basic usage example:

```shell
npm install --save-dev @babel/core @babel/cli

./node_modules/.bin/babel src --out-dir lib
```

This will parse all the JavaScript files in the src directory, apply any transformations we have told it to, and output each file to the lib directory. Since we haven't told it to apply any transformations yet, the output code will be identical to the input (exact code styling is not preserved). We can specify what transformations we want by passing them as options.

We used the --out-dir option above. You can view the rest of the options accepted by the cli tool by running it with --help. But the most important to us right now are --plugins and --presets.

#### Plugins & Presets

Transformations come in the form of plugins, which are small JavaScript programs that instruct Babel on how to carry out transformations to the code. You can even write your own plugins to apply any transformations you want to your code. To transform ES2015+ syntax into ES5 we can rely on official plugins like @babel/plugin-transform-arrow-functions:

```shell
npm install --save-dev @babel/plugin-transform-arrow-functions

./node_modules/.bin/babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

Now any arrow functions in our code will be transformed into ES5 compatible function expressions:

```js
const fn = () => 1;

// converted to

var fn = function fn() {
  return 1;
};

```

That's a good start! But we also have other ES2015+ features in our code that we want transformed. Instead of adding all the plugins we want one by one, we can use a "preset" which is just a pre-determined set of plugins.

Just like with plugins, you can create your own presets too to share any combination of plugins you need. For our use case here, there's an excellent preset named env.

```shell
npm install --save-dev @babel/preset-env

./node_modules/.bin/babel src --out-dir lib --presets=@babel/env

```

Without any configuration, this preset will include all plugins to support modern JavaScript (ES2015, ES2016, etc.). But presets can take options too. Rather than passing both cli and preset options from the terminal, let's look at another way of passing options: configuration files.

#### Configuration

There are a few different ways to use configuration files depending on your needs. Be sure to read our in-depth guide on how to configure Babel for more information.

For now, let's create a file called babel.config.json (requires v7.8.0 and above) with the following content:

```json
{
  "presets": [
    [
      "@babel/preset-env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        }
      }
    ]
  ]
}

```

Now the env preset will only load transformation plugins for features that are not available in our target browsers. We're all set for syntax. Let's look at polyfills next.

#### Polyfills

**An important note**

> 🚨 As of Babel 7.4.0, this package has been deprecated in favor of directly including core-js/stable (to polyfill ECMAScript features): 
```js
import "core-js/stable"; 
```
> If you are compiling generators or async function to ES5, and you are using a version of @babel/core or @babel/plugin-transform-regenerator older than 7.18.0, you must also load the regenerator runtime package. It is automatically loaded when using @babel/preset-env's useBuiltIns: "usage" option or **@babel/plugin-transform-runtime**

