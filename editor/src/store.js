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
    const storageRef = firebase.storage().ref();

    const basePath = location.origin === "http://localhost:8080" ? "http://localhost:3000" : "";
    const fetchJson = async (command, param = {}) => {
      const response = await fetch(`${basePath}/api/${command}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(param)
      })
      return response.json();
    };
    return {
      basePath: basePath,
      pages: [],
      categories: [],
      css: [],
      mediaFiles: [],
      setting: {},
      async loadAll() {
        await Promise.all([
          this.loadPages(),
          this.loadCategories(),
          this.loadCss(),
          this.loadSetting(),
          this.loadMediaFiles()
        ]);
      },
      async loadPages() {
        this.pages = await fetchJson("getPages");
      },
      async addPage(data) {
        await fetchJson("addPage", data);
        this.loadPages();
      },
      async deletePage(data) {
        await fetchJson("deletePage", data);
        this.loadPages();
      },
      async loadCategories() {
        this.categories = await fetchJson("getCategories");
      },
      async addCategory(data) {
        await fetchJson("addCategory", data);
        this.loadCategories();
      },
      async deleteCategory(data) {
        await fetchJson("deleteCategory", data);
        this.loadCategories();
      },
      async loadSetting() {
        this.setting = await fetchJson("getSetting", { settingId: "base" });
      },
      async saveSetting(data) {
        await fetchJson("addSetting", data);
        this.loadSetting();
      },
      async loadMediaFiles() {
        this.mediaFiles = await fetchJson("getFiles");
      },
      async addMediaFile(file) {
        const fileRef = storageRef.child(file.name);
        await fileRef.put(file);
        await fetchJson("addFile", {
          fileName: file.name,
          url: `/media/${file.name}`
        });
        this.loadMediaFiles();
      },
      async deleteMediaFile(data) {
        const fileRef = storageRef.child(data.fileName);
        await fileRef.delete();
        await fetchJson("deleteFile", data);
        this.loadMediaFiles();
      },
      async getContent(pageId) {
        return await fetchJson("getPageContent", { pageId: pageId });
      },
      async saveContent(data) {
        await fetchJson("addPageContent", data);
      },
      async addCss(data) {
        await fetchJson("addStylesheet", data);
        this.loadCss();
      },
      async deleteCss(data) {
        await fetchJson("deleteStylesheet", data);
        this.loadCss();
      },
      async loadCss() {
        this.css = await fetchJson("getStylesheets");
      },
    };
  }
}