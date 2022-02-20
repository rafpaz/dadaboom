import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Lightbox from 'react-images';
import RemoveRedEye from '@mui/icons-material/RemoveRedEye';
import ReactTooltip from 'react-tooltip';
import ReactGA from 'react-ga';

class ServiceBox extends Component {
  state = {
    currentImage: 0,
    isOpen: false,
  };

  reportClick = () => {
    const { title } = this.props;
    ReactGA.event({
      category: 'Services',
      action: `click on ${title}`,
    });
  };

  onBoxClick = () => {
    this.setState({ isOpen: true });
    this.reportClick();
  };

  onBoxKeyPress = (e) => {
    if (e.keyCode === 13) this.onBoxClick();
  };

  render() {
    const { isOpen, currentImage } = this.state;
    const {
      children, title, text, images,
    } = this.props;
    const isImages = !!images;
    return (
      <div className="services-box col-md-6 col-sm-12">
        <div
          role="button"
          tabIndex={0}
          className="thumbnail services-box-open"
          onKeyPress={this.onBoxKeyPress}
          onClick={this.onBoxClick}
          style={{ cursor: isImages ? 'pointer' : undefined }}
          data-tip={isImages}
          data-for={isImages && 'services-tooltip'}
        >
          {children}
          <h3>{title}</h3>
          <p>
            {text.split('@@').map((item, key) => (
              <span key={key}>
                {item}
                <br />
              </span>
            ))}
          </p>
        </div>
        {isImages
        && (
        <div>
          <ReactTooltip id="services-tooltip">
            <span>לחץ למידע נוסף</span>
          </ReactTooltip>
          <span
            role="button"
            tabIndex={0}
            className="services-box-open-icon"
            onClick={this.onBoxClick}
            onKeyPress={this.onBoxKeyPress}
          >
            <RemoveRedEye
              style={{ fontSize: '35px' }}
            />
          </span>
        </div>
        )
        }
        {isImages
        && (
        <Lightbox
          images={images}
          isOpen={isOpen}
          currentImage={currentImage}
          onClickPrev={() => { this.setState({ currentImage: currentImage - 1 }); }}
          onClickNext={() => { this.setState({ currentImage: currentImage + 1 }); }}
          onClose={() => this.setState({ isOpen: false })}
          backdropClosesModal
          showImageCount={false}
        />
        )
        }
      </div>
    );
  }
}

ServiceBox.propTypes = {
  title: PropTypes.string.isRequired,
  text: PropTypes.string.isRequired,
  children: PropTypes.element.isRequired,
  images: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    caption: PropTypes.string,
  })),
};

ServiceBox.defaultProps = {
  images: null,
};

export default ServiceBox;
