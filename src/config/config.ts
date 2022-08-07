export default {
  db: {
    user: null,
    pass: null,
    host: "127.0.0.1",
    port: "27017",
    database: "email-auth",
    authSource: null,
  },
  host: {
    url: "http://localhost",
    port: "3000",
  },
  jwt: {
    secretOrKey: "secret",
    expiresIn: 36000000,
  },
  mail: {
    host: "localhost",
    port: "1025",
    secure: false,
    user: "project.1",
    pass: "secret.1",
    email: "test@example.com",
  },
};
