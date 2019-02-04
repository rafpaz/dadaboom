/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { SidebarTitle, SidebarItem } from './sidebarSharedStyles';
import { AlignRight } from '../../../styles/sharedStyles';
import { PostConsumer } from '../PostContext';

const CATEGORIES_END_POINT = '/api/posts/genericData/categories';
const SEARCH_END_POINT = '/search?section=category&query=';

const CategoriesContainer = styled(SidebarItem)`
  ${AlignRight};
`;
const CategoryListItem = styled.li`
  border-bottom: 1px solid #ececec;
  &:last-child {
    border-bottom: 0;
  }
`;
const CategoryListLink = styled(Link)`
  font-family: 'Open Sans Hebrew', sans-serif;
  font-size: 14px;
  color: #222222;
  && {
    padding: 10px 0;
  }
  
  &&:hover {
    background: none;
    color: #d6b161;
    transition: 200ms ease;
  }
  
  &&:focus {
    background-color: white;
    color: black;
  }
  
  ${({ active }) => active && `
    && {
      padding-right: 20px;
    }
    &:before {
      position: absolute;
      content: "";
      border-color: transparent #d6b161 transparent transparent;
      border-width: 8px;
      border-style: solid;
      right: 0;
      margin-top: 2px;
      z-index: 0;
      transition: all 0.3s ease 0s;
      -webkit-transition: all 0.3s ease 0s;
    }
  `}
`;

const Categories = ({ categories, current }) => categories.map((category, i) => (
  <CategoryListItem key={category}>
    <CategoryListLink to={`${SEARCH_END_POINT}${category}`} active={current === i ? 1 : 0}>
      {category}
    </CategoryListLink>
  </CategoryListItem>
));

class SideBarCategories extends Component {
  state = {
    categories: [],
  };

  async componentDidMount() {
    const result = await axios.get(CATEGORIES_END_POINT);
    this.setState({
      categories: result.data,
    });
  }

  render() {
    const { categories } = this.state;
    return (
      <CategoriesContainer>
        <SidebarTitle>קטגוריות</SidebarTitle>
        <ul className="nav navbar-stacked">
          {categories.length > 0
          && (
          <PostConsumer>
            {({ category }) => (
              <Categories
                categories={categories}
                current={categories.findIndex(item => item === category)}
              />
            )}
          </PostConsumer>
          )
          }
        </ul>
      </CategoriesContainer>
    );
  }
}

export default SideBarCategories;
