const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = express();
require('dotenv').config();

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

async function start() {
  // Init Nuxt.js
  const nuxt = new Nuxt(config);

  // Build only in dev mode
  if (config.dev) {
    const builder = new Builder(nuxt);
    await builder.build();
  } else {
    await nuxt.ready();
  }

  // Give nuxt middleware to express
  app.use(nuxt.render);

  // Listen to the server
  app.listen(process.env.PORT, process.env.HOST);
  consola.ready({
    message: `Server listening on http://${process.env.HOST}:${process.env.PORT}`,
    badge: true
  });
};

start();
