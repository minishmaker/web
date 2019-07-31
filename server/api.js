// https://www.mono-project.com/docs/getting-started/install/linux/

const express = require('express');
const fileUpload = require('express-fileupload');
const apigClientFactory = require('aws-api-gateway-client').default;

const app = express();

const config = {
  invokeUrl: process.env.AWS_API_URL,
  accessKey: process.env.AWS_ACCESS_KEY_ID,
  secretKey: process.env.AWS_SECRET_ACCESS_KEY,
  region:    process.env.AWS_API_REGION,
};
const randoApi = apigClientFactory.newClient(config);

const fileConfig = fileUpload({
  limits: { fileSize: 20 * 1024 * 1024 },
  abortOnLimit: true,
  preserveExtension: 3,
});

app.post('/api/check_rom', fileConfig, async (req, res, next) => {
  try {
    console.log(req.files);
  
    /* run lambda here */
  
    if (req.files) {
      const romOk = !!req.files.rom;
      res.status(200).send(romOk);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

app.post('/api/upload_rom', fileConfig, async (req, res, next) => {
  try {
    console.log(req.files);

    if (req.files) {
      const { data } = await randoApi.invokeApi({}, process.env.AWS_API_PATH, 'POST', {}, { rom: req.files.rom });
      console.log(data);
    
      const romOk = !!req.files.rom;
      res.status(200).send(romOk);
    }
  } catch (e) {
    console.error(e);
    res.sendStatus(500);
  }
});

export default app;
