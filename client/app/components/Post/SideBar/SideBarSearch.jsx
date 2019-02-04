import React, { Component } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { withRouter } from 'react-router-dom';
import { SidebarItem } from './sidebarSharedStyles';
import { AlignRight } from '../../../styles/sharedStyles';

const FormControl = styled.input`
  border-radius: 0;
  border: 1px solid #e0e0e0;
  box-shadow: none;
  height: 45px;
  ${AlignRight};

  &:focus, &:hover {
    border: 1px solid #eeeeee;
    box-shadow: none;
  }
`;

const InputButton = styled.button`
    background-color: #d6b161;
    border: 1px solid #d6b161;
    color: #ffffff;
    height: 45px;
    width: 45px;
    box-shadow: none;
    border-radius: 0;
    &:hover {
      background-color: #d6b161;
      border: 1px solid #d6b161;
    }
`;

class SideBarSearch extends Component {
  state = {
    searchQuery: '',
  };

  onClick = () => {
    const { history } = this.props;
    const { searchQuery } = this.state;
    history.push(`/search?section=content&query=${searchQuery}`);
  };

  handleInputChange = (e) => {
    const { value } = e.target;

    this.setState({
      searchQuery: value,
    });
  };

  handleKeyPress = (e) => {
    if (e.key === 'Enter') {
      this.onClick();
    }
  };

  render() {
    return (
      <SidebarItem>
        <div className="input-group">
          <span className="input-group-btn">
            <InputButton
              className="btn btn-primary"
              type="button"
              onClick={this.onClick}
            >
              <span className="glyphicon glyphicon-search" />
            </InputButton>
          </span>
          <FormControl
            className="form-control"
            type="text"
            placeholder="חיפוש"
            onChange={this.handleInputChange}
            onKeyPress={this.handleKeyPress}
          />
        </div>
      </SidebarItem>
    );
  }
}

SideBarSearch.propTypes = {
  history: PropTypes.shape({
    push: PropTypes.func.isRequired,
  }).isRequired,
};

export default withRouter(SideBarSearch);
