import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import ScreenMessage from '..';

describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<ScreenMessage />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
