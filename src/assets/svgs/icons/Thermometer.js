import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { COLORS } from '../../../configs';

const SvgThermometer = (props) => (
  <Svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M341.333 288.593V85.333C341.333 38.205 303.128 0 256 0C208.872 0 170.667 38.205 170.667 85.333V288.592C144.48 312.03 128 346.091 128 384C128 454.693 185.308 512 256 512C326.692 512 384 454.693 384 384C384 346.091 367.52 312.03 341.333 288.593ZM256 469.333C208.872 469.333 170.667 431.128 170.667 384C170.667 359.363 181.108 336.508 199.122 320.385L213.334 307.665V85.333C213.334 61.769 232.437 42.666 256.001 42.666C279.565 42.666 298.668 61.768 298.668 85.333V307.665L312.88 320.385C330.894 336.508 341.335 359.362 341.335 384C341.333 431.128 303.128 469.333 256 469.333Z"
      fill={props.color}
    />
    <Path
      d="M277.334 170.667H234.667V426.667H277.334V170.667Z"
      fill={props.color}
    />
    <Path
      d="M256 448C291.346 448 320 419.346 320 384C320 348.654 291.346 320 256 320C220.654 320 192 348.654 192 384C192 419.346 220.654 448 256 448Z"
      fill={props.color}
    />
  </Svg>
);

SvgThermometer.propTypes = {
  color: PropTypes.string,
};

SvgThermometer.defaultProps = {
  color: COLORS.black,
};

export default SvgThermometer;