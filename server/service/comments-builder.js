const flatCache = require('flat-cache');
const Comment = require('../models/Comment');
const logger = require('../../config/winston');

const COMMENTS_CACHE_ID = 'comments-cache';

class CommentsBuilder {
  constructor(postId) {
    this.postId = postId;
    this.commentsResult = [];
    this.commentsMap = {};
  }

  async getCommentsForPost() {
    try {
      const comments = await Comment.find({
        post: this.postId,
      }).sort('date');
      return comments;
    } catch (e) {
      logger.error('Error reading comments from DB');
      return null;
    }
  }

  static commentsToMap(comments) {
    return comments.reduce((commentsMap, commentDoc) => {
      const { _doc: comment } = commentDoc;
      const { parent = 'top' } = comment;
      if (!commentsMap.has(parent)) commentsMap.set(parent, []);
      commentsMap.get(parent).push(comment);
      return commentsMap;
    }, new Map());
  }

  buildCommentsWithDepth(comments, depth) {
    comments.forEach((comment) => {
      this.commentsResult.push({ comment, depth });
      const replies = this.commentsMap.get(comment._id.toString());
      if (replies) this.buildCommentsWithDepth(replies, depth + 1);
    });
  }

  static clearCacheForPost(postId) {
    const cache = flatCache.load(COMMENTS_CACHE_ID);
    cache.removeKey(postId);
    cache.save();
    logger.info(`Delete comments cache for post ${postId}`);
  }

  static clearAllCommentsCache() {
    flatCache.clearCacheById(COMMENTS_CACHE_ID, null);
    logger.info('Clear all comments cache');
  }

  async buildComments() {
    const cache = flatCache.load(COMMENTS_CACHE_ID);
    const cacheVal = cache.getKey(this.postId);
    if (cacheVal) {
      logger.info(`Comments for post ${this.postId} returned from cache`);
      return cacheVal;
    }
    logger.info(`No cache of comments for post ${this.postId}`);

    this.comments = await this.getCommentsForPost();
    if (!this.comments || this.comments.length === 0) return {};

    this.commentsMap = CommentsBuilder.commentsToMap(this.comments);
    this.buildCommentsWithDepth(this.commentsMap.get('top'), 0);
    cache.setKey(this.postId, this.commentsResult);
    cache.save();
    return this.commentsResult;
  }
}

module.exports = CommentsBuilder;
