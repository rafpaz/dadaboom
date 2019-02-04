import React, { Component } from 'react';
import { isMobile } from 'react-device-detect';
import { Redirect } from 'react-router';
import { Image } from 'cloudinary-react';

import LPModal from '../Common/LPModal';
import LPContent from './LPContent';
import '../Common/LP-common.css';
import './LandingPageKids.css';

class LandingPageKids extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showModal: false,
      redirect: false,
    };
    this.afterSubmit = this.afterSubmit.bind(this);
  }

  afterSubmit() {
    this.setState({ showModal: true });
    setTimeout(() => {
      this.setState({ redirect: true });
    }, 3000);
  }

  desktopPage() {
    const { showModal } = this.state;
    return (
      <div id="landing-kids" className="container-fluid">
        <div className="row">
          <div id="lpk-left" className="col-md-6">
            <Image
              cloudName="dadaboom"
              publicId="LandingPageKids/left.png"
              className="lpk-img-responsive"
            />
          </div>
          <LPContent
            afterSubmit={this.afterSubmit}
          />
          <div id="lpk-right" className="col-md-3">
            <Image
              cloudName="dadaboom"
              publicId="LandingPageKids/right.png"
              className="lpk-img-responsive"
            />
          </div>
        </div>
        <LPModal
          showModal={showModal}
        />
      </div>
    );
  }

  mobilePage() {
    const { showModal } = this.state;
    return (
      <div id="landing-kids" className="container-fluid">
        <div id="lpk-left" className="col-md-3">
          <Image
            cloudName="dadaboom"
            publicId="Branding/logo.png"
            className="img-responsive center-img"
          />
        </div>
        <LPContent
          afterSubmit={this.afterSubmit}
        />
        <div id="lpk-right" className="col-md-3">
          <Image
            cloudName="dadaboom"
            publicId="LandingPageKids/kid.png"
            className="img-responsive center-img"
          />
        </div>
        <LPModal
          showModal={showModal}
        />
      </div>
    );
  }

  page() {
    return isMobile ? this.mobilePage() : this.desktopPage();
  }

  render() {
    const { redirect } = this.state;
    return (
      !redirect ? this.page() : <Redirect to="/" />
    );
  }
}

export default LandingPageKids;
