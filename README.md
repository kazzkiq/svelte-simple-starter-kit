# svelte-simple-starter-kit

A SPA (Single Page Application) starter-kit with Svelte, routing and other candies!

Features:

- ES6 -> ES5 compiling (via Babel)
- Routing (via [roadtrip](https://github.com/Rich-Harris/roadtrip))
- Svelte components as pages (views)*

*\* = You can also create other components at will, and import them anywhere in your application.*

The pages (which are Svelte components) are loaded/unloaded upon route change, which helps to keep your project as memory-lean as possible. But don't worry, this functionality need to be explicitly declared on each view, so you can choose where (or on what circumstances) your view should (or not) be destroyed when another route is called.

All the other features are up to you (how you will make AJAX requests, SCSS or LESS, which node libraries you want to use, etc).

### Installing SASS
No preprocessor is used by default. But if you want to use SASS in your peojct, you only need to run one command: `npm install --save-dev sass-brunch` and rename your CSS files from `.css` to `.scss`. Its simple as that.

### Using any other npm library
Simply run `npm install --save my-awesome-lib` and import it into your desired `.js` file (using ES6 import syntax).

## Installation, Development and Building for production
* Install (if you don't have them):
    * [Node.js](http://nodejs.org): `brew install node` on OS X
    * [Brunch](http://brunch.io): `npm install -g brunch`
    * App dependencies: `npm install`
* Run:
    * `npm start` — watches the project with continuous rebuild. This will also launch HTTP server with [pushState](https://developer.mozilla.org/en-US/docs/Web/Guide/API/DOM/Manipulating_the_browser_history).
    * `npm run build` — builds minified project for production
* Learn:
    * `public/` dir is fully auto-generated and served by HTTP server.  Write your code in `app/` dir.
    * Place static files you want to be copied from `app/assets/` to `public/`.
