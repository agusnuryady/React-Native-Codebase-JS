import { StyleSheet } from 'react-native';
import {
  FONT_LATO_BOLD,
  FONT_LATO_REGULAR,
  FONT_ROBOTO_MEDIUM,
  FONT_ROBOTO_REGULAR,
} from '../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
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
  wrapItem: {
    width: '100%',
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  rightItem: { justifyContent: 'space-between', alignSelf: 'stretch' },
  weatherIcon: { width: 100, height: 100 },
  dayText: {
    ...FONT_ROBOTO_MEDIUM,
    fontSize: 14,
  },
  infoText: {
    ...FONT_ROBOTO_REGULAR,
    fontSize: 12,
  },
  conditionText: {
    ...FONT_LATO_BOLD,
    fontSize: 16,
  },
  centerItem: {
    flex: 1,
    alignItems: 'center',
  },
  leftItem: {
    alignItems: 'flex-end',
    flex: 1,
  },
});

export default styles;
