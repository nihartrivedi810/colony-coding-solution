import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStateHandlers } from 'recompose';
import _ from 'lodash';

import './avatarImage.css';

const AvatarImage = props => (
  <div className={cx('avatar-image-container', { 'avatar-image-container--no-loader': !props.loading, 'avatar-image-container--mask': props.showMaskOnHover })}>
    {props.loading && <div className="loader" />}
    <img
      className={cx('avatar-image', props.className)}
      src={props.src}
      onClick={props.onClick}
    />
  </div>);

AvatarImage.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
  toggleLoader: PropTypes.func,
  loading: PropTypes.bool,
  showLoaderOnClick: PropTypes.bool,
  showMaskOnHover: PropTypes.bool,
};

AvatarImage.defaultProps = {};

export default withStateHandlers(
  () => ({ loading: false }),
  {
    onClick: ({ loading }, { showLoaderOnClick, onClick }) => () => {
      _.isFunction(onClick) && onClick();
      return { loading: showLoaderOnClick };
    }
  }
)(AvatarImage);
