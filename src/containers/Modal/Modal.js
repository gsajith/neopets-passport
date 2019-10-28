import React from 'react';
import { CSSTransition } from 'react-transition-group';
import PropTypes from 'prop-types';

import './Modal.scss';

/* Modal component */
export default class Modal extends React.PureComponent {
  render() {
    const { handleClose, show, children } = this.props;
    const childrenWithProps = React.Children.map(
      children,
      (child) => React.cloneElement(child, { handleClose }),
    );

    return (
      <div>
        <CSSTransition
          in={show}
          classNames="opacity"
          timeout={250}
          mountOnEnter
          unmountOnExit
        >
          <div
            className="modal"
            onClick={handleClose}
            onKeyPress={handleClose}
            role="link"
            tabIndex={0}
            aria-label="close"
          />
        </CSSTransition>
        <CSSTransition
          in={show}
          classNames="slide-in-right"
          timeout={250}
          mountOnEnter
          unmountOnExit
        >
          <section className="modal-main">
            {childrenWithProps}
          </section>
        </CSSTransition>
      </div>
    );
  }
}

Modal.propTypes = {
  handleClose: PropTypes.func.isRequired,
  show: PropTypes.bool.isRequired,
  children: PropTypes.arrayOf(PropTypes.node),
};

Modal.defaultProps = {
  children: [],
};
