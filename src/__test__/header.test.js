import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Header from '../header/header.js';

describe('Header renders', () => {
  it('Header renders', () => {
    const wrapper = shallow(<Header />);
    expect(wrapper.find('header').exists()).toEqual(true);
    expect(wrapper.find('header').text()).toEqual(' Counter App ');
  });
});