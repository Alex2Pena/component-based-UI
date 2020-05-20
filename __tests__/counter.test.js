import React from 'react';
import Enzyme, { shallow } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import Counter from '../counter/counter.js';

Enzyme.configure({ adapter: new Adapter() });

describe('Counter renders', () => {
  const wrapper = shallow(<Counter />);

  test('Counter renders', () => {
    expect(wrapper.find('#currentTally').exists()).toEqual(true);
    expect(wrapper.find('#counterWrap').exists()).toEqual(true);
    expect(wrapper.find('#buttonWrap').exists()).toEqual(true);
    expect(wrapper.find('#downButton').exists()).toEqual(true);
    expect(wrapper.find('#upButton').exists()).toEqual(true);
  })
});