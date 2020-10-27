module.exports = (db) => {
  return {
    async getPublishUrls() {
      const publishInfo = await db.getSetting({ uid: "tysworks", obj: { settingId: "publish" } });
      const lastPublishTimestamp = publishInfo ? publishInfo.lastPublishTimestamp : 0;

      const publishUrls = [];
      const stylesheets = await db.getStylesheets({ uid: "tysworks" });
      for (let stylesheet of stylesheets) {
        publishUrls.push({ url: `/css/${stylesheet.fileName}`, path: `/css/${stylesheet.fileName}` });
      }
      const pages = await db.getPages({ uid: "tysworks", obj: { status: "public" } });
      for (let page of pages) {
        if (page.pageId === "index") publishUrls.push({ url: `/?publish=true`, path: `/index.html` });
        else publishUrls.push({ url: `/${page.pageId}?publish=true`, path: `/${page.pageId}/index.html` });
      }
      const mediaFiles = await db.getFiles({ uid: "tysworks" });
      for (let mediaFile of mediaFiles) {
        if (lastPublishTimestamp < mediaFile.updatedTimestamp) {
          publishUrls.push({ url: mediaFile.url, path: mediaFile.url });
        }
      }
      publishUrls.push({ url: `/sitemap.xml`, path: `/sitemap.xml` });
      return publishUrls;
    },
    async publishComplete() {
      await db.addSetting({
        uid: "tysworks",
        obj: {
          settingId: "publish",
          lastPublishTimestamp: new Date().getTime()
        }
      });
    }
  }
}