## Black and White

Black and White is a simple, extensible UI framework.

* Reusable, modular, and easily composable html building blocks.
* Common sense default styles and helper classes.
* 100% mobile friendly via responsive design
* Desiged to be extended and built on top of

### Goals

* Build off of basic html without introducing additional markup.
* Create complex UI modules using nothing but basic building blocks, illustrated via example.
* Avoid abstract class names, meaningless wrapper classes, and default styling of tag names
* No coupling with Javascript

### Use Cases

* Use as a starting point to get up and running, without writing "throwaway" code that doesn't scale.
* Build your app structure first, worry about design later.
* Alternative to larger, more opinionated frameworks that lock you in and limit possibilities.
* Build your own opinionated CSS framework on top of this.

### How to use

* For basic users, "Plug and play" with a single minified css with out of the box components
* For advanced users, download the stylesheets directory and build off a scalable CSS architecture
* Extend the framework by following common sense strategies, illustrated by example.

## Usage

Download the `public/build/blackandwhite.min.css` and include it into your project.


## Prerequisites

- nodejs
- webpack

## Architecture

### Summary

This app is a simple, server rendered app.  It uses minimal javascript with jQuery.  Webpack is used along with ES5 style javascript.

### Webpack

**Webpack benefits:**

- Include all frontend assets explicitely via a `require`, avoiding script/style tags & global namespace problem for javascript.
- Only load what is required per page, no explicit config ( Gruntfile / Gulpfile ) needed.
- CommonsChunkPlugin is used to extact shared dependencies between pages to a `common.(js|css)`, which is browser cached on first load, and referenced later on subsequent page loads.
- Supports minified assets easily, see `webpack.production.config.js`.
- CSS assets are hot reloaded on change.

---

**Adding Pages:**

With a server rendered app, for every new page we add, we must:
- Create an EJS page to serve the html.
- Create a corresponding entry point JS file which requires all JS and SASS files for that page.

Webpack entrypoints are defined in:

`webpack.base.config.js`

The `entry_js` is specified here, it will be included in the ejs page:
```
app.get('/', function(req, res){
  res.render('index', {
    title: 'Black And White',
    entry_js: 'index'
  });
});
```

Every EJS must have a corresponding entry point JS:
```
views/index.ejs -> frontend/index.js
views/layouts.ejs -> frontend/layouts.js
```


### Isomorphic Underscore EJS templates

`/frontend/templates`

The underscore ejs templates are accessible to both client and server.

### SASS architecture

`/stylesheets`

SASS directory structure based on this setup:

https://www.sitepoint.com/architecture-sass-project/



## Developer quickstart

```
npm i               # Install packages
npm run dev         # Start web server and watch assets
```

`webpack-dev-server` hot reloads css assets on file change

`nodemon` restarts the server on change, only `app.js` is watched for changes in this project

## In production

```
npm i                     # install packages
npm run build             # build assets
npm run start             # Start web server in production mode
```


## ESLint

**TODO(@dtonys):**  `npm run lint-js`
