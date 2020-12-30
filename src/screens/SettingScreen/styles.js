//package import
import { StyleSheet } from 'react-native';

//local import
import { COLORS } from '../../configs';
import { FONT_LATO_BOLD, FONT_LATO_REGULAR } from '../../configs/fonts';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    alignItems: 'center',
    padding: 16,
  },
  title: {
    ...FONT_LATO_BOLD,
    fontSize: 16,
    color: COLORS.black,
    marginBottom: 16,
  },
  content: {
    width: '80%',
    backgroundColor: COLORS.white,
    borderRadius: 10,
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.2,
    elevation: 3,
  },
  button: {
    paddingVertical: 20,
    width: '100%',
    alignItems: 'center',
  },
  border: {
    borderBottomColor: COLORS.black,
    borderBottomWidth: 0.5,
  },
  text: {
    ...FONT_LATO_REGULAR,
    fontSize: 16,
    color: COLORS.black,
  },
  wrapIcon: {
    position: 'absolute',
    right: 10,
    top: 20,
  },
});

export default styles;
