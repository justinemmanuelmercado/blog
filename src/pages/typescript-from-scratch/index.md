---
title: "Starting a typescript project from scratch"
description: How I start a typescript project
date: "2020-05-04"
thumb: cover.png
cover: cover.png
active: 1
---

*This was written as a personal guide. This is by no means the only way to start a typescript project, but this is how I usually do it.*

[Link to repo with the finished product](https://github.com/justinemmanuelmercado/typescript-from-scratch)

## Prerequisite knowledge
* npm
* node

## Initialize project

1. Create the directory
2. Run `npm init` (fill in the questions or just spam enter)
3. Run `npm i -D typescript ts-node nodemon`

Adding `typescript` is self-explanatory

Adding [ts-node](https://www.npmjs.com/package/ts-node) is to run the app without rebuilding the project everytime

Adding [nodemon](https://www.npmjs.com/package/nodemon) for automatically restarting the node application when file changes in the directory are detected

## Configure typescript

1. Create the `tsconfig.json` files
    * The easiest way to do this is with `npx tsc --init` for the default configuration 
    > [npx](https://www.npmjs.com/package/npx) is a CLI tool that allows you to run `npm` packages without having to install them globally on your machine.
2. In the `tsconfig.json` file, configure the `outDir` and `rootDir`
    * `rootDir` is the directory of your `typescript` files, and `outDir` is the build directory
    * My setup is usually typescript files in `src` output files in `lib`
```json
{
    //...
    "outDir": "lib",
    "rootDir": "src",
    //...
}
```

## Create the source files

1. Create the source directory and add an `index.ts` file. You can have a different entry file just make sure to change it later in the [setting up development](#setting-up-development) section
2. Write any valid typescript code in the `index.ts` file. For example
```typescript
const message: String = 'Hello World!'
console.log(message)
```

## Building the typescript files

To actually get usable Javascript code, you're going to have to build the typescript files.

1. To manually build files you can run `npx tsc`. What this does is just take what's in your `tsconfig.json` which right now is just read whatever is in `src` and output it into `lib`.

2. This can be automated with `npm`. Do this by adding the following line into your `package.json`  file

```json
  "scripts": {
  // ...
  "build": "rm -rf lib && tsc",
  },
```

## Setting up development

For development, we're going to use a combination of `nodemon` and `ts-node` to watch for file changes and to run the app without rebuilding.

1. Add the following lines in your `package.json` file

```json
"scripts": {
    "start": "nodemon -e ts -w ./src -x npm run watch:serve",
    "watch:serve": "node -r ts-node/register src/index.ts",
  }
```

* `npm run start`: What this script does is just tell `nodemon` to watch for file changes in `./src` and run `npm run watch:serve` each time

* `npm run watch:serve`: This just tells node to run `src/index.ts` and run it through `ts-node`

## OPTIONAL: Setting up eslint with development

> [Linting is the process of running a program that will analyse code for potential errors](https://stackoverflow.com/questions/8503559/what-is-linting)

Linting isn't required but it's definitely useful and easy to set up. For this guide we'll just use `eslint`'s built in setup wizard

1. Run `npm install -D eslint` to install eslint
2. Run `npx eslint --init` to setup the `.eslintrc.js`
3. The `eslint` wizard will ask you questions, feel free to answer them however you like but here's how I usually setup mine. The set up below uses `airbnb`'s lint rules. It automatically installs the `typescript` plugin for `eslint` if you specify the project uses typescript`

```
? How would you like to use ESLint? To check syntax, find problems, and enforce code sty
le
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? Yes
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Airbnb: https://github.com/airbnb/javascript
? What format do you want your config file to be in? JavaScript
? Would you like to install them now with npm? Yes
```

Now `eslint` is set up and to manually lint your whole project you can run `npx eslint 'src/**'`, the rules will depend on what's in your `.eslintrc.js` so [definitely do your research to manually tune your eslint rules](https://eslint.org/docs/rules/)

4. To automate this you can add an `npm run lint` script

```json
"lint": "eslint 'src/**'"
```
5. We can also integrate this into the `npm start` script and have it run each time `nodemon` reruns the code

```json
"watch:serve": "npm run lint && node -r ts-node/register src/index.ts"
```
What'll happen here is that everytime `nodemon` detects a code change, it runs lint first, and if `eslint` finds an error it outputs it in the command line and stops the code from running until you fix iteration
## Conclusion

This is how I'd normally start a `typescript` project. From here you can set up almost anything. This was purposefully set up to be what I'd consider the bare minimum to allow for flexibility.