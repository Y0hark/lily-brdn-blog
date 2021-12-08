module.exports = ({ env }) => ({
  defaultConnection: 'default',
  connections: {
    default: {
      connector: 'bookshelf',
      settings: {
        client: "postgres",
        host: env("DATABASE_HOST", "172.17.0.2"),
        port: env.int("DATABASE_PORT", 5432),
        database: env("DATABASE_NAME", "lily-brdn-db"),
        username: env("DATABASE_USERNAME", "postgres"),
        password: env("DATABASE_PASSWORD", "Actimel164."),
        schema: env("DATABASE_SCHEMA", "public"),
      },
      options: {
        useNullAsDefault: true,
      },
    },
  },
});
