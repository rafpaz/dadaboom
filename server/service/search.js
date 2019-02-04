const Post = require('../models/Post');

const SECTIONS = ['tags', 'category', 'content'];

class Search {
  static getGenericSearchData() {
    return Promise.all(
      SECTIONS.filter(section => section !== 'content').map(section => Search.getAllFromSection(section)),
    ).then(([tags, categories]) => ({
      tags,
      categories,
    }));
  }

  static getAllFromSection(name) {
    return Post.find({}).select({ [name]: 1, _id: 0 }).then((data) => {
      const result = data.reduce((acc, mData) => {
        mData.toObject()[name].split(',').forEach(entry => acc.add(entry.trim()));
        return acc;
      }, new Set());
      return Array.from(result);
    });
  }

  static searchBySection(section, query) {
    return Post.find({ [section]: new RegExp(query, 'i') });
  }

  static searchInAllSections(query) {
    return Promise.all(
      SECTIONS.map(section => Search.searchBySection(section, query)),
    ).then((searchResults) => {
      const rMap = new Map();
      searchResults.forEach((sectionResults) => {
        sectionResults.forEach((searchResult) => {
          const obj = searchResult.toObject();
          const key = obj._id.toString();
          if (!rMap.has(key)) {
            rMap.set(key, obj);
          }
        });
      });
      return Array.from(rMap.values());
    });
  }

  static search({ section, query }) {
    if (!section || !query || !SECTIONS.includes(section)) return null;
    return Search.searchBySection(section, query.replace('-', ' '));
  }
}

module.exports = Search;
