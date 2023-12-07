# Setup

1. Add webpack and webpack-cli as dev dependencies.

```
  npm i webpack webpack-cli --save-dev
```

2. Plugins - to bundle other files. Internal webpack code and third party extensions use plugins.

```
  npm i html-webpack-plugin --save-dev
```

3. Loader - preprocess files loaded via modules. This can be JavaScript files, static assets like images and CSS styles, and compilers like TypeScript and Babel.

4. What are the main things we want this webpack config to do?

- Compile the latest and greatest JavaScript to a version the browser understands
- Import styles and compile SCSS into CSS
- Import images and fonts
- (Optional) Set up React or Vue