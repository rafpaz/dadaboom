const passport = require('passport');
const _ = require('lodash');
const Comment = require('../../models/Comment');
const Validation = require('../../js/validate');
const CommentsBuilder = require('../../service/comments-builder');
require('../../../config/passport')(passport);
const isAuthorized = require('../../js/isAuthorized');


module.exports = (app) => {
  app.get('/api/comments', async (req, res, next) => Comment.find()
    .exec()
    .then(posts => res.json(posts))
    .catch(err => next(err)));

  app.get('/api/comments/:postId', async (req, res) => {
    const builder = new CommentsBuilder(req.params.postId);
    if (req.query['clear-cache']) CommentsBuilder.clearCacheForPost(req.params.postId);
    const comments = await builder.buildComments();
    res
      .status(200)
      .json(comments);
  });

  app.post('/api/comments/addComment', async (req, res) => {
    const comment = new Comment();
    _.forOwn(req.body, (value, key) => {
      comment[key] = Validation.validate(value);
    });

    try {
      const result = await comment.save();
      CommentsBuilder.clearCacheForPost(comment.post);
      return res
        .status(200)
        .json(result);
    } catch (err) {
      return res
        .status(500)
        .send('Unknown server error when creating new comment ');
    }
  });

  app.put('/api/comments/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    if (!isAuthorized(req.headers)) return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    const updateObj = {};
    _.forOwn(req.body, (value, key) => { updateObj[key] = Validation.validate(value); });
    return Comment.findOneAndUpdate({ _id: req.params.id }, updateObj)
      .exec()
      .then((comment) => {
        CommentsBuilder.clearCacheForPost(comment.post);
        return res.json(comment);
      })
      .catch(err => next(err));
  });

  app.delete('/api/comments/:id', passport.authenticate('jwt', { session: false }), (req, res, next) => {
    if (!isAuthorized(req.headers)) return res.status(403).send({ success: false, msg: 'Unauthorized.' });
    CommentsBuilder.clearAllCommentsCache();
    return Comment.findOneAndRemove({ _id: req.params.id })
      .exec()
      .then((comment) => {
        CommentsBuilder.clearCacheForPost(comment.post);
        return res.json(comment);
      })
      .catch(err => next(err));
  });

  app.delete('/api/commentsCache/:postId', passport.authenticate('jwt', { session: false }), async (req, res) => {
    if (!req.params.postId) {
      return res.status(500)
        .send('Incorrect post id value');
    }
    try {
      CommentsBuilder.clearCacheForPost(req.params.postId);
      return res
        .status(200)
        .send(`Comments cache for post ${req.params.postId} was delete succefuly`);
    } catch (e) {
      return res
        .status(500)
        .send(`Error on deleting cache for post ${req.params.postId}: ${e}`);
    }
  });
};
