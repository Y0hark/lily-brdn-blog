module.exports = ({ env }) => ({
  host: env('HOST', 'O.O.O.O'),
  port: env.int('PORT', 1337),
  admin: {
    auth: {
      secret: env('ADMIN_JWT_SECRET', '48b2763a39c64a709aad16df76604956'),
    },
  },
});
