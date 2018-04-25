import { shallow } from 'enzyme';
import React from 'react';

import AvatarImage from './AvatarImage';

describe('AvatarImage', () => {
  it('should call props.onClick when clicked on image', () => {
    const onClick = jest.fn();
    const wrapper = shallow(<AvatarImage onClick={onClick} />);
    wrapper.find('img').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should apply props.className correctly on img tag', () => {
    const wrapper = shallow(<AvatarImage className="avatar-image-test" />);
    expect(wrapper.find('img.avatar-image-test')).toHaveLength(1);
  })
});
