module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '8dd10ac96d3e2f918d30392262b802f9'),
  },
});
