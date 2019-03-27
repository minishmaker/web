const express = require('express');
const consola = require('consola');
const { Nuxt, Builder } = require('nuxt');
const app = express();
const localForage = require('localforage');
const fileUpload = require('express-fileupload');
require('dotenv').config();

// Import and Set Nuxt.js options
const config = require('../nuxt.config.js');
config.dev = !(process.env.NODE_ENV === 'production');

localForage.config({
  name: 'Minish Maker'
});

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


  app.use(fileUpload({
    limits: { fileSize: 20 * 1024 * 1024 },
    abortOnLimit: true,
    preserveExtension: 3,
  }));

  app.get('/api/check_rom', async (req, res, next) => {
    const rom = await localForage.getItem('rom');

    /* run lambda here */

    const romOk = !!rom;
    res.status(200).send(romOk);
  });

  app.post('/api/upload_rom', async (req, res, next) => {
    try {
      console.log(req.files.rom);
      // await localForage.setItem('rom', req.files.rom);
    } catch (e) {
      res.sendStatus(500);
    }

    /* run lambda here */

    const romOk = !!req.files.rom;
    res.status(200).send(romOk);
  });

  // Listen to the server
  app.listen(process.env.PORT, process.env.HOST);
  consola.ready({
    message: `Server listening on http://${process.env.HOST}:${process.env.PORT}`,
    badge: true
  });
};

start();
