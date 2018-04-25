import { mount } from 'enzyme';
import React from 'react';

import withAnimatedBorder from './withAnimatedBorder';

const DummyComp = withAnimatedBorder({
  borderWidth: 3,
  hoverBorderColor: 'rgb(155, 160, 163)',
  activeBorderColor: 'rgb(122, 161, 178)',
  showLoader: true,
  innerImageHeight: 60,
  innerImageWidth: 60,
})(props => <div className="dummy-comp" onClick={props.onClick}>Test</div>);

describe('withAnimatedBorder', () => {
  it('should call props.onClick when clicked', () => {
    const onClick = jest.fn();
    const wrapper = mount(<DummyComp onClick={onClick} />);
    wrapper.find('.dummy-comp').simulate('click');
    expect(onClick).toHaveBeenCalled();
  });

  it('should have animated-loader--loading class when clicked and showLoaderOnClick is true', () => {
    const onClick = jest.fn();
    const wrapper = mount(<DummyComp showLoaderOnClick onClick={onClick} />);
    wrapper.find('.dummy-comp').simulate('click');
    expect(wrapper.find('.animated-loader--loading')).toHaveLength(1);
  });

  it('should not have animated-loader--loading class when clicked and showLoaderOnClick is false', () => {
    const onClick = jest.fn();
    const wrapper = mount(<DummyComp showLoaderOnClick={false} onClick={onClick} />);
    wrapper.find('.dummy-comp').simulate('click');
    expect(wrapper.find('.animated-loader--loading')).toHaveLength(0);
  });

  it('should have animated-loader--active class when it is active', () => {
    const wrapper = mount(<DummyComp isActive />);
    expect(wrapper.find('.animated-loader--active')).toHaveLength(1);
  });
});
