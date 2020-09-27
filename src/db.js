const pg = require('pg');

module.exports = (config, firestore) => {
  const pool = new pg.Pool(config.pgconf);
  return {
    async test() {
      const { rows } = await pool.query('SELECT NOW()');
      return rows;
    },
    async init() {
      const { rows } = await pool.query("\
        DROP TABLE IF EXISTS pages; \
        DROP TABLE IF EXISTS page_contents; \
        DROP TABLE IF EXISTS categories;\
        DROP TABLE IF EXISTS stylesheets;\
        DROP TABLE IF EXISTS settings;\
        DROP TABLE IF EXISTS files;\
        CREATE TABLE pages(uid varchar(100) NOT NULL, cid varchar(100) NOT NULL, obj jsonb, PRIMARY KEY(uid, cid));\
        CREATE TABLE page_contents(uid varchar(100) NOT NULL, cid varchar(100) NOT NULL, obj jsonb, PRIMARY KEY(uid, cid));\
        CREATE TABLE categories(uid varchar(100) NOT NULL, cid varchar(100) NOT NULL, obj jsonb, PRIMARY KEY(uid, cid));\
        CREATE TABLE stylesheets(uid varchar(100) NOT NULL, cid varchar(100) NOT NULL, obj jsonb, PRIMARY KEY(uid, cid)); \
        CREATE TABLE settings(uid varchar(100) NOT NULL, cid varchar(100) NOT NULL, obj jsonb, PRIMARY KEY(uid, cid)); \
        CREATE TABLE files(uid varchar(100) NOT NULL, cid varchar(100) NOT NULL, obj jsonb, file bytea, PRIMARY KEY(uid, cid)); \
      ");
      return rows;
    },
    async addPage(param) {
      const { rows } = await pool.query(
        "insert into pages (uid, cid, obj) values ($1, $2, $3)\
        on conflict(uid, cid) do update set obj = $3",
        [param.uid, param.obj.pageId, param.obj]
      );
      return rows;
    },
    async deletePage(param) {
      const { rows } = await pool.query(
        "delete from pages where uid=$1 and cid=$2",
        [param.uid, param.obj.pageId]
      );
      return rows;
    },
    async getPage(param) {
      const { rows } = await pool.query(
        "select obj from pages where uid=$1 and cid=$2",
        [param.uid, param.obj.pageId]
      );
      return rows[0] ? rows[0].obj : null;
    },
    async getPages(param) {
      const { rows } = await pool.query("\
        select obj\
        from pages\
        where uid=$1\
        and ($2='' or obj->>'categoryId'=$2)\
        and ($3='' or obj->>'status'=$3)\
      ", [
        param.uid,
        param.obj.categoryId || "",
        param.obj.status || ""
      ]);
      return rows.map(r => r.obj);
    },
    async addPageContent(param) {
      const { rows } = await pool.query(
        "insert into page_contents (uid, cid, obj) values ($1, $2, $3)\
        on conflict (uid, cid) do update set obj = $3",
        [param.uid, param.obj.pageId, param.obj]
      );
      return rows;
    },
    async getPageContent(param) {
      const { rows } = await pool.query(
        "select obj from page_contents where uid=$1 and cid=$2",
        [param.uid, param.obj.pageId]
      );
      return rows[0] ? rows[0].obj : null;
    },
    async addCategory(param) {
      const { rows } = await pool.query(
        "insert into categories (uid, cid, obj) values ($1, $2, $3)\
        on conflict (uid, cid) do update set obj = $3",
        [param.uid, param.obj.categoryId, param.obj]
      );
      return rows;
    },
    async deleteCategory(param) {
      const { rows } = await pool.query(
        "delete from categories where uid=$1 and cid=$2",
        [param.uid, param.obj.categoryId]
      );
      return rows;
    },
    async getCategories(param) {
      const { rows } = await pool.query("\
        select obj\
        from categories\
        where uid=$1\
      ", [param.uid]);
      return rows.map(r => r.obj);
    },
    async addStylesheet(param) {
      const { rows } = await pool.query(
        "insert into stylesheets (uid, cid, obj) values ($1, $2, $3)\
        on conflict (uid, cid) do update set obj = $3",
        [param.uid, param.obj.fileName, param.obj]
      );
      return rows;
    },
    async deleteStylesheet(param) {
      const { rows } = await pool.query(
        "delete from stylesheets where uid=$1 and cid=$2",
        [param.uid, param.obj.fileName]
      );
      return rows;
    },
    async getStylesheet(param) {
      const { rows } = await pool.query(
        "select obj from stylesheets where uid=$1 and cid=$2",
        [param.uid, param.obj.fileName]
      );
      return rows[0] ? rows[0].obj : null;
    },
    async getStylesheets(param) {
      const { rows } = await pool.query("\
        select obj\
        from stylesheets\
        where uid=$1\
      ", [param.uid]);
      return rows.map(r => r.obj);
    },
    async addSetting(param) {
      const { rows } = await pool.query(
        "insert into settings (uid, cid, obj) values ($1, $2, $3)\
        on conflict (uid, cid) do update set obj = $3",
        [param.uid, param.obj.settingId, param.obj]
      );
      return rows;
    },
    async getSetting(param) {
      const { rows } = await pool.query(
        "select obj from settings where uid=$1 and cid=$2",
        [param.uid, param.obj.settingId]
      );
      return rows[0] ? rows[0].obj : null;
    },
    async addFile(param) {
      param.obj.updatedTimestamp = new Date().getTime();
      const { rows } = await pool.query(
        "insert into files (uid, cid, obj) values ($1, $2, $3)\
        on conflict (uid, cid) do update set obj = $3",
        [param.uid, param.obj.fileName, param.obj]
      );
      return rows;
    },
    async deleteFile(param) {
      const { rows } = await pool.query(
        "delete from files where uid=$1 and cid=$2",
        [param.uid, param.obj.fileName]
      );
      return rows;
    },
    async getFiles(param) {
      const { rows } = await pool.query("\
        select obj\
        from files\
        where uid=$1\
      ", [param.uid]);
      return rows.map(r => r.obj);
    },
    async trans(req, res) {
      await this.init();
      const doc1 = await firestore.collection("articles").get();
      doc1.forEach(doc => {
        const data = doc.data()
        this.addPage({
          uid: "tysworks", obj: {
            pageId: data.articleId,
            title: data.title,
            description: data.description,
            captionImage: data.captionImage,
            categoryId: data.categoryId,
            publishedDate: data.publishedDate,
            modifiedDate: data.modifiedDate,
            status: data.status
          }
        });
      });
      const doc2 = await firestore.collection("article-content").get();
      doc2.forEach(doc => {
        const data = doc.data()
        this.addPageContent({
          uid: "tysworks", obj: {
            pageId: doc.id,
            sections: data.sections
          }
        });
      });
      const doc3 = await firestore.collection("settings").doc("setting").get();
      const setting = doc3.data();
      this.addSetting({
        uid: "tysworks", obj: {
          settingId: "base",
          siteName: setting.siteName,
          publishUrl: setting.publishUrl
        }
      });
      for (let category of setting.categories) {
        this.addCategory({
          uid: "tysworks", obj: {
            categoryId: category.categoryId,
            categoryName: category.categoryName,
            relation: category.relation
          }
        });
      }
      const doc4 = await firestore.collection("css").get();
      doc4.forEach(doc => {
        const data = doc.data()
        this.addStylesheet({
          uid: "tysworks", obj: {
            fileName: doc.id,
            content: data.content
          }
        });
      });
      const doc5 = await firestore.collection("media").get();
      doc5.forEach(doc => {
        const data = doc.data()
        this.addFile({
          uid: "tysworks", obj: {
            fileName: doc.id,
            url: data.mediaUrl,
            updatedTimestamp: new Date().getTime()
          }
        });
      });
      return { message: "db trans completed." }
    }
  }
}