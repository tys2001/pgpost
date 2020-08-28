const pg = require('pg');
module.exports = (config) => {
  const pool = new pg.Pool(config.pgconf);
  return {
    async test(param) {
      const { rows } = await pool.query('SELECT NOW()', [param]);
      return rows;
    },
    async addPage(param) {
      const { rows } = await pool.query('insert into "pages" ("value") values ($1)', [param.data]);
      return rows;
    },
    async updatePage(param) {
      const { rows } = await pool.query('update "pages" set "value"=$1', [param.data]);
      return rows;
    },
    async deletePage(param) {
      const { rows } = await pool.query('delete from "pages" where "id"=$1', [param.id]);
      return rows;
    },
    async getPage(param) {
      const { rows } = await pool.query('select * from "pages" where "id"=$1', [param.id]);
      return rows;
    },
    async getPages(param) {
      const { rows } = await pool.query('select * from "pages" where 1=1', []);
      return rows;
    }
  }
}