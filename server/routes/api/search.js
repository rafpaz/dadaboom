const Validation = require('../../js/validate');
const logger = require('../../../config/winston');
const Search = require('../../service/search');

module.exports = (app) => {
  app.get('/api/search/sidebar', async (req, res) => {
    const data = await Search.getGenericSearchData();
    res
      .status(200)
      .json(data);
  });

  app.get('/api/search', async (req, res) => {
    const data = await Search.search(req.query);
    res
      .status(200)
      .json(data);
  });

  app.get('/api/search/byCategory/:category', async (req, res) => {
    try {
      const query = Validation.validate(req.params.category);
      const result = await Search.searchBySection('category', query);
      res.status(200).json(result);
    } catch (e) {
      logger.error('error in search by category');
      res.status(500).send('ERROR');
    }
  });

  app.get('/api/search/byTags/:tags', async (req, res) => {
    try {
      const query = Validation.validate(req.params.tags);
      const result = await Search.searchBySection('tags', query);
      res.status(200).json(result);
    } catch (e) {
      logger.error('error in search by tags');
      res.status(500).send('ERROR');
    }
  });

  app.get('/api/search/byWord/:word', async (req, res) => {
    try {
      const query = Validation.validate(req.params.word);
      const result = await Search.searchInAllSections(query);
      res.status(200).json(result);
    } catch (e) {
      logger.error('error in search by word');
      res.status(500).send('ERROR');
    }
  });
};
