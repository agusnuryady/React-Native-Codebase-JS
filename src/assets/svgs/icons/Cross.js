import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

import { COLORS } from '../../../configs';

const SvgCross = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M24 2.41611L14.4161 12L24 21.5839L21.5839 24L12 14.4161L2.41611 24L0 21.5839L9.58389 12L0 2.41611L2.41611 0L12 9.58389L21.5839 0L24 2.41611Z"
      fill={props.color}
    />
  </Svg>
);

SvgCross.propTypes = {
  color: PropTypes.string,
};

SvgCross.defaultProps = {
  color: COLORS.black,
};

export default SvgCross;
