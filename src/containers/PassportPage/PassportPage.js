import React from 'react';
import PropTypes from 'prop-types';

import './PassportPage.scss';

import PassportPageSvg from '../../assets/imgs/passportPage.svg';
import BackArrow from '../../assets/imgs/back-arrow.svg';

import FL1 from '../../assets/imgs/stamps/FL1.gif';
import FL2 from '../../assets/imgs/stamps/FL2.gif';
import FL3 from '../../assets/imgs/stamps/FL3.gif';
import FL4 from '../../assets/imgs/stamps/FL4.gif';
import FL5 from '../../assets/imgs/stamps/FL5.gif';
import FL6 from '../../assets/imgs/stamps/FL6.gif';

import LD1 from '../../assets/imgs/stamps/LD1.gif';
import LD2 from '../../assets/imgs/stamps/LD2.gif';
import LD3 from '../../assets/imgs/stamps/LD3.gif';
import LD4 from '../../assets/imgs/stamps/LD4.gif';
import LD5 from '../../assets/imgs/stamps/LD5.gif';
import LD6 from '../../assets/imgs/stamps/LD6.gif';

import MI1 from '../../assets/imgs/stamps/MI1.gif';
import MI2 from '../../assets/imgs/stamps/MI2.gif';
import MI3 from '../../assets/imgs/stamps/MI3.gif';
import MI4 from '../../assets/imgs/stamps/MI4.gif';
import MI5 from '../../assets/imgs/stamps/MI5.gif';
import MI6 from '../../assets/imgs/stamps/MI6.gif';

import TM1 from '../../assets/imgs/stamps/TM1.gif';
import TM2 from '../../assets/imgs/stamps/TM2.gif';
import TM3 from '../../assets/imgs/stamps/TM3.gif';
import TM4 from '../../assets/imgs/stamps/TM4.gif';
import TM5 from '../../assets/imgs/stamps/TM5.gif';
import TM6 from '../../assets/imgs/stamps/TM6.gif';

import T1 from '../../assets/imgs/stamps/T1.gif';
import T2 from '../../assets/imgs/stamps/T2.gif';
import T3 from '../../assets/imgs/stamps/T3.gif';
import T4 from '../../assets/imgs/stamps/T4.gif';
import T5 from '../../assets/imgs/stamps/T5.gif';
import T6 from '../../assets/imgs/stamps/T6.gif';

import VSS1 from '../../assets/imgs/stamps/VSS1.gif';
import VSS2 from '../../assets/imgs/stamps/VSS2.gif';
import VSS3 from '../../assets/imgs/stamps/VSS3.gif';
import VSS4 from '../../assets/imgs/stamps/VSS4.gif';
import VSS5 from '../../assets/imgs/stamps/VSS5.gif';
import VSS6 from '../../assets/imgs/stamps/VSS6.gif';


const FLStamps = [FL1, FL2, FL3, FL4, FL5, FL6];
const LDStamps = [LD1, LD2, LD3, LD4, LD5, LD6];
const MIStamps = [MI1, MI2, MI3, MI4, MI5, MI6];
const TMStamps = [TM1, TM2, TM3, TM4, TM5, TM6];
const TStamps = [T1, T2, T3, T4, T5, T6];
const VSSStamps = [VSS1, VSS2, VSS3, VSS4, VSS5, VSS6];

const PassportPage = (props) => {
  const { handleClose, resetPassport, stampedLocations } = props;

  let numStamped = 0;
  Object.values(stampedLocations).forEach((stampedLocation) => {
    if (stampedLocation !== false) {
      numStamped += 1;
    }
  });

  return (
    <div className="passportPageContainer">
      <img src={PassportPageSvg} className="passportImage" alt="Passport" />
      {stampedLocations.faerieland && <img src={FLStamps[stampedLocations.faerieland]} alt="Faerieland stamp" className="stamp faerieland" />}
      {stampedLocations.lostdesert && <img src={LDStamps[stampedLocations.lostdesert]} alt="Lost Desert stamp" className="stamp lostdesert" />}
      {stampedLocations.mysteryisland && <img src={MIStamps[stampedLocations.mysteryisland]} alt="Mystery Island stamp" className="stamp mysteryisland" />}
      {stampedLocations.terrormountain && <img src={TMStamps[stampedLocations.terrormountain]} alt="Terror Mountain stamp" className="stamp terrormountain" />}
      {stampedLocations.tyrannia && <img src={TStamps[stampedLocations.tyrannia]} alt="Tyrannia stamp" className="stamp tyrannia" />}
      {stampedLocations.vss && <img src={VSSStamps[stampedLocations.vss]} alt="Virtupets Space Station stamp" className="stamp vss" />}
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
