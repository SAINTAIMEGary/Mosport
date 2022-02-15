module.exports = ({ env }) => ({
  auth: {
    secret: env('ADMIN_JWT_SECRET', '59cd61709db3c18605bd692808f204cc'),
  },
});
