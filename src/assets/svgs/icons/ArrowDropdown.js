import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

import { COLORS } from '../../../configs';

const SvgArrowDropdown = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path d="M0 6H24L12 18L0 6Z" fill={props.color} />
  </Svg>
);

SvgArrowDropdown.propTypes = {
  color: PropTypes.string,
};

SvgArrowDropdown.defaultProps = {
  color: COLORS.black,
};

export default SvgArrowDropdown;
