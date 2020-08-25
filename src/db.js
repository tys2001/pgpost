const pg = require('pg');
module.exports = (config) => {
  const pool = new pg.Pool(config.pgconf);
  return {
    async init() {
      const { rows } = await pool.query('select * from test');
      return rows;
    },
    async test() {
      const { rows } = await pool.query('SELECT NOW()');
      return rows;
    }
  }
}