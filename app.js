const express = require("express");
const bodyParser = require('body-parser');
const multer = require('multer');
const upload = multer({ dest: './uploads/' });
const cors = require('cors');
const database = require('./src/db.js');
const render = require('./src/render.js');
const publish = require('./src/publish.js');

const app = express();
const config = app.get('env') === "development"
  ? require('./config/dev.env.js')
  : require('./config/prod.env.js');
const db = database(config);
const rend = render(db);
const pub = publish(db);

app.use(cors());
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.get('/', (req, res) => {
  rend.renderPage("index", req, res);
});

app.get('/test1', async (req, res) => {
  res.send("aa");
});

app.get('/test2', async (req, res) => {
  res.send(config);
});

app.get('/sitemap.xml', async (req, res) => {
  rend.renderSitemap(req, res);
});

app.get('/:pageId', (req, res) => {
  rend.renderPage(req.params.pageId, req, res);
});

app.get('/media/:fileName', async (req, res) => {
  const file = await db.getFile({ uid: "tysworks", obj: { fileName: req.params.fileName } });
  if (file) {
    res.set('Content-Type', file.contentType);
    res.send(file.data);
  } else {
    res.end();
  }
});

app.get('/css/:fileName', async (req, res) => {
  const data = await db.getStylesheet({ uid: "tysworks", obj: { fileName: req.params.fileName } });
  res.set('Content-Type', "text/css; charset=UTF-8");
  res.send(data.content);
});

app.post('/api/:command', upload.single("file"), async (req, res) => {
  if (db[req.params.command]) {
    const result = await db[req.params.command]({ uid: "tysworks", obj: req.body, file: req.file });
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