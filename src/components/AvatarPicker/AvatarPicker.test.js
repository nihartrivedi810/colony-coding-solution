import { shallow, mount } from 'enzyme';
import React from 'react';

import AvatarPicker from './AvatarPicker';

const avatars = [
  { "src": "/avatars/avatar1.png", "label": "Avatar 1", "id": 1 },
  { "src": "/avatars/avatar2.png", "label": "Avatar 2", "id": 2 },
  { "src": "/avatars/avatar3.png", "label": "Avatar 3", "id": 3 },
  { "src": "/avatars/avatar4.png", "label": "Avatar 4", "id": 4 },
  { "src": "/avatars/avatar5.png", "label": "Avatar 5", "id": 5 },
  { "src": "/avatars/avatar6.png", "label": "Avatar 6", "id": 6 }
];
const selectedAvatarImage = "/avatars/avatar1.png";

describe('AvatarPicker', () => {
  it('should set selectedAvatarImage in state if provided in props', () => {
    const wrapper = shallow(<AvatarPicker
      avatars={avatars}
      selectedAvatarImage={selectedAvatarImage}
    />);

    expect(wrapper.instance().state.selectedAvatarImage).toBe(selectedAvatarImage);
  });

  it('should set selectedAvatarImage in state as the first avatar of avatars provided in props if selectedAvatarImage is not passed', () => {
    const wrapper = shallow(<AvatarPicker
      avatars={avatars}
    />);

    expect(wrapper.instance().state.selectedAvatarImage).toBe(avatars[0].src);
  });

  it('should set overlayOpen in state to true if avatar-image is clicked', () => {
    const wrapper = mount(<AvatarPicker
      avatars={avatars}
    />);
    wrapper.find('.avatar-image').simulate('click');
    expect(wrapper.instance().state.overlayOpen).toBe(true);
  });
});
