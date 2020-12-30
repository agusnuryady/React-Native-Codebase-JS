//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_YATRA_REG_12 } from '../../configs/fonts';

export default StyleSheet.create({
  flex1: { flex: 1 },
  container: {
    padding: 16,
    elevation: 3,
    paddingHorizontal: 16,
    paddingBottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    position: 'absolute',
    top: 0,
    zIndex: 2,
  },
  action: {
    width: 15,
    height: 15,
  },
  text: {
    ...FONT_YATRA_REG_12,
    color: COLORS.white,
    textAlign: 'center',
  },
});
