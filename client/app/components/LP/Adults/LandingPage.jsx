import React, { Component } from 'react';
import '../Common/LP-common.css';
import './LandingPage.css';
import { Image, Transformation } from 'cloudinary-react';
import { isMobile } from 'react-device-detect';
import { Redirect } from 'react-router';
import LPForm from '../Common/LPForm';
import LPModal from '../Common/LPModal';

class LandingPage extends Component {
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
    setTimeout(
      () => {
        this.setState({ redirect: true });
      },
      3000,
    );
  }

  page() {
    return isMobile ? this.mobilePage() : this.desktopPage();
  }

  desktopPage() {
    const { showModal } = this.state;
    return (
      <div id="background">
        <div className="container-fluid">
          <div className="col-md-2" />
          <div className="col-md-3">
            <div id="lp-header-container">
              <Image
                id="lp-header-img"
                cloudName="dadaboom"
                publicId="logo_yellow.png"
                className="img-responsive"
              />
            </div>
            <div className="lp-text text-center">
              <div id="lp-dream">גם לך יש חלום ילדות</div>
              <div id="lp-drums">לנגן בתופים?</div>
              <div id="lp-school">
                בבית הספר לתופים של צפריר ליכטנשטיין מגשימים לך
                חלום ובגדול!

              </div>
            </div>
            <LPForm
              afterSubmit={this.afterSubmit}
              backgroundClass="lp-form-background"
              textClass="black-header"
              buttonText1="כן, גם אני רוצה"
              buttonText2="להגשים חלום אצל צפריר"
              source="Landing Page Adults"
            />
          </div>
          <div className="col-md-7" />
          <LPModal showModal={showModal} />
        </div>
      </div>
    );
  }

  mobilePage() {
    const { showModal } = this.state;
    return (
      <div id="mobile-background" className="lp-main-bg-color">
        <div className="container-fluid">
          <div className="col-md-2" />
          <div className="col-md-3">
            <Image
              id="lp-header-img"
              cloudName="dadaboom"
              publicId="logo_yellow.png"
              className="img-responsive"
            />
            <div className="lp-text text-center">
              <div id="lp-dream">גם לך יש חלום ילדות</div>
              <div id="lp-drums">לנגן בתופים?</div>
              <div id="lp-school">
                בבית הספר לתופים של צפריר ליכטנשטיין מגשימים לך
                חלום ובגדול!

              </div>
            </div>
            <LPForm
              afterSubmit={this.afterSubmit}
              backgroundClass="lp-form-background"
              textClass="black-header"
              buttonText1="כן, גם אני רוצה"
              buttonText2="להגשים חלום אצל צפריר"
              source="Landing Page Adults"
            />
          </div>
          <div className="col-md-7">
            <Image
              publicId="Cover/5.jpg"
              cloudName="dadaboom"
              className="img-responsive"
            >
              <Transformation quality="auto:good" />
            </Image>
          </div>
          <LPModal showModal={showModal} />
        </div>
      </div>
    );
  }

  render() {
    const { redirect } = this.state;
    return !redirect ? this.page() : <Redirect to="/" />;
  }
}

export default LandingPage;
