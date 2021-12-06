module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '745cebd6a09a9ad0e2a1636bd54b6529'),
  },
});
