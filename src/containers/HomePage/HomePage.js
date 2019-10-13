import React from 'react';
import PropTypes from 'prop-types';
import Tilt from 'react-vanilla-tilt';

import './HomePage.scss';
import WorldMap from '../../assets/imgs/neopia_world.png';

const HomePage = (props) => {
  const { name } = props;
  return (
    <div>
      <img src={WorldMap} alt="Neopia World" className="worldBackground" />
      <div className="navigationContainer">
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer">
          <Tilt className="tilt">
            <div className="hexagon">
              <div className="hexagon-in1">
                <img src="http://placekitten.com/100/200" className="hexagon-in2" />
              </div>
            </div>
          </Tilt>
        </div>
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer">
          <Tilt className="tilt">
            <div className="hexagon">
              <div className="hexagon-in1">
                <img src="http://placekitten.com/100/200" className="hexagon-in2" />
              </div>
            </div>
          </Tilt>
        </div>
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer">
          <Tilt className="tilt">
            <div className="hexagon">
              <div className="hexagon-in1">
                <img src="http://placekitten.com/100/200" className="hexagon-in2" />
              </div>
            </div>
          </Tilt>
        </div>
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer">
          <Tilt className="tilt">
            <div className="hexagon">
              <div className="hexagon-in1">
                <img src="http://placekitten.com/100/200" className="hexagon-in2" />
              </div>
            </div>
          </Tilt>
        </div>
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer">
          <Tilt className="tilt">
            <div className="hexagon">
              <div className="hexagon-in1">
                <img src="http://placekitten.com/100/200" className="hexagon-in2" />
              </div>
            </div>
          </Tilt>
        </div>
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer">
          <Tilt className="tilt">
            <div className="hexagon">
              <div className="hexagon-in1">
                <img src="http://placekitten.com/100/200" className="hexagon-in2" />
              </div>
            </div>
          </Tilt>
        </div>
        <div className="navigationItemContainer" />
        <div className="navigationItemContainer" />
      </div>
    </div>
  );
};

HomePage.propTypes = {
  name: PropTypes.string.isRequired,
};

export default HomePage;
