
# Redux grid example with SSR

> Technology stack used:
* React 16
* Redux
* Babel
* Node 8.5.0 + Express
* Webpack
* SASS
* Jest + Enzyme

## Install api

```js
cd api
npm install
```

## run api

```js
npm start
```

## Install app

```js
cd app
npm install
```

## run app

```js
npm start
After the build finishes, navigate to: http://localhost:8081
```
### Performance considerations:
- The application is Server Side Rendered. Wich means it's been displayed as fast as possible and the user doesn't need to wait for the javascript client side evaluation before seeing any content. Also the application will display content if javascript is disabled.

### Quality considerations
- The code is 100% eslint compliant: It follows the [airbnb React code style guide](https://github.com/airbnb/javascript/tree/master/react) all over the app. There are zero lint errors in this version.
- Unit Tests are present: Components are tested by using snapshots, in order to guarantee the UI did not changed unexpectedly
- Assets are concat and minified by using webpack, wich means only a single resource for css and js is being donwloaded to the client. The .js bundle is optimized using the production versions of react and react-dom.

### Data flow considerations:
- The application implements redux in order to handle the data flow on a clean way.

### Universal rendering.
- The components are shared by the server an the client, they can be rendered at both of them, and the app is isomorphic.

## Enhacement opportunities to implement in future versions:
- Bootstrap was implemented with a custom configuration already built on a css file, in order to quickly resolve the styling and the grid system. This could be improved by compiling de SASS modules of bootstrap in order to be available of selecting only the necessary modules to be bundled. In fact, bootstrap could be completely avoided in order to reduce the weight of the bundle.
- Autoprefixer it not working in the webpack.config file for some reason. It needs to be fixed in order to guarantee cross-browser styles compatibility.
- Altough the responsiveness is solved by bootstrap, the mobile view was not worked in detail.
- Test e2e are not implemented.

## run test

```js
npm run test
```

## run lint

```js
npm run lint
```

