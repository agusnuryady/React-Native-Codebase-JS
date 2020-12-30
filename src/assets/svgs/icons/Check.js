import React from 'react';
import Svg, { Path, G, Defs, ClipPath, Rect } from 'react-native-svg';

const SvgCheck = (props) => (
  <Svg
    width="512"
    height="512"
    viewBox="0 0 512 512"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0)">
      <Path
        d="M256.001 512.001C397.34 512.001 511.918 397.386 511.918 256.001C511.918 114.615 397.34 0 256.001 0C114.661 0 0.0830078 114.615 0.0830078 256.001C0.0830078 397.386 114.661 512.001 256.001 512.001Z"
        fill="#A4AEAF"
      />
      <Path
        d="M87.9277 261.871L207.994 381.1C213.23 386.3 221.721 386.3 226.958 381.1L424.073 185.36C429.309 180.16 429.309 171.728 424.073 166.528L388.194 130.9C382.958 125.7 374.467 125.7 369.231 130.9L225.861 273.268C220.624 278.468 212.133 278.468 206.897 273.268L142.648 209.467C137.515 204.37 129.228 204.254 123.953 209.207L88.1967 242.778C82.7086 247.932 82.5868 256.567 87.9277 261.871V261.871Z"
        fill="#FFF"
      />
    </G>
    <Defs>
      <ClipPath id="clip0">
        <Rect width="512" height="512" fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);

export default SvgCheck;
