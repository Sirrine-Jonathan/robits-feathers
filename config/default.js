require('dotenv').config();

module.exports = {
  host: 'localhost',
  port: 5050,
  public: '../public/',
  paginate: {
    default: 10,
    max: 50
  },
  authentication: {
    oauth: {
      redirect: process.env.NODE_ENV === 'production' ? 'EXTERNAL_URL' : 'http://localhost:5050/',
      github: {
        key: process.env.NODE_ENV === 'production' ? process.env.GITHUB_CLIENT_ID : process.env.LOCAL_GITHUB_CLIENT_ID,
        secret: process.env.NODE_ENV === 'production' ? process.env.GITHUB_CLIENT_SECRET : process.env.LOCAL_GITHUB_CLIENT_SECRET,
        scope: [
          'user:email'
        ],
      },
      google: {
        key: process.env.NODE_ENV === 'production' ? process.env.GOOGLE_CLIENT_ID : process.env.LOCAL_GOOGLE_CLIENT_ID,
        secret: process.env.NODE_ENV === 'production' ? process.env.GOOGLE_CLIENT_SECRET : process.env.LOCAL_GOOGLE_CLIENT_SECRET,
        scope: [
          'profile',
          'email'
        ],
      }
    },
    entity: 'user',
    service: 'users',
    secret: 'Ej0XhakSOO92QbeyLKDUqsZPQks=',
    authStrategies: [
      'jwt',
      'local'
    ],
    jwtOptions: {
      header: {
        typ: 'access'
      },
      audience: 'https://robits-feathers.adaptable.app/',
      issuer: 'feathers',
      algorithm: 'HS256',
      expiresIn: '1d'
    },
    local: {
      usernameField: 'email',
      passwordField: 'password'
    }
  },
  databaseUrl: process.env.DATABASE_URL,
  sessionSecret: 'replace with unique session secret',
  tlsEnabled: false,
};
