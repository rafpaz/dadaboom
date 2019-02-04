import { Quill } from 'react-quill';

const BlockEmbed = Quill.import('blots/block/embed');
const Link = Quill.import('formats/link');

const ATTRIBUTES = ['height', 'width'];

class Audio extends BlockEmbed {
  static create(value) {
    const node = super.create(value);
    node.setAttribute('controls', '');
    node.setAttribute('controlsList', 'nodownload');
    const htmlString = `<source src="${this.sanitize(value)}" type="audio/mpeg"/>`;
    const parser = new DOMParser();
    const doc = parser.parseFromString(htmlString, 'text/xml');
    node.appendChild(doc.childNodes[0]);
    return node;
  }

  static formats(domNode) {
    return ATTRIBUTES.reduce((formats, attribute) => {
      if (domNode.hasAttribute(attribute)) {
        formats[attribute] = domNode.getAttribute(attribute);
      }
      return formats;
    }, {});
  }

  static sanitize(url) {
    return Link.sanitize(url); // eslint-disable-line import/no-named-as-default-member
  }

  static value(domNode) {
    return domNode.children[0].getAttribute('src');
  }

  format(name, value) {
    if (ATTRIBUTES.indexOf(name) > -1) {
      if (value) {
        this.domNode.setAttribute(name, value);
      } else {
        this.domNode.removeAttribute(name);
      }
    } else {
      super.format(name, value);
    }
  }

  html() {
    const { video } = this.value();
    return `<a href="${video}">${video}</a>`;
  }
}
Audio.blotName = 'audio';
Audio.className = 'ql-audio';
Audio.tagName = 'audio';

Quill.register({
  'formats/audio': Audio,
});

export default Audio;
