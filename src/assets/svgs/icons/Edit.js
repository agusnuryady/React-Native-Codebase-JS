import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';
import PropTypes from 'prop-types';

import { COLORS } from '../../../configs';

const SvgEdit = (props) => (
  <Svg
    width="478"
    height="478"
    viewBox="0 0 478 478"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0)">
      <Path
        d="M392.533 238.937C383.107 238.937 375.466 246.578 375.466 256.004V426.67C375.466 436.096 367.825 443.737 358.399 443.737H51.2C41.774 443.737 34.133 436.096 34.133 426.67V85.337C34.133 75.911 41.774 68.27 51.2 68.27H256C265.426 68.27 273.067 60.629 273.067 51.203C273.067 41.777 265.426 34.137 256 34.137H51.2C22.923 34.137 0 57.06 0 85.337V426.67C0 454.947 22.923 477.87 51.2 477.87H358.4C386.677 477.87 409.6 454.947 409.6 426.67V256.003C409.6 246.578 401.959 238.937 392.533 238.937Z"
        fill={props.color}
      />
      <Path
        d="M458.742 19.1419C446.488 6.88593 429.867 0.00193212 412.536 0.00393212C395.195 -0.0460679 378.557 6.84993 366.337 19.1529L141.534 243.937C139.669 245.816 138.262 248.1 137.421 250.61L103.288 353.01C100.309 361.953 105.144 371.617 114.087 374.595C115.822 375.173 117.639 375.468 119.467 375.47C121.299 375.467 123.12 375.173 124.86 374.6L227.26 340.467C229.775 339.627 232.06 338.213 233.933 336.337L458.735 111.535C484.25 86.0229 484.253 44.6569 458.742 19.1419Z"
        fill={props.color}
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="477.873" height="477.873" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

SvgEdit.propTypes = {
  color: PropTypes.string,
};

SvgEdit.defaultProps = {
  color: COLORS.black,
};

export default SvgEdit;
