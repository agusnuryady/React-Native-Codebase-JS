//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import {
  FONT_LATO_BOLD,
  FONT_ROBOTO_MEDIUM,
  FONT_ROBOTO_REGULAR,
} from '../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
  },
  backWrap: {
    position: 'absolute',
    left: 0,
    borderRadius: 20,
    marginLeft: 4,
  },
  backContainer: {
    width: 40,
    height: 40,
  },
  headerTitle: {
    ...FONT_LATO_BOLD,
    fontSize: 18,
  },
  content: {
    padding: 16,
  },
  textTitle: {
    ...FONT_LATO_BOLD,
    fontSize: 18,
    color: COLORS.black90,
  },
  mtextDesc: {
    ...FONT_ROBOTO_REGULAR,
    fontSize: 14,
    color: COLORS.black90,
  },
  textBlur: {
    ...FONT_ROBOTO_REGULAR,
    fontSize: 14,
    color: COLORS.black70,
  },
  textLink: {
    ...FONT_ROBOTO_REGULAR,
    fontSize: 14,
    color: COLORS.primaryBlue,
  },
  wrapCenter: {
    width: '100%',
    alignItems: 'center',
  },
  wrapButton: {
    width: '48%',
  },
  row: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
  },
  rowButton: {
    width: '100%',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  textButton: {
    ...FONT_ROBOTO_MEDIUM,
    fontSize: 14,
    color: COLORS.white,
  },
});

export default styles;
