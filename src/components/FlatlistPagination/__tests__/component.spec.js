import 'react-native';
import React from 'react';
import renderer from 'react-test-renderer';
import FlatlistPagination from '..';

describe('Some component', () => {
  it('renders correctly', () => {
    const tree = renderer.create(<FlatlistPagination />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
