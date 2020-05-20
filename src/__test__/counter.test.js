import React from 'react';
import { shallow, mount } from 'enzyme';
import render from 'react-test-render';
import Counter from '../counter/counter.js';

describe('Counter renders', () => {
  const wrapper = shallow(<Counter />);

  it('Counter renders', () => {
    expect(wrapper.find('#currentTally').exists()).toEqual(true);
    expect(wrapper.find('#counterWrap').exists()).toEqual(true);
    expect(wrapper.find('#buttonWrap').exists()).toEqual(true);
    expect(wrapper.find('#downButton').exists()).toEqual(true);
    expect(wrapper.find('#upButton').exists()).toEqual(true);
  })
});