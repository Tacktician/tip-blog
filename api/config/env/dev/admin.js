module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '<encoded-string>'),
  },
  url: '/dashboard',
});
