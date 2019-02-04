import React from 'react';
import PropTypes from 'prop-types';
import LPForm from '../Common/LPForm';
import LPIcons from './LPIcons';

const LPContent = (props) => {
  const { afterSubmit } = props;
  return (
    <div id="middle" className="col-md-3">
      <div id="header-text" className="row lpk-main-color">
        <div className="container">
          <div id="mom-dad" className="row text-center">
            אמא, אבא

          </div>
          <div id="did-u-know" className="row text-center">
            <div>ידעתם שנגינה בתופים</div>
            <div>משפרת את היכולות של ילדכם</div>
            <div>ומעלה את הבטחון העצמי?</div>
          </div>
          <div id="drum-school" className="row text-center">
            <div>בבית הספר לתופים</div>
            <div>של צפריר ליכטנשטיין</div>
            <div>הילד שלכם יפרח!</div>
          </div>
        </div>
      </div>
      <LPForm
        afterSubmit={afterSubmit}
        buttonText1="כן, גם אני רוצה"
        buttonText2="לשפר את היכולות של ילדי"
        backgroundClass="lpk-main-bg-color"
        textClass="white-header"
        source="Landing Page Kids"
      />
      <div id="icons" className="row">
        <div className="container">
          <div className="col-centered">
            <LPIcons
              text="מיקום מעולה במרכז השכונה"
              url="v1521703609/Location.svg"
              alt="location-icon"
            />
            <LPIcons
              text="לימוד תופים מחזק ביטחון עצמי"
              url="v1521703609/Smiley.svg"
              alt="smile-icon"
            />
            <LPIcons
              text="תחליף לחוגים ופעילות חברתית"
              url="v1521703609/football.svg"
              alt="football-icon"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

LPContent.propTypes = {
  afterSubmit: PropTypes.func.isRequired,
};

export default LPContent;
