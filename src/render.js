module.exports = (db) => {
  const timestamp = new Date().getTime();
  return {
    async renderPage(pageId, req, res) {
      const data = {
        pageId: pageId,
        page: {},
        pageContent: {},
        headerContent: {},
        bottomContent: {},
        footerContent: {},
        relatedPages: [],
        setting: {},
        stylesheets: [],
        timestamp: timestamp,
        isPublish: (req.query.publish === "true") ? true : false
      };
      data.setting = await db.getSetting({ uid: "tysworks", obj: { settingId: "base" } });
      data.stylesheets = await db.getStylesheets({ uid: "tysworks" });
      data.page = await db.getPage({ uid: "tysworks", obj: { pageId: pageId } });
      if (!data.page) res.redirect('/404');
      data.pageContent = await db.getPageContent({ uid: "tysworks", obj: { pageId: pageId } });
      if (!data.pageContent) res.redirect('/404');
      data.headerContent = await db.getPageContent({ uid: "tysworks", obj: { pageId: pageId === "index" ? "index-header" : "common-header" } });
      data.bottomContent = await db.getPageContent({ uid: "tysworks", obj: { pageId: "common-bottom" } });
      data.footerContent = await db.getPageContent({ uid: "tysworks", obj: { pageId: "common-footer" } });

      const allCategories = await db.getCategories({ uid: "tysworks" });
      const categoryDict = {};
      for (let category of allCategories) {
        categoryDict[category.categoryId] = category.categoryName;
      }
      data.page.categoryName = categoryDict[data.page.categoryId];

      if (data.page.link === "all_categories") {
        const pages = await db.getPages({
          uid: "tysworks",
          obj: {
            type: "post",
            status: "published"
          }
        });
        categorizedPages = {};
        for (let page of pages) {
          if (!categorizedPages[page.categoryId]) categorizedPages[page.categoryId] = [];
          categorizedPages[page.categoryId].push(page);
        }
        for (let categoryId in categorizedPages) {
          data.relatedPages.push({
            categoryName: categoryDict[categoryId],
            pages: categorizedPages[categoryId]
          });
        }
        data.relatedPages = data.relatedPages.sort((a, b) => b.pages.length - a.pages.length);
      } else if (data.page.link === "same_categories") {
        data.relatedPages = await db.getPages({
          uid: "tysworks",
          obj: {
            categoryId: data.page.categoryId,
            type: "post",
            status: "published"
          }
        });
        data.relatedPages = data.relatedPages.filter(page => page.pageId !== data.pageId);
      }

      if (pageId === "404") res.status(404);
      res.render("./page-root.ejs", { data });
    },
    async renderSitemap(req, res) {
      const data = {
        urls: [],
      };
      const setting = await db.getSetting({ uid: "tysworks", obj: { settingId: "base" } });
      const pages = await db.getPages({ uid: "tysworks", obj: { status: "published" } });
      for (let page of pages) {
        if (page.pageId === "index") data.urls.push({ loc: `${setting.publishUrl}/` });
        else if (page.pageId === "404") continue;
        else data.urls.push({ loc: `${setting.publishUrl}/${page.pageId}/` });
      }
      res.render("./sitemap.ejs", { data });
    }
  }
}