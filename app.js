const express = require("express");
const bodyParser = require('body-parser');
const https = require('https');
const cors = require('cors');
const database = require('./src/db.js');
const render = require('./src/render.js');
const publish = require('./src/publish.js');

const firebase = require("firebase");
const firebaseConfig = {
  apiKey: "AIzaSyB_m5uvIdIKbvW1ZWEphFQ_M22ERLLtLG0",
  authDomain: "tysfb-ac05c.firebaseapp.com",
  databaseURL: "https://tysfb-ac05c.firebaseio.com",
  projectId: "tysfb-ac05c",
  storageBucket: "tysfb-ac05c.appspot.com",
  messagingSenderId: "746165169108",
  appId: "1:746165169108:web:26381f1f5d41b674bb8441",
  measurementId: "G-G1YYLRWCGS"
}
firebase.initializeApp(firebaseConfig);
const firestore = firebase.firestore();

const app = express();
const config = app.get('env') === "development"
  ? require('./config/dev.env.js')
  : require('./config/prod.env.js');
const db = database(config, firestore);
const rend = render(db);
const pub = publish(db);

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  rend.renderPage("index", req, res);
});

app.get('/:pageId', (req, res) => {
  rend.renderPage(req.params.pageId, req, res);
});

app.get('/media/:fileName', (req, res) => {
  const url = `https://firebasestorage.googleapis.com/v0/b/${firebaseConfig.storageBucket}/o/${req.params.fileName}?alt=media`
  https.get(url, (httpRes) => {
    const data = [];
    httpRes.on('data', chunk => data.push(chunk));
    httpRes.on('error', error => res.send(error));
    httpRes.on('end', () => {
      const buf = (httpRes.statusCode === 200) ? Buffer.concat(data) : null;
      res.set('Content-Type', httpRes.headers["content-type"]);
      res.send(buf);
    });
  });
});

app.get('/css/:fileName', async (req, res) => {
  const data = await db.getStylesheet({ uid: "tysworks", obj: { fileName: req.params.fileName } });
  res.set('Content-Type', "text/css; charset=UTF-8");
  res.send(data.content);
});

app.post('/api/:command', async (req, res) => {
  if (db[req.params.command]) {
    const result = await db[req.params.command]({ uid: "tysworks", obj: req.body });
    res.json(result);
  }
  else res.json({ error: "No such db command" });
});

app.get('/publish/getUrls', async (req, res) => {
  const publishUrls = await pub.getPublishUrls();
  res.json(publishUrls);
});

app.get('/publish/complete', async (req, res) => {
  await pub.publishComplete();
  res.json({ message: "publish complete" });
});

app.use((req, res, next) => {
  rend.renderPage("404", req, res);
});

const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Node.js is running at http://localhost:${server.address().port}`);
});