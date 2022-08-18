module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DB_HOST_DEV"),
      port: env("DB_PORT_DEV"),
      database: env("DB_NAME_DEV"),
      user: env("DB_USER_DEV"),
      password: env("DB_PASSWORD_DEV"),
      ssl: false,
    },
  },
});
