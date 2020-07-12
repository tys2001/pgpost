const express = require("express");
const firebase = require("firebase");
const marked = require('marked');
const fs = require('fs');
const https = require('https');

firebase.initializeApp({
  apiKey: "AIzaSyB_m5uvIdIKbvW1ZWEphFQ_M22ERLLtLG0",
  authDomain: "tysfb-ac05c.firebaseapp.com",
  databaseURL: "https://tysfb-ac05c.firebaseio.com",
  projectId: "tysfb-ac05c",
  storageBucket: "tysfb-ac05c.appspot.com",
  messagingSenderId: "746165169108",
  appId: "1:746165169108:web:26381f1f5d41b674bb8441",
  measurementId: "G-G1YYLRWCGS"
});
const firestore = firebase.firestore();
const app = express();
const timestamp = new Date().getTime();

app.use(express.static("public"));

app.get('/', (req, res) => {
  renderPage("index", res);
});

app.get('/:articleId', (req, res) => {
  renderPage(req.params.articleId, res);
});

app.get('/media/:fileName', (req, res) => {
  const url = `https://firebasestorage.googleapis.com/v0/b/tysfb-ac05c.appspot.com/o/${req.params.fileName}?alt=media`
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

app.use((req, res, next) => {
  renderPage("404", res);
});

renderPage = async (articleId, res) => {
  const data = {
    article: {},
    setting: {},
    timestamp: timestamp
  };
  const settingDoc = await firestore.collection("settings").doc("setting").get();
  data.setting = settingDoc.data();

  const articleDoc = await firestore.collection("articles").doc(articleId).get();
  if (!articleDoc.exists) res.redirect('/404');
  data.article = articleDoc.data();

  const articleContentDoc = await firestore.collection("article-content").doc(articleId).get();
  if (!articleContentDoc.exists) res.redirect('/404');
  const markdown = articleContentDoc.data().markdown;
  data.article.htmlContent = marked(markdown);

  for (let category of data.setting.categories) {
    if (category.categoryId === data.article.categoryId) {
      data.article.category = category;
    }
  }

  if (data.article.category.categoryId === "others") {
    for (let category of data.setting.categories) {
      const categoryArticlesDoc = await firestore.collection("articles")
        .where("categoryId", "==", category.categoryId)
        //.orderBy("articleId").limit(8)
        .get();
      category.articles = [];
      categoryArticlesDoc.forEach(doc => {
        category.articles.push(doc.data());
      });
    }
  } else {
    const relatedArticlesDoc = await firestore.collection("articles")
      .where("categoryId", "==", data.article.categoryId)
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


const server = app.listen(3000, () => {
  console.log("Node.js is listening to PORT:" + server.address().port);
});