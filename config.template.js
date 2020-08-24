module.exports = {
  development: {
    pgconf: {
      connectionString: "enter your connection string to psql",
      ssl: {
        rejectUnauthorized: false,
      },
    }
  },
  production: {
    pgconf: {
      connectionString: process.env.DATABASE_URL
    }
  }
}