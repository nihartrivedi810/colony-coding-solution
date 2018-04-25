import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';

import './avatarImage.css';

const AvatarImage = props => (<img
  className={cx('avatar-image', props.className, {'avatar-image--mask': props.showMaskOnHover})}
  src={props.src}
  onClick={props.onClick}
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
