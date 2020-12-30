//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import {
  FONT_LATO_BOLD,
  FONT_ROBOTO_MEDIUM,
  FONT_ROBOTO_REGULAR,
} from '../../configs/fonts';
import { widthByScreen } from '../../utils';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    padding: 16,
  },
  wrapHeader: {
    width: '100%',
    alignItems: 'center',
    paddingVertical: 30,
  },
  headerTitle: {
    ...FONT_LATO_BOLD,
    fontSize: 28,
    textAlign: 'center',
  },
  headerDesc: {
    ...FONT_ROBOTO_REGULAR,
    fontSize: 14,
    textAlign: 'center',
  },
  rnLogo: {
    width: 100,
    height: 100,
  },
  menuWrap: {
    borderRadius: 10,
  },
  menuConten: {
    width: (widthByScreen(100) - 73) / 2,
    height: (widthByScreen(100) - 73) / 2,
    borderRadius: 10,
    alignItems: 'center',
    justifyContent: 'center',
  },
  iconCircle: {
    width: widthByScreen(15),
    height: widthByScreen(15),
    borderRadius: widthByScreen(15) / 2,
    overflow: 'hidden',
    backgroundColor: COLORS.white,
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuTitle: {
    ...FONT_ROBOTO_MEDIUM,
    fontWeight: '500',
    fontSize: 16,
    color: COLORS.white,
    textAlign: 'center',
  },
});

export default styles;
