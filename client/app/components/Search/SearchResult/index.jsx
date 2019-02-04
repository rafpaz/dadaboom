import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import ToRead from './ToRead';
import ResultContent from './ResultContent';
import ResultImage from './ResultImage';
import { AlignRight } from '../../../styles/sharedStyles';

const FlexGrid = styled.div`
    display: flex;
    justify-content: flex-end;
    text-align: right;
    height: 100%;
    padding: 20px;
    @media (max-width: 700px) {
      flex-direction: column-reverse;
    }
`;

const ResultRow = styled.article`
  border: 1px solid #e0e0e0;
  width: 92%;
  float: right;
  margin-bottom: 15px;
  @media (max-width: 700px) {
    float: none;
    margin: 20px auto;
    width: 86%;
  }
`;

const Container = styled.div`
  article:first-child {
    margin-top: 50px
  }
`;

const BlogLink = styled(Link)`
  color: inherit;
  &:hover {
    color: inherit;
    text-decoration: none;
  }
`;

const NoResults = styled.h4`
  ${AlignRight};
  margin-right: -17px;
`;

const Results = ({ results }) => (
  results.map(({
    image, url, date, title, description,
  }) => (
    <ResultRow className="row" key={url}>
      <BlogLink to={`/blog/${url}`}>
        <FlexGrid>
          <ToRead />
          <ResultContent
            date={date}
            title={title}
            description={description}
          />
          <ResultImage
            imageName={image}
          />
        </FlexGrid>
      </BlogLink>
    </ResultRow>
  ))
);

const SearchResults = ({ results }) => (
  <Container>
    {
      results.length > 0 ? <Results results={results} /> : <NoResults>אין תוצאות</NoResults>
    }
  </Container>
);

SearchResults.propTypes = {
  results: PropTypes.arrayOf(
    PropTypes.shape({
      date: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      image: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
    }),
  ).isRequired,
};

export default SearchResults;
