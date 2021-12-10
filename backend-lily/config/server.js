module.exports = ({ env }) => ({
  host: env('HOST', '172.17.0.4'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '48b2763a39c64a709aad16df76604956'),
    },
  },
});
