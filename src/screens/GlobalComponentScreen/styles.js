//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_LATO_BOLD } from '../../configs/fonts';

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
  wrapComponent: {
    width: '100%',
    padding: 16,
  },
});

export default styles;
