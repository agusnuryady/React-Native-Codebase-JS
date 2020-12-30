import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

import { COLORS } from '../../../configs';

const SvgTrash = (props) => (
  <Svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M428.332 135.275L417.165 101.809C414.917 95.073 408.613 90.531 401.512 90.531H110.488C103.387 90.531 97.0831 95.074 94.8351 101.809L83.6681 135.275C81.1381 142.857 86.7811 150.689 94.7741 150.689H417.225C425.219 150.689 430.862 142.857 428.332 135.275Z"
      fill={props.color}
    />
    <Path
      d="M135.615 491.767C136.895 503.286 146.631 512 158.221 512H351.939C363.529 512 373.265 503.285 374.545 491.767L409.11 180.69H101.05L135.615 491.767Z"
      fill={props.color}
    />
    <Path
      d="M225.89 42.998C225.89 35.831 231.721 30 238.888 30H283.077C290.244 30 296.075 35.831 296.075 42.998V60.531H326.075V42.998C326.075 19.289 306.786 0 283.077 0H238.888C215.179 0 195.89 19.289 195.89 42.998V60.531H225.89V42.998Z"
      fill={props.color}
    />
  </Svg>
);

SvgTrash.propTypes = {
  color: PropTypes.string,
};

SvgTrash.defaultProps = {
  color: COLORS.black,
};

export default SvgTrash;
