import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';

import { COLORS } from '../../../configs';

const SvgChevronUp = (props) => (
  <Svg
    width="285"
    height="285"
    viewBox="0 0 285 285"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0)">
      <Path
        d="M282.082 195.285L149.028 62.24C147.127 60.337 144.94 59.384 142.466 59.384C139.992 59.384 137.801 60.337 135.899 62.24L2.856 195.285C0.95 197.191 0 199.378 0 201.853C0 204.327 0.953 206.517 2.856 208.419L17.128 222.69C19.031 224.593 21.221 225.544 23.695 225.544C26.169 225.544 28.359 224.593 30.262 222.69L142.466 110.488L254.674 222.697C256.576 224.6 258.767 225.545 261.237 225.545C263.715 225.545 265.905 224.594 267.807 222.697L282.081 208.42C283.983 206.518 284.928 204.327 284.928 201.854C284.929 199.378 283.984 197.188 282.082 195.285Z"
        fill={props.color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="284.929" height="284.929" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

SvgChevronUp.propTypes = {
  color: PropTypes.string,
};

SvgChevronUp.defaultProps = {
  color: COLORS.black,
};

export default SvgChevronUp;
