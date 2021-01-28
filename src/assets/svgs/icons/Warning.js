import React from 'react';
import Svg, { Path } from 'react-native-svg';
import PropTypes from 'prop-types';

import { COLORS } from '../../../configs';

const SvgWarning = (props) => (
  <Svg
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M23.5722 18.2401L14.5723 2.52643C14.309 2.06168 13.9331 1.67634 13.4819 1.4086C13.0306 1.14085 12.5197 1 11.9998 1C11.4799 1 10.969 1.14085 10.5177 1.4086C10.0665 1.67634 9.69061 2.06168 9.42731 2.52643L0.42736 18.2401C0.154268 18.7179 0.00698607 19.2618 0.000242467 19.8171C-0.00650114 20.3725 0.12753 20.92 0.388932 21.4049C0.648106 21.8874 1.02672 22.2896 1.48575 22.57C1.94479 22.8504 2.46764 22.9988 3.00043 23H21.0003C21.5329 22.9988 22.0556 22.8504 22.5144 22.57C22.9733 22.2896 23.3516 21.8874 23.6105 21.4049C23.8722 20.9201 24.0065 20.3726 23.9998 19.8172C23.993 19.2617 23.8456 18.7178 23.5722 18.2401V18.2401ZM3.00043 19.858L12.0005 4.14314L21.0003 19.858H3.00043ZM12.0005 15.1425C11.6999 15.1391 11.4051 15.2283 11.1535 15.3989C10.9019 15.5695 10.705 15.8138 10.5876 16.1007C10.4703 16.3876 10.4379 16.7041 10.4945 17.0102C10.5511 17.3162 10.6942 17.5979 10.9056 17.8195C11.117 18.041 11.3872 18.1924 11.6818 18.2544C11.9764 18.3164 12.2821 18.2863 12.5601 18.1677C12.8382 18.0492 13.0759 17.8477 13.2432 17.5888C13.4105 17.3299 13.4998 17.0252 13.4997 16.7136C13.5016 16.2993 13.3448 15.9011 13.0637 15.6065C12.7826 15.3119 12.4002 15.145 12.0005 15.1425V15.1425ZM10.4999 10.4284V12.0006C10.4979 12.2061 10.5352 12.41 10.6097 12.6005C10.6842 12.791 10.7943 12.9642 10.9338 13.1103C11.0733 13.2564 11.2393 13.3723 11.4223 13.4514C11.6052 13.5306 11.8015 13.5713 11.9998 13.5713C12.198 13.5713 12.3943 13.5306 12.5773 13.4514C12.7603 13.3723 12.9263 13.2564 13.0658 13.1103C13.2053 12.9642 13.3154 12.791 13.3899 12.6005C13.4644 12.41 13.5017 12.2061 13.4997 12.0006V10.4284C13.5018 10.2228 13.4646 10.0188 13.3902 9.82819C13.3158 9.63758 13.2057 9.46417 13.0662 9.31798C12.9267 9.17179 12.7606 9.05574 12.5776 8.97653C12.3945 8.89733 12.1981 8.85655 11.9998 8.85655C11.8014 8.85655 11.6051 8.89733 11.422 8.97653C11.239 9.05574 11.0729 9.17179 10.9334 9.31798C10.7939 9.46417 10.6838 9.63758 10.6094 9.82819C10.535 10.0188 10.4978 10.2228 10.4999 10.4284V10.4284Z"
      fill={props.color}
    />
  </Svg>
);

SvgWarning.propTypes = {
  color: PropTypes.string,
};

SvgWarning.defaultProps = {
  color: COLORS.black,
};

export default SvgWarning;
