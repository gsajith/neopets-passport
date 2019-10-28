import React from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

import sublocations from '../../shared/sublocations';
import './WorldDetailsPage.scss';

const WorldDetailsPage = (props) => {
  let { id } = useParams();
  if (Object.keys(props).length > 0) {
    id = props.id;
  }

  const location = sublocations.filter((sublocation) => sublocation.id === id)[0];
  if (location === undefined) {
    return (
      <>
        Oops this place doesn&apos;t exist!
        <Link to="/"> Go back home.</Link>

      </>
    );
  }
  const {
    name, descriptionsArray, largeImage, bannerImage, ACImage,
  } = location;

  const { handleClose, stampPassport, stampedLocations } = props;

  let numStamped = 6;
  Object.values(stampedLocations).forEach((stampedLocation) => {
    if (stampedLocation === false) {
      numStamped -= 1;
    }
  });

  return (
    <div className="sublocation">
      <div className="header">
        { handleClose && (
        <div
          className="back-button"
          onClick={handleClose}
          onKeyPress={handleClose}
          role="link"
          tabIndex={0}
        >
        X
        </div>
        )}
        <div className="blob" />
        <div className="blob-text">
          {name}
        </div>
        <div className="stamp-text">
          You&apos;ve stamped
          {' '}
          {numStamped}
          /6 locations in your passport.
        </div>
      </div>
      <div className="info-container">
        <div className="left-pics">
          <div className="pics-row">
            <img src={ACImage} alt="Altador cup team" />
            <img src={bannerImage} alt="Banner" />
          </div>
          <div className="large-pic">
            <img src={largeImage} alt="Map" />
          </div>
        </div>
        <div className="right-info">
          <div className="info-row">
            <div className="info-pic">
              <img src={descriptionsArray[0].image} alt="Description 1" />
            </div>
            <div className="info-text">
              {descriptionsArray[0].description}
            </div>
          </div>
          <div className="info-row">
            <div className="info-text">
              {descriptionsArray[1].description}
            </div>
            <div className="info-pic">
              <img src={descriptionsArray[1].image} alt="Description 2" />
            </div>
          </div>
          <div className="info-row">
            <div className="info-pic">
              <img src={descriptionsArray[2].image} alt="Description 3" />
            </div>
            <div className="info-text">
              {descriptionsArray[2].description}
            </div>
          </div>
        </div>
      </div>
      {stampedLocations[id]
        ? (
          <div className="button stampButton disabled">
            STAMPED!
          </div>
        )
        : (
          <div
            className="button stampButton"
            onClick={() => { stampPassport(id); }}
            onKeyPress={() => { stampPassport(id); }}
            role="link"
            tabIndex={0}
          >
            STAMP PASSPORT
          </div>
        )}

    </div>
  );
};

WorldDetailsPage.propTypes = {
  id: PropTypes.string,
  handleClose: PropTypes.func,
  stampPassport: PropTypes.func,
  stampedLocations: PropTypes.object.isRequired,
};

export default WorldDetailsPage;
