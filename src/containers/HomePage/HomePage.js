import React from 'react';
import PropTypes from 'prop-types';
import Tilt from 'react-vanilla-tilt';

import './HomePage.scss';
import WorldMap from '../../assets/imgs/neopia_world.png';
import Passport from '../../assets/imgs/passport.svg';
import sublocations from '../../shared/sublocations';

export default class HomePage extends React.Component {
  constructor(props) {
    super(props);
    this.showLocation = this.showLocation.bind(this);
    this.showPassport = this.showPassport.bind(this);
  }

  showLocation(id) {
    const { showDetails } = this.props;
    showDetails(id);
  }

  showPassport() {
    const { showPassport } = this.props;
    showPassport();
  }

  render() {
    const mapGrid = Array(25).fill(null);
    sublocations.forEach((location) => {
      mapGrid[location.mapIndex] = location;
    });
    return (
      <div>
        <img src={WorldMap} alt="Neopia World" className="worldBackground" />
        <div className="navigationContainer">
          {mapGrid.map((location, idx) => {
            if (location == null) {
              return <div key={idx} className="navigationItemContainer" />;
            }
            return (
              <div
                key={location.id}
                onClick={() => this.showLocation(location.id)}
                onKeyPress={() => this.showLocation(location.id)}
                role="link"
                tabIndex={location.mapIndex}
                className="navigationItemContainer"
              >
                <Tilt className="tilt">
                  <div className="hexagon">
                    <div className="hexagon-in1">
                      <img src={location.mapPhoto} alt={location.name} className="hexagon-in2" />
                    </div>
                  </div>
                </Tilt>
              </div>
            );
          })}
        </div>
        <div
          className="passportContainer"
          onClick={() => this.showPassport()}
          onKeyPress={() => this.showPassport()}
          role="link"
          tabIndex={-1}
        >
          <img src={Passport} alt="Open passport page" />
        </div>
      </div>
    );
  }
}

HomePage.propTypes = {
  showDetails: PropTypes.func.isRequired,
  showPassport: PropTypes.func.isRequired,
};
