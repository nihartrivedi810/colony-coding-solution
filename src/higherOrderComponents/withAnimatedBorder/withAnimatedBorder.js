import React from 'react';
import PropTypes from 'prop-types';
import cx from 'classnames';
import { withStateHandlers } from 'recompose';
import _ from 'lodash';

import './borderStyles.css';

const getStyles = ({
                     borderWidth,
                     activeBorderColor,
                     hoverBorderColor = activeBorderColor,
                     loadingBorderColor,
                     innerImageHeight,
                     innerImageWidth,
                     isLoading,
                     isActive
                   }) => {

  const styles = {
    height: innerImageHeight + 2 * borderWidth,
    width: innerImageWidth + 2 * borderWidth,
    borderWidth,
    display: 'inline-block',
  };

  if (isActive) {
    styles.borderColor = activeBorderColor;
  } else if (!isLoading) {
    styles.borderColor = hoverBorderColor;
  }

  return styles;
};

const withAnimatedBorders = ({ borderWidth, activeBorderColor, hoverBorderColor = activeBorderColor, loadingBorderColor, innerImageHeight, innerImageWidth }) => ComposedComponent => {
  const WithAnimatedBorders = (props) => {
    const { isActive } = props;
    return (<div
      className="animated-loader-container"
    >
      <div
        className={cx('animated-loader', {
          'animated-loader--loading': props.isLoading,
          'animated-loader--active': props.isActive
        })}
        style={getStyles({
          borderWidth,
          activeBorderColor,
          hoverBorderColor,
          loadingBorderColor,
          innerImageHeight,
          innerImageWidth,
          isLoading: props.isLoading,
          isActive: props.isActive,
        })}
      />
      <div
        className="animated-loader__component-wrapper"
        style={{
          top: borderWidth,
          left: borderWidth,
          height: innerImageHeight,
          width: innerImageWidth,
        }}
      >
        <ComposedComponent
          {...props}
        />
      </div>
    </div>);
  };

  WithAnimatedBorders.propTypes = {
    isLoading: PropTypes.bool,
    isActive: PropTypes.bool,
    showLoaderOnClick: PropTypes.bool,
    onClick: PropTypes.func,
  };

  WithAnimatedBorders.defaultProps = {};

  return withStateHandlers(
    () => ({ isLoading: false }),
    {
      onClick: ({ loading }, { showLoaderOnClick, onClick }) => () => {
        _.isFunction(onClick) && onClick();
        return { isLoading: showLoaderOnClick };
      }
    })(WithAnimatedBorders);
};

export default withAnimatedBorders;