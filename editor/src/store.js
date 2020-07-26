import firebase from "firebase";

export default {
  create() {
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
    const storageRef = firebase.storage().ref();
    return {
      articles: [],
      media: [],
      setting: {},
      async loadAll() {
        await Promise.all([
          this.loadArticles(),
          this.loadSetting(),
          this.loadMedia()
        ]);
      },
      async loadArticles() {
        const docs = await firestore.collection("articles").get();
        this.articles = [];
        docs.forEach(doc => {
          const data = doc.data();
          this.articles.push(data);
        });
      },
      async addArticle(data) {
        data.updatedAt = firebase.firestore.Timestamp.now();
        await firestore.collection("articles").doc(data.articleId).set(data);
        this.loadArticles();
      },
      async deleteArticle(data) {
        await firestore.collection("articles").doc(data.articleId).delete();
        this.loadArticles();
      },
      async loadSetting() {
        const doc = await firestore.collection("settings").doc("setting").get();
        this.setting = doc.data();
      },
      async saveSetting(data) {
        await firestore.collection("settings").doc("setting").set(data);
        this.loadSetting();
      },
      async loadMedia() {
        const docs = await firestore.collection("media").get();
        this.media = [];
        docs.forEach(doc => {
          const data = doc.data();
          this.media.push(data);
        });
      },
      async addMedia(file) {
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        const storageUrl = await fileRef.getDownloadURL();
        await firestore.collection("media").doc(file.name)
          .set({
            fileName: file.name,
            mediaUrl: `/media/${file.name}`,
            storageUrl: storageUrl,
            updatedAt: firebase.firestore.Timestamp.now()
          });
        this.loadMedia();
      },
      async deleteMedia(fileName) {
        const fileRef = storageRef.child(fileName);
        await fileRef.delete();
        await firestore.collection("media").doc(fileName).delete();
        this.loadMedia();
      },
      async getContent(articleId) {
        const doc = await firestore.collection("article-content").doc(articleId).get();
        if (doc.exists) return doc.data();
        else return { markdown: "" };
      },
      async saveContent(articleId, data) {
        await firestore.collection("article-content").doc(articleId).set(data);
      },
    };
  }
}