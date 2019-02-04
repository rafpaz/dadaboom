/* eslint-disable no-return-assign */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './Audio';
import 'react-quill/dist/quill.snow.css';
import Editor from './Editor';
import './quillExtender';

class EditorContainer extends Component {
  constructor(props) {
    super(props);
    this.modules = {};
    this.modules.toolbar = {
      container: [
        [{ header: '1' }, { header: '2' }, { font: [] }],
        [{ size: [] }],
        ['bold', 'italic', 'underline', 'strike', 'blockquote'],
        [{ list: 'ordered' }, { list: 'bullet' },
          { indent: '-1' }, { indent: '+1' }, { direction: 'rtl' }, { align: [] }],
        ['link', 'image', 'video'],
        ['clean'],
        ['audio'],
      ],
      clipboard: {
        matchVisual: false,
      },
      handlers: {
        image: this.imageHandler,
        audio: this.audioHandler,
      },
    };
    this.formats = [
      'header', 'font', 'size',
      'bold', 'italic', 'underline', 'strike', 'blockquote',
      'list', 'bullet', 'indent',
      'link', 'image', 'video', 'align', 'direction', 'customImage',
    ];

    this.handleChange = this.handleChange.bind(this);
    this.imageHandler = this.imageHandler.bind(this);
    this.audioHandler = this.audioHandler.bind(this);
  }

  imageHandler() {
    const range = this.quill.getSelection();
    // eslint-disable-next-line no-alert
    const value = prompt('What is the image URL');
    if (value) {
      this.quill.insertEmbed(range.index, 'image', value, 'user');
    }
  }

  audioHandler() {
    const range = this.quill.getSelection();
    // eslint-disable-next-line no-alert
    const value = prompt('What is the image URL');
    if (value) {
      this.quill.insertEmbed(range.index, 'audio', value, 'user');
    }
  }


  handleChange(html) {
    const { onContentChange } = this.props;
    onContentChange(html);
  }

  render() {
    const { initialValue } = this.props;
    return (
      <>
        <Editor
          handleChange={this.handleChange}
          value={initialValue || ''}
          modules={this.modules}
          formats={this.formats}
          refFunc={el => this.quillRef = el}
        />
      </>
    );
  }
}

/*
 * PropType validation
 */
EditorContainer.propTypes = {
  initialValue: PropTypes.string,
  onContentChange: PropTypes.func,
};

EditorContainer.defaultProps = {
  initialValue: '',
  onContentChange: null,
};

export default EditorContainer;
