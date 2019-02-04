import React from 'react';
import PropTypes from 'prop-types';
import ReactQuill from 'react-quill';

const Editor = (props) => {
  const {
    handleChange, value, modules, formats, refFunc,
  } = props;
  return (
    <ReactQuill
      ref={refFunc}
      theme="snow"
      onChange={handleChange}
      value={value}
      modules={modules}
      formats={formats}
      bounds=".pc-editor-area"
      placeholder="BLA"
    />
  );
};

Editor.propTypes = {
  formats: PropTypes.arrayOf(PropTypes.string).isRequired,
  handleChange: PropTypes.func.isRequired,
  modules: PropTypes.shape({
    toolbar: PropTypes.object.isRequired,
  }).isRequired,
  refFunc: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
};

export default Editor;
