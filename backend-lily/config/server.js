module.exports = ({ env }) => ({
  host: env("DEV_HOST"),
  port: env.int("DEV_PORT"),
  app: {
    keys: env.array("APP_KEYS"),
  },
});
