import React, { Component } from 'react';
import styled from 'styled-components';
import axios from 'axios';
import queryString from 'query-string';
import { Blog } from '../Post/postSectionStyle';
import PostSidebar from '../Post/SideBar/PostSidebar';
import SearchResults from './SearchResult';
import { PostProvider } from '../Post/PostContext';
import Preloader from '../Preloader/Preloader';
import { AlignRight } from '../../styles/sharedStyles';

const SEARCH_SIDEBAR_ENDPOINT = '/api/search/sidebar';
const SEARCH_ENDPOINT = '/api/search';

const TitleStyle = styled.h3`
  float: right;
  margin: 0 -17px 24px 0;
  ${AlignRight};
  width: 100%;
  @media (max-width: 700px) {
    margin: auto;
    text-align: center;
  }
`;
const Container = styled.div`
  padding-right: 50px;
  @media (max-width: 700px) {
    padding-right: 0;
    padding-left: 0;
  }
`;

const getHeaderName = section => ({
  tags: 'תגית',
  category: 'קטגוריה',
  content: 'חיפוש',
})[section];

const Title = () => {
  const query = queryString.parse(window.location.search);
  return (
    <TitleStyle>
      {`${getHeaderName(query.section)}: ${query.query.replace('-', ' ')}`}
    </TitleStyle>
  );
};

class SearchContainer extends Component {
  state = {
    post: {
      tags: [],
      categories: [],
    },
    searchResults: [],
    loading: true,
  };

  async componentDidMount() {
    await this.loadData();
  }

  async componentWillReceiveProps() {
    await this.loadData();
  }

  async loadData() {
    this.setState({ loading: true });
    const query = queryString.parse(window.location.search);
    axios.all([
      axios.get(SEARCH_ENDPOINT, { params: query }),
      axios.get(SEARCH_SIDEBAR_ENDPOINT),
    ]).then(axios.spread((searchResults, sidebar) => {
      this.setState({
        post: sidebar.data,
        searchResults: searchResults.data || [],
      });
      this.setState({ loading: false });
    }));
  }

  render() {
    const { post, searchResults, loading } = this.state;
    return (
      loading
        ? <Preloader />
        : (
          <Blog
            marginTop={40}
          >
            <div className="container">
              <section className="row">
                <Container className="col-md-9 col-sm-12">
                  <div className="row">
                    <Title />
                    <SearchResults
                      results={searchResults}
                    />
                  </div>
                </Container>
                <PostProvider value={post}>
                  <PostSidebar />
                </PostProvider>
              </section>
            </div>
          </Blog>
        )
    );
  }
}

SearchContainer.propTypes = {};

export default SearchContainer;
