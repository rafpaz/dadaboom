const passport = require('passport');
const _ = require('lodash');
const Post = require('../../models/Post');
const Validation = require('../../js/validate');
const winston = require('../../../config/winston');
require('../../../config/passport')(passport);
const isAuthorized = require('../../js/isAuthorized');
const Search = require('../../service/search');

module.exports = (app) => {
  app.get('/api/posts', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    if (!isAuthorized(req.headers)) return res.status(403).send({ success: false, msg: 'Unauthorized.' });

    return Post.find()
      .exec()
      .then(posts => res.json(posts))
      .catch(err => next(err));
  });

  app.post('/api/posts/updatePost', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (!isAuthorized(req.headers)) return res.status(403).send({ success: false, msg: 'Unauthorized.' });

    const id = Object.keys(req.body)[0];
    const props = req.body[id];
    Object.keys(props).forEach((propKey) => {
      const prop = props[propKey];
      const afterVal = Validation.validate(prop);
      if (prop !== afterVal) {
        props[prop] = afterVal;
        winston.warn('Before and after validation values are not the same!');
        winston.warn(`Before: ${prop.replace(/"/g, '\\"')}`);
        winston.warn(`After: ${afterVal.replace(/"/g, '\\"')}`);
      } else {
        winston.info('Validation did not change anything');
      }
    });

    try {
      const post = await Post.findOneAndUpdate({
        _id: id,
      }, props);
      if (!post) res.status(500).send(`Unknown server error when updating post id: ${id}`);
      return res
        .status(200)
        .json(post);
    } catch (err) {
      return res
        .status(500)
        .send(`Unknown server error when updating post id: ${id}`);
    }
  });

  app.post('/api/posts/newPost', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (!isAuthorized(req.headers)) return res.status(403).send({ success: false, msg: 'Unauthorized.' });

    const post = new Post();
    _.forOwn(req.body[0], (value, key) => {
      post[key] = Validation.validate(value);
    });

    try {
      const result = await post.save();
      return res
        .status(200)
        .json(result);
    } catch (err) {
      return res
        .status(500)
        .send('Unknown server error when creating new post ');
    }
  });

  app.delete('/api/posts/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    if (!isAuthorized(req.headers)) return res.status(403).send({ success: false, msg: 'Unauthorized.' });

    return Post.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then(post => res.json(post))
      .catch(err => next(err));
  });

  app.get('/api/posts/:id', async (req, res) => {
    const post = await Post.findById(req.params.id);
    res
      .status(200)
      .json(post);
  });

  app.get('/api/posts/byUrl/:url', async (req, res) => {
    const post = await Post.findOne({ url: req.params.url });
    res.status(200)
      .json(post);
  });

  app.get('/api/posts/genericData/categories', async (req, res) => {
    const categories = await Search.getAllFromSection('category');
    res.status(200)
      .json(categories);
  });

  app.get('/error', async (req, res, next) => next(
    new Error('This is an error and it should be logged to the console'),
  ));
};
