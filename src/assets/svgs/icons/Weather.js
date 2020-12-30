import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';
import { COLORS } from '../../../configs';

const SvgWeather = (props) => (
  <Svg
    width="297"
    height="297"
    viewBox="0 0 297 297"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M174.64 128.312C174.64 100.294 151.868 76.69 123.85 76.69C100.166 76.69 79.299 93.461 74.232 116.566C73.648 119.228 71.686 121.375 69.089 122.198C53.976 126.982 43.822 140.853 43.822 156.717C43.822 160.925 40.412 164.335 36.204 164.335C16.241 164.335 0 180.576 0 200.54C0 220.502 16.241 236.744 36.204 236.744H196.887C224.905 236.744 247.699 213.95 247.699 185.932C247.699 157.915 224.905 135.121 196.887 135.121C192.568 135.121 188.278 135.663 184.14 136.733C181.822 137.333 179.351 136.806 177.476 135.308C175.603 133.81 174.567 130.709 174.64 128.312Z"
      fill={props.color}
    />
    <Path
      d="M255.317 93.123C251.109 93.123 247.699 89.713 247.699 85.505C247.699 71.582 236.373 60.256 222.45 60.256C213.368 60.256 204.942 65.179 200.46 73.104C198.936 75.798 195.93 77.303 192.86 76.91C191.708 76.762 190.637 76.69 189.583 76.69C183.114 76.69 177.212 79.143 172.741 83.159C181.869 93.215 187.956 106.08 189.506 120.293C191.951 120.021 194.415 119.884 196.886 119.884C229.9 119.884 257.334 144.231 262.175 175.913C281.907 172.632 297 155.452 297 134.806C297 111.822 278.301 93.123 255.317 93.123Z"
      fill={props.color}
    />
  </Svg>
);

SvgWeather.propTypes = {
  color: PropTypes.string,
};

SvgWeather.defaultProps = {
  color: COLORS.black,
};

export default SvgWeather;