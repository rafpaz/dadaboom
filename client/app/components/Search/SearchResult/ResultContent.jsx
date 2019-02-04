import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import moment from 'moment';
import { AlignRight } from '../../../styles/sharedStyles';
import 'moment/locale/he';

const Container = styled.div`
  width: 65%;
  margin-top: -7px;
  @media (max-width: 700px) {
    width: 100%;
    margin: auto;
  }
`;

const Grid = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-wrap: wrap;
  align-items: center;
  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;

const HeaderStyle = styled.div`
  font-size: 23px;
  @media (max-width: 700px) {
    width: 100%;
    margin: auto;
  }
`;

const HeaderText = styled(HeaderStyle)`
  max-width: 78%;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  ${AlignRight};
  @media (max-width: 700px) {
    order: -1;
    max-width: 100%;
  }
`;

const HeaderDate = styled(HeaderStyle)`
  font-size: 12px;
  margin: 6px 20px 0 0;
  opacity: 0.7;
  ${AlignRight};
`;

const Text = styled.div`
  width: 100%;
  ${AlignRight};
  @media (max-width: 700px) {
    margin-top: 10px;
  }
`;

const ResultContent = ({ date, title, description }) => (
  <Container>
    <Grid>
      <HeaderDate>{moment(date).locale('he').format('LL')}</HeaderDate>
      <HeaderText title={title}>{title}</HeaderText>
      <Text>{description}</Text>
    </Grid>
  </Container>
);

export default ResultContent;

ResultContent.propTypes = {
  date: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};
