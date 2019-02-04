import React from 'react';
import Footer from '../Footer/Footer';
import PostHeader from '../Post/PostHeader';
import Contact from '../Contact/Contact';
import '../../styles/blog.scss';
import SearchContainer from './SearchContainer';

const Search = () => (
  <>
    <PostHeader />
    <SearchContainer />
    <Contact
      source="Search"
    />
    <Footer />
  </>
);

export default Search;
