import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
import { Image, Transformation } from 'cloudinary-react';
import { isMobile } from 'react-device-detect';

const Container = styled.div`
  width: 16%;
  align-self: center;
  margin: 0 6px 0 30px;
  @media (max-width: 700px) {
    width: 100%;
  }
`;

const ImageStyle = styled(Image)`
  @media (max-width: 700px) {
    margin: 0 auto;
    max-height: 224px;
  }
`;

const ResultImage = ({ imageName }) => (
  <Container>
    <ImageStyle
      cloudName="dadaboom"
      publicId={imageName}
      className="img-responsive"
    >
      {!isMobile
      && <Transformation height="78" width="117" crop="fill" />
      }
    </ImageStyle>
  </Container>
);

export default ResultImage;

ResultImage.propTypes = {
  imageName: PropTypes.string.isRequired,
};
