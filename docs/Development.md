You'll want to set up two configurations for webpack:

- a production config, that minifies, optimizes and removes all source maps
- a development config, that runs webpack in a server, updates with every change, and has source maps

To set up for development, you'll install webpack-dev-server.

```
  npm i -D webpack-dev-server
```