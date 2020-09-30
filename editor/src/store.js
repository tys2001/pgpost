export default {
  create() {
    const basePath = location.origin === "http://localhost:8080" ? "http://localhost:3000" : "";
    const fetchJson = async (command, param = {}) => {
      const response = await fetch(`${basePath}/api/${command}`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(param)
      })
      return response.json();
    };
    const fetchFile = async (command, file) => {
      const formData = new FormData();
      formData.append("file", file);
      const response = await fetch(`${basePath}/api/${command}`, {
        method: "POST",
        body: formData
      })
      return response.json();
    };
    return {
      basePath: basePath,
      pages: [],
      categories: [],
      stylesheets: [],
      mediaFiles: [],
      setting: {},
      async loadAll() {
        await Promise.all([
          this.loadPages(),
          this.loadCategories(),
          this.loadStylesheets(),
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
        await fetchFile("addFile", file);
        this.loadMediaFiles();
      },
      async deleteMediaFile(data) {
        await fetchJson("deleteFile", data);
        this.loadMediaFiles();
      },
      async getContent(pageId) {
        return await fetchJson("getPageContent", { pageId: pageId });
      },
      async saveContent(data) {
        await fetchJson("addPageContent", data);
      },
      async addStylesheet(data) {
        await fetchJson("addStylesheet", data);
        this.loadStylesheets();
      },
      async deleteStylesheet(data) {
        await fetchJson("deleteStylesheet", data);
        this.loadStylesheets();
      },
      async loadStylesheets() {
        this.stylesheets = await fetchJson("getStylesheets");
      },
    };
  }
}