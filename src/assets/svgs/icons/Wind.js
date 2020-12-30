import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';
import { COLORS } from '../../../configs';

const SvgWind = (props) => (
  <Svg
    width="448"
    height="448"
    viewBox="0 0 448 448"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0)">
      <Path
        d="M384 112C348.703 112 320 140.711 320 176C320 184.836 327.156 192 336 192C344.844 192 352 184.836 352 176C352 158.351 366.359 144 384 144C401.641 144 416 158.351 416 176C416 193.649 401.641 208 384 208H17.2661C8.42211 208 1.26611 215.164 1.26611 224C1.26611 232.836 8.42211 240 17.2661 240H384C419.297 240 448 211.289 448 176C448 140.711 419.297 112 384 112Z"
        fill={props.color}
      />
      <Path
        d="M224 48C188.703 48 160 76.711 160 112C160 120.836 167.156 128 176 128C184.844 128 192 120.836 192 112C192 94.351 206.359 80 224 80C241.641 80 256 94.351 256 112C256 129.649 241.641 144 224 144H16C7.156 144 0 151.164 0 160C0 168.836 7.156 176 16 176H224C259.297 176 288 147.289 288 112C288 76.711 259.297 48 224 48Z"
        fill={props.color}
      />
      <Path
        d="M224 272H16C7.156 272 0 279.164 0 288C0 296.836 7.156 304 16 304H224C241.641 304 256 318.351 256 336C256 353.649 241.641 368 224 368C206.359 368 192 353.649 192 336C192 327.164 184.844 320 176 320C167.156 320 160 327.164 160 336C160 371.289 188.703 400 224 400C259.297 400 288 371.289 288 336C288 300.711 259.297 272 224 272Z"
        fill={props.color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="448" height="448" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

SvgWind.propTypes = {
  color: PropTypes.string,
};

SvgWind.defaultProps = {
  color: COLORS.black,
};

export default SvgWind;