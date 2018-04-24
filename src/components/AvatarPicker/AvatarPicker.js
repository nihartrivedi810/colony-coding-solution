import React from 'react';
import PropTypes from 'prop-types';
import _get from 'lodash/get';

import Overlay from '../Overlay';
import AvatarImage from '../AvatarImage';

import { updateAvatar } from '../../api/avatarApi';

import './avatarPicker.css';

class AvatarPicker extends React.Component {

  state = {
    selectedAvatarImage: this.props.selectedAvatarImage || _get(this.props.avatars, '0.src'),
  };

  onSelectAvatarImage = selectedAvatarImage => {
    updateAvatar(selectedAvatarImage).then(() => {
      this.setState({ selectedAvatarImage });
      document.body.click();
    });
  };

  renderOverlay = () => {
    return this.props.avatars.map(avatar => (<AvatarImage
      key={avatar.id}
      src={avatar.src}
      onClick={() => this.onSelectAvatarImage(avatar.src)}
      showLoaderOnClick
      showMaskOnHover
    />));
  };

  render() {
    return (<Overlay
      overlay={this.renderOverlay()}
    >
      <div className="avatar-image-overlay-wrapper">
        <AvatarImage
          src={this.state.selectedAvatarImage}
        />
      </div>
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
