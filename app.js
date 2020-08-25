const express = require("express");
const firebase = require("firebase");
const https = require('https');
const database = require('./src/db.js');
const firebaseConfig = {
  apiKey: "AIzaSyBxzmoDNJtculoSL4tEtTqoib_B-jmm74Q",
  authDomain: "kkrdemo-17842.firebaseapp.com",
  databaseURL: "https://kkrdemo-17842.firebaseio.com",
  projectId: "kkrdemo-17842",
  storageBucket: "kkrdemo-17842.appspot.com",
  messagingSenderId: "919163321944",
  appId: "1:919163321944:web:8001d8db7292c388d2542d"
}


firebase.initializeApp(firebaseConfig);

const firestore = firebase.firestore();
const app = express();
const timestamp = new Date().getTime();

const config = app.get('env') === "development"
  ? require('./config/dev.env.js')
  : require('./config/prod.env.js');

app.use(express.static("public"));

app.get('/', (req, res) => {
  renderPage("index", req, res);
});

app.get('/publish', async (req, res) => {
  const publishDoc = await firestore.collection("publish").doc("publish").get();
  const lastPublish = publishDoc.exists ? publishDoc.data().lastPublish : null;

  const publishUrls = [
    { url: "/style.css", path: "/style.css" },
    { url: "/edit/content.css", path: "/edit/content.css" },
    { url: "/edit/code-highlight.css", path: "/edit/code-highlight.css" }
  ];
  const pageDocs = await firestore.collection("articles").where("status", "==", "public").get();
  pageDocs.forEach(doc => {
    if (doc.id === "index") publishUrls.push({ url: `/?publish=true`, path: `/index.html` });
    else publishUrls.push({ url: `/${doc.id}?publish=true`, path: `/${doc.id}/index.html` });
  });
  const mediaDocs = lastPublish ?
    await firestore.collection("media").where("updatedAt", ">", lastPublish).get()
    : await firestore.collection("media").get();
  mediaDocs.forEach(doc => {
    publishUrls.push({ url: `/media/${doc.id}`, path: `/media/${doc.id}` });
  });
  res.json(publishUrls);
});

app.get('/publish-complete', async (req, res) => {
  await firestore.collection("publish").doc("publish").set({
    lastPublish: firebase.firestore.Timestamp.now()
  });
  res.end();
});

app.get('/:articleId', (req, res) => {
  renderPage(req.params.articleId, req, res);
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

const db = database(config);
app.get('/db/:command', async (req, res) => {
  if (db[req.params.command]) {
    const result = await db[req.params.command]();
    res.json(result);
  }
  renderPage("404", req, res);
});

app.use((req, res, next) => {
  renderPage("404", req, res);
});

renderPage = async (articleId, req, res) => {
  const data = {
    article: {},
    setting: {},
    common: {},
    timestamp: timestamp,
    isPublish: (req.query.publish === "true") ? true : false
  };
  const settingDoc = await firestore.collection("settings").doc("setting").get();
  data.setting = settingDoc.data();

  const articleDoc = await firestore.collection("articles").doc(articleId).get();
  if (!articleDoc.exists) res.redirect('/404');
  data.article = articleDoc.data();

  const articleContentDoc = await firestore.collection("article-content").doc(articleId).get();
  if (!articleContentDoc.exists) res.redirect('/404');
  data.article.sections = articleContentDoc.data().sections;

  const commonTopDoc = await firestore.collection("article-content").doc("common-top").get();
  data.common.top = commonTopDoc.data().sections;
  const commonBottomDoc = await firestore.collection("article-content").doc("common-bottom").get();
  data.common.bottom = commonBottomDoc.data().sections;
  const commonFooterDoc = await firestore.collection("article-content").doc("common-footer").get();
  data.common.footer = commonFooterDoc.data().sections;

  for (let category of data.setting.categories) {
    if (category.categoryId === data.article.categoryId) {
      data.article.category = category;
    }
  }

  if (data.article.category.relation === "all_categories") {
    for (let category of data.setting.categories) {
      if (category.relation === "same_categories") {
        const categoryArticlesDoc = await firestore.collection("articles")
          .where("categoryId", "==", category.categoryId)
          .where("status", "==", "public")
          //.orderBy("articleId").limit(8)
          .get();
        category.articles = [];
        categoryArticlesDoc.forEach(doc => {
          category.articles.push(doc.data());
        });
      }
    }
  } else if (data.article.category.relation === "same_categories") {
    const relatedArticlesDoc = await firestore.collection("articles")
      .where("categoryId", "==", data.article.categoryId)
      .where("status", "==", "public")
      //.orderBy("articleId").limit(8)
      .get();
    data.article.relatedArticles = [];
    relatedArticlesDoc.forEach(doc => {
      if (doc.id !== data.article.articleId) data.article.relatedArticles.push(doc.data());
    });
  }

  if (articleId === "404") res.status(404);
  res.render("./page-root.ejs", { data });
};


const server = app.listen(process.env.PORT || 3000, () => {
  console.log(`Node.js is running at http://localhost:${server.address().port}`);
});