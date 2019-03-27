const express = require('express');
const app = express();

const fileUpload = require('express-fileupload');

const fileConfig = fileUpload({
  limits: { fileSize: 20 * 1024 * 1024 },
  abortOnLimit: true,
  preserveExtension: 3,
});

app.post('/api/check_rom', fileConfig, async (req, res, next) => {
  try {
    console.log(req.files);
  
    /* run lambda here */
  
    const romOk = !!req.files.rom;
    res.status(200).send(romOk);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.post('/api/upload_rom', fileConfig, async (req, res, next) => {
  try {
    console.log(req.files);

    /* run lambda here */
  
    const romOk = !!req.files.rom;
    res.status(200).send(romOk);
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export default app;
