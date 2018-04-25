import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

import Overlay from '../Overlay';
import AvatarImage from '../AvatarImage';

import { updateAvatar } from '../../api/avatarApi';

import withAnimatedBorder from '../../higherOrderComponents/withAnimatedBorder';

import './avatarPicker.css';

const SelectedAvatarImage = withAnimatedBorder({
  borderWidth: 1,
  activeBorderColor: 'rgb(155, 160, 163)',
  showLoader: false,
  innerImageHeight: 60,
  innerImageWidth: 60,
})(AvatarImage);

const AvatarListItem = withAnimatedBorder({
  borderWidth: 3,
  hoverBorderColor: 'rgb(155, 160, 163)',
  activeBorderColor: 'rgb(122, 161, 178)',
  showLoader: true,
  innerImageHeight: 60,
  innerImageWidth: 60,
})(AvatarImage);

class AvatarPicker extends React.Component {

  state = {
    selectedAvatarImage: this.props.selectedAvatarImage || _get(this.props.avatars, '0.src'),
    overlayOpen: false,
  };

  onSelectAvatarImage = selectedAvatarImage => {
    updateAvatar(selectedAvatarImage).then(() => {
      this.setState({ selectedAvatarImage, overlayOpen: false });
    });
  };

  toggleOverlay = () => {
    this.setState({ overlayOpen: !this.state.overlayOpen });
  };

  renderOverlay = () => {
    return this.props.avatars.map(avatar => (<AvatarListItem
      key={avatar.id}
      src={avatar.src}
      onClick={() => this.onSelectAvatarImage(avatar.src)}
      isActive={avatar.src === this.state.selectedAvatarImage}
      showLoaderOnClick
      showMaskOnHover
    />));
  };

  render() {
    return (<Overlay
      show={this.state.overlayOpen}
      overlay={this.renderOverlay()}
      onHide={this.toggleOverlay}
    >
      <SelectedAvatarImage
        isActive={this.state.overlayOpen}
        onClick={this.toggleOverlay}
        src={this.state.selectedAvatarImage}
      />
    </Overlay>);
  }
}

AvatarPicker.propTypes = {
  avatars: PropTypes.arrayOf(PropTypes.shape({
    src: PropTypes.string,
    label: PropTypes.string,
    id: PropTypes.string,
  })),
  selectedAvatarImage: PropTypes.string,
};

AvatarPicker.defaultProps = {
  avatars: [],
};

export default AvatarPicker;
