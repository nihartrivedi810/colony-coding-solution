import React from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import { Popover, Overlay as OverlayTrigger } from 'react-bootstrap';
import cx from 'classnames';

import './overlay.css';

class Overlay extends React.PureComponent {

  state = {
    show: this.props.show,
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ show: nextProps.show });
  };

  getTarget = () => {
    return ReactDOM.findDOMNode(this.target);
  };

  render() {
    const { props, state } = this;
    const overlayProps = {
      container: this,
      target: this.getTarget,
      show: state.show,
      trigger: props.trigger,
      placement: props.placement,
      rootClose: props.rootClose,
      onHide: props.onHide,
      delayHide: 0,
    };

    return <div
      ref={element => {
        this.target = element;
      }}
    >
      {props.children}
      <OverlayTrigger
        {...overlayProps}
      ><Popover
        className={cx('animated popover', { bounceInDown: state.show, fadeOut: !state.show })}
      >
        {props.overlay}
      </Popover>
      </OverlayTrigger>
    </div>
  }
}

Overlay.propTypes = {
  children: PropTypes.element,
  overlay: PropTypes.element,
  trigger: PropTypes.string,
  placement: PropTypes.string,
  rootClose: PropTypes.bool,
  show: PropTypes.bool,
  onHide: PropTypes.func.isRequired,
};

Overlay.defaultProps = {
  trigger: 'click',
  placement: 'bottom',
  rootClose: true,
  show: false,
};

export default Overlay;
