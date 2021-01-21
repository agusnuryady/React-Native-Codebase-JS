import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import Component from '..';

describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<Component />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
