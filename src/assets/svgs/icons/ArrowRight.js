import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

import { COLORS } from '../../../configs';

const SvgArrowRight = (props) => (
  <Svg
    width="24"
    height="19"
    viewBox="0 0 24 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M1.78758 10.2551L20.3188 10.2551L13.578 16.7175C13.2769 17.0062 13.2769 17.4948 13.578 17.7835C13.8792 18.0722 14.3888 18.0722 14.6899 17.7835L22.7742 10.033C23.0753 9.74428 23.0753 9.25572 22.7742 8.96702L14.6899 1.21653C14.3888 0.927826 13.8792 0.927826 13.578 1.21653C13.2769 1.50523 13.2769 1.9938 13.578 2.28249L20.3188 8.76715L1.78758 8.76715C1.34746 8.76715 1 9.10026 1 9.52221C1 9.92195 1.34746 10.2551 1.78758 10.2551Z"
      fill={props.color}
      stroke={props.color}
    />
  </Svg>
);

SvgArrowRight.propTypes = {
  color: PropTypes.string,
};

SvgArrowRight.defaultProps = {
  color: COLORS.black,
};

export default SvgArrowRight;
