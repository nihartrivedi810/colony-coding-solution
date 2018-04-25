import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './avatarImage.css';

const AvatarImage = props => (<img
  className={cx('avatar-image', props.className, { 'avatar-image--mask': props.showMaskOnHover })}
  src={props.src}
  tabIndex="0"
  onKeyUp={event => {
    if (event.keyCode === 13) {
      props.onClick();
    }
  }}
  onClick={props.onClick}
  onMouseDown={event => {
    event.preventDefault(); //to prevent the focusing(and hence the outline) when clicked using mouse
  }}
/>);

AvatarImage.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  toggleLoader: PropTypes.func,
  loading: PropTypes.bool,
  showLoaderOnClick: PropTypes.bool,
  showMaskOnHover: PropTypes.bool,
  isActive: PropTypes.bool,
};

AvatarImage.defaultProps = {};

export default AvatarImage;
