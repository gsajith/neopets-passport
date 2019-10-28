import React from 'react';
import PropTypes from 'prop-types';

import './PassportPage.scss';

import PassportPageSvg from '../../assets/imgs/passportPage.svg';
import BackArrow from '../../assets/imgs/back-arrow.svg';

import FL from '../../assets/imgs/worldImages/FL1.png';
import LD from '../../assets/imgs/worldImages/LD1.gif';
import MI from '../../assets/imgs/worldImages/MI1.gif';
import TM from '../../assets/imgs/worldImages/TM1.gif';
import T from '../../assets/imgs/worldImages/Tyrannia1.gif';
import VSS from '../../assets/imgs/worldImages/VSS1.gif';

const PassportPage = (props) => {
  const { handleClose, resetPassport, stampedLocations } = props;

  let numStamped = 0;
  Object.values(stampedLocations).forEach((stampedLocation) => {
    if (stampedLocation === true) {
      numStamped += 1;
    }
  });
  return (
    <div className="passportPageContainer">
      <img src={PassportPageSvg} className="passportImage" alt="Passport" />
      {stampedLocations.faerieland && <img src={FL} alt="Faerieland stamp" className="stamp faerieland" />}
      {stampedLocations.lostdesert && <img src={LD} alt="Lost Desert stamp" className="stamp lostdesert" />}
      {stampedLocations.mysteryisland && <img src={MI} alt="Mystery Island stamp" className="stamp mysteryisland" />}
      {stampedLocations.terrormountain && <img src={TM} alt="Terror Mountain stamp" className="stamp terrormountain" />}
      {stampedLocations.tyrannia && <img src={T} alt="Tyrannia stamp" className="stamp tyrannia" />}
      {stampedLocations.vss && <img src={VSS} alt="Virtupets Space Station stamp" className="stamp vss" />}
      <div
        className="button closePassportButton"
        onClick={handleClose}
        onKeyPress={handleClose}
        role="link"
        tabIndex={-2}
      >
        <img src={BackArrow} alt="Back arrow svg" />
        BACK TO WORLD
      </div>

      <div
        className="button resetPassportButton"
        onClick={resetPassport}
        onKeyPress={resetPassport}
        role="link"
        tabIndex={-1}
      >
      Reset Passport
      </div>
      {numStamped === 6 && <div className="successBg" />}
      {numStamped === 6 && <div className="successText">You&apos;ve stamped the whole passport! Congrats!</div>}
    </div>
  );
};


PassportPage.propTypes = {
  handleClose: PropTypes.func,
  resetPassport: PropTypes.func.isRequired,
  stampedLocations: PropTypes.object.isRequired,
};


export default PassportPage;
