module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', 'fJqWkrBiyuK7IW8HGgWr2A=='),
  },
  url: '/dashboard',
});
