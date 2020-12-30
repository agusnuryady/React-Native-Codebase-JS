import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';

import { COLORS } from '../../../configs';

const SvgPlus = (props) => (
  <Svg
    width="427"
    height="427"
    viewBox="0 0 427 427"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0)">
      <Path
        d="M405.332 192H234.668V21.332C234.668 9.55859 225.109 0 213.332 0C201.559 0 192 9.55859 192 21.332V192H21.332C9.55859 192 0 201.559 0 213.332C0 225.109 9.55859 234.668 21.332 234.668H192V405.332C192 417.109 201.559 426.668 213.332 426.668C225.109 426.668 234.668 417.109 234.668 405.332V234.668H405.332C417.109 234.668 426.668 225.109 426.668 213.332C426.668 201.559 417.109 192 405.332 192V192Z"
        fill={props.color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="426.667" height="426.667" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

SvgPlus.propTypes = {
  color: PropTypes.string,
};

SvgPlus.defaultProps = {
  color: COLORS.black,
};

export default SvgPlus;
