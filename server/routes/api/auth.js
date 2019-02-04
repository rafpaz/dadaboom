const passport = require('passport');
const jwt = require('jsonwebtoken');
const settings = require('../../../config/passportSettings');
require('../../../config/passport')(passport);
const User = require('../../models/User');
const isAuthorized = require('../../js/isAuthorized');

module.exports = (app) => {
  // app.post('/api/auth/register', (req, res) => {
  //   if (!req.body.username || !req.body.password) {
  //     res.json({success: false, msg: 'Please pass username and password.'});
  //   } else {
  //     var newUser = new User({
  //       username: req.body.username,
  //       password: req.body.password
  //     });
  //     // save the user
  //     newUser.save((err) => {
  //       if (err) {
  //         return res.json({success: false, msg: 'Username already exists.'});
  //       }
  //       res.json({success: true, msg: 'Successful created new user.'});
  //     });
  //   }
  // });

  app.post('/api/auth/login', (req, res) => {
    User.findOne({
      username: req.body.username,
    }, (err, user) => {
      if (err) throw err;

      if (!user) {
        res.status(401).send({ success: false, msg: 'Authentication failed. User not found.' });
      } else {
        // check if password matches
        user.comparePassword(req.body.password, (compareError, isMatch) => {
          if (isMatch && !compareError) {
            // if user is found and password is right create a token
            const token = jwt.sign(user.toJSON(), settings.secret);
            // return the information including token as JSON
            res.json({ success: true, token: `JWT ${token}` });
          } else {
            res.status(401).send({ success: false, msg: 'Authentication failed. Wrong password.' });
          }
        });
      }
    });
  });

  app.get('/api/auth/isAuthorized', passport.authenticate('jwt', { session: false }),
    async (req, res) => (isAuthorized(req.headers)
      ? res.status(200).send({ success: true, msg: 'ok' })
      : res.status(403).send({ success: false, msg: 'Unauthorized.' })));
};
