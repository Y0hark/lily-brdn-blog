module.exports = ({ env }) => ({
  host: env("SERVER_HOST_DEV"),
  port: env("SERVER_PORT_DEV"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
