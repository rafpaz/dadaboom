const JwtStrategy = require('passport-jwt').Strategy;

const { ExtractJwt } = require('passport-jwt');

// load up the user model
const User = require('../server/models/User');
const settings = require('./passportSettings'); // get settings file

module.exports = function handlePassport(passport) {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromAuthHeaderWithScheme('jwt');
  opts.secretOrKey = settings.secret;
  passport.use(new JwtStrategy(opts, ((jwtPayload, done) => {
    User.findOne({ id: jwtPayload.id }, (err, user) => {
      if (err) {
        return done(err, false);
      }
      if (user) {
        return done(null, user);
      }
      return done(null, false);
    });
  })));
};
