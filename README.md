# Svelte 2 Simple Startet Kit

This starter kit aims at fast, simple and clean builds for small projects.

It features:

- **Svelte 2** for components;
- **Svelte/Store** for [state management](https://v2.svelte.dev/guide#state-management).
- **SASS** as CSS preprocessor;
- **roadtrip** as routing tool;
- **Rollup** as bundler/task-runner;
- **Buble** as ES6/7+ transpiler.

This development stack leads to fast builds and small code footprint for production.

## Development and Deployment

### Run locally

```bash
npm run dev
```

Navigate to [localhost:5100](http://localhost:5100). You should see your app running. Edit a component file in `src`, save it, and reload the page to see your changes.

### Build

```bash
npm run build
```

The build files will be at /public folder.


## Routing

This kit uses a very simple routing system, roadtrip. It basically manages URL state and listen to changes firing the right route whenever needed.

The routes can be found in `./src/routes.js`. Each route must have a **handler** assigned to it. A handler is just a class with a get method `route()` returning an object with `enter()` and `leave()` functions. Those are fired everytime said route enters or leaves in the application.

To make things clearer, here is an example of a handler:

```js
export default class IndexHandler {
  get route() {
    return {
      enter(current, previous) {
        console.log('Fired: index page (entering)');
      },
      leave(current, previous) {
        console.log('Fired: index page (leaving)');
      }
    }
  }
}
```

And here is how it would look like in `routes.js`:

```js
import roadtrip from 'roadtrip';
import IndexHandler from './pages/index/index.handler';

export default class Routes {
  constructor() {
    this.router = roadtrip;
    this.init();
  }

  init() {
    this.index_handler = new IndexHandler();

    this.router
      .add('/', this.index_handler.route)
      .start({
        fallback: '/'
      });
  }
}
```

For every new route, you can simply add a new `.add()` method to the file above:

```js
// ...
init() {
  this.index_handler = new IndexHandler();
  this.users_handler = new UsersHandler();
  this.user_details_handler = new UserDetailsHandler();

  this.router
    .add('/', this.index_handler.route)
    .add('/users', this.users_handler.route)
    .add('/users/:id', this.user_details_handler.route)
    .start({
      fallback: '/'
    });
}
```

Handlers behave like browser by default, that means that for every new route, the older one is flushed away along with its components. This prevents high memory consumption and keeps things cool in low-capacity mobile devices.

But that often isn't the approach one may want. In some cases, a subroute shouldn't flush away the components that already are renderized on screen. Perhaps it should just update them. Those cases are also addressable in handlers, since you have full control of which action you want to take on every route that gets fired on your application.


WIP...
