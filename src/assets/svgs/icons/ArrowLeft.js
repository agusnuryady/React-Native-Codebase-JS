import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

import { COLORS } from '../../../configs';

const SvgArrowleft = (props) => (
  <Svg
    width="25"
    height="19"
    viewBox="0 0 25 19"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M23.0258 8.52095H4.39599L9.96725 2.58828C10.3327 2.22517 10.3327 1.63639 9.96725 1.27233C9.60055 0.909224 9.00745 0.909224 8.64195 1.27233L1 9.47116L8.52467 17.7271C8.7079 17.9089 8.94725 18 9.18732 18C9.42667 18 9.66674 17.9089 9.84997 17.7271C10.2155 17.3633 10.2155 16.7752 9.84997 16.4114L4.3358 10.3816H23.0258C23.5426 10.3816 23.9625 9.96497 23.9625 9.45126C23.9625 8.93754 23.5426 8.52095 23.0258 8.52095Z"
      fill={props.color ? props.color : COLORS.black}
      stroke={props.color ? props.color : COLORS.black}
    />
  </Svg>
);

SvgArrowleft.propTypes = {
  color: PropTypes.string,
};

SvgArrowleft.defaultProps = {
  color: COLORS.black,
};

export default SvgArrowleft;
