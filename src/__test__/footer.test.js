import React from 'react';
import { shallow, mount } from 'enzyme';
import renderer from 'react-test-renderer';
import Footer from '../footer/footer.js';

describe('Footer renders', () => {
  it('Footer renders', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper.find('footer').exists()).toEqual(true);
    expect(wrapper.find('footer').text()).toEqual('Click buttons above');
  });
});