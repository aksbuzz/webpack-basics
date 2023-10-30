# Babel

Babel is a tool that allows us to use tomorrow's JavaScript, today.

```
  npm i -D babel-loader @babel/core @babel/preset-env @babel/plugin-proposal-class-properties
```

- babel-loader - Transpile files with Babel and webpack.
- @babel/core - Transpile ES2015+ to backwards compatible JavaScript
- @babel/preset-env - Smart defaults for Babel
- @babel/plugin-proposal-class-properties - An example of a custom Babel config (use properties directly on a class)

If you're setting up a TypeScript project, you would use the _typescript-loader_ instead of babel-loader for all your JavaScript transpiling needs. You would check for _.ts_ files and use _ts-loader<_.

To enable babel, create a _.babelrc_ file

```
{
  "presets": ["@babel/preset-env"],
  "plugins": ["@babel/plugin-proposal-class-properties"]
}
```
