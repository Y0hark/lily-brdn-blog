module.exports = ({ env }) => ({
  connection: {
    client: "postgres",
    connection: {
      host: env("DATABASE_HOST", "host.docker.internal"),
      port: env.int("DATABASE_PORT", 49153),
      database: env("DATABASE_NAME", "lily-brdn-db"),
      user: env("DATABASE_USERNAME", "postgres"),
      password: env("DATABASE_PASSWORD", "postgrespw"),
      ssl: env.bool("DATABASE_SSL", false),
    },
  },
});
