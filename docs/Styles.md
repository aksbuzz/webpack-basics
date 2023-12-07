Using a style loader is necessary to be able to do something like import 'file.css' in your scripts.

We want to write in Sass, process in PostCSS, and compile to CSS.

- sass-loader - Load SCSS and compile to CSS
- node-sass - Node Sass
- postcss-loader - Process CSS with PostCSS
- postcss-preset-env - Sensible defaults for PostCSS
- css-loader - Resolve CSS imports
- style-loader - Inject CSS into the DOM

```
  npm i -D sass-loader postcss-loader css-loader style-loader postcss-preset-env node-sass
```

PostCSS will require a config file,