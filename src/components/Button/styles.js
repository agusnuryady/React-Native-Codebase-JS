//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_YATRA_REG_12 } from '../../configs/fonts';

//variable valu
const container = {
  alignItems: 'center',
  borderRadius: 5,
  justifyContent: 'center',
  padding: 12,
};

export default StyleSheet.create({
  button: {
    lineHeight: 48,
  },
  container: {
    ...container,
    backgroundColor: COLORS.green,
  },
  containerDisabled: {
    ...container,
    backgroundColor: COLORS.gray,
  },
  containerFlat: {
    ...container,
    backgroundColor: 'transparent',
  },
  text: {
    ...FONT_YATRA_REG_12,
    color: COLORS.white,
  },
  wrapContainer: {
    overflow: 'hidden',
    width: null,
    borderRadius: 5,
  },
});
