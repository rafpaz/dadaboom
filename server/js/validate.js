const sanitizeHtml = require('sanitize-html');

const config = {
  allowedTags: sanitizeHtml.defaults.allowedTags.concat(['img', 'audio', 'source']),
  allowedAttributes: {
    a: ['href', 'name', 'target'],
    img: ['src', 'class'],
    iframe: ['src', 'class', 'width', 'height', 'allow', 'frameborder', 'allowfullscreen'],
    p: ['class'],
    audio: ['class', 'controls', 'controlsList', 'controlslist'],
    source: ['src', 'type'],
  },
};

function validate(prop) {
  const clean = sanitizeHtml(prop, config);
  return clean;
}

module.exports = {
  validate,
};
