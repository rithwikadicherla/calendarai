const router = require('express').Router();
const {google} = require('googleapis');

const GOOGLE_CLIENT_ID = "56473341549-hhvu8bpfou3bal9lim6su9090bapk6fd.apps.googleusercontent.com";
const GOOGLE_CLIENT_SECRET = "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";

const oauth2Client = new google.auth.OAuth2(
  GOOGLE_CLIENT_ID,
  GOOGLE_CLIENT_SECRET,
  "http://localhost:3000"
);

router.get('/', async (req, res, next) => {
  res.send({ message: 'Ok api is working 🚀' });
});

router.post('/create-tokens', async (req, res, next) => {
  try{
const {code} = req;

// const {tokens} = await oauth2Client.getToken(code);
res.send({code});

  } catch (error){
    next(error)
  }
})

module.exports = router;
