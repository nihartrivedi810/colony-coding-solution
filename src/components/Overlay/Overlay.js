import React from 'react';
import PropTypes from 'prop-types';
import { Popover, OverlayTrigger } from 'react-bootstrap';

import './overlay.css';

const Overlay = props => (
  <OverlayTrigger
    trigger={props.trigger}
    placement={props.placement}
    rootClose={props.rootClose}
    delayHide={0}
    overlay={<Popover
      className="bounceInDown animated popover"
    >
      {props.overlay}
    </Popover>}
  >
    {props.children}
  </OverlayTrigger>
);

Overlay.propTypes = {
  children: PropTypes.element,
  overlay: PropTypes.element,
  trigger: PropTypes.string,
  placement: PropTypes.string,
  rootClose: PropTypes.bool,
};

Overlay.defaultProps = {
  trigger: 'click',
  placement: 'bottom',
  rootClose: true,
};

export default Overlay;
