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
  },
  content: {
    flex: 1,
    padding: 16,
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
  bigText: {
    ...FONT_LATO_BOLD,
    fontSize: 28,
  },
  wrapCard: {
    backgroundColor: COLORS.white,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
    marginVertical: 16,
    padding: 16,
    borderRadius: 10,
  },
  smallText: {
    ...FONT_ROBOTO_REGULAR,
    fontSize: 12,
    color: COLORS.gray,
  },
  title: {
    ...FONT_LATO_BOLD,
    fontSize: 18,
  },
  wrapIndicator: {
    width: '100%',
    height: 6,
    borderRadius: 5,
    backgroundColor: COLORS.zircon,
    overflow: 'hidden',
  },
  indicator: {
    width: '0%',
    height: 6,
    backgroundColor: COLORS.moonYellow,
  },
  wrapItem: {
    backgroundColor: COLORS.white,
    borderRadius: 10,
    padding: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 4,
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  itemText: {
    ...FONT_ROBOTO_MEDIUM,
    fontSize: 16,
    flex: 1,
  },
  wrapCheck: { borderRadius: 25 / 2 },
  containerCheck: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  borderCheck: { borderWidth: 3, borderColor: COLORS.moonYellow },
  menuCheck: {
    width: 25,
    height: 25,
    borderRadius: 25 / 2,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapSave: { borderRadius: 60 / 2 },
  containerSave: {
    width: 60,
    height: 60,
    borderRadius: 60 / 2,
    padding: 0,
    alignItems: 'center',
    justifyContent: 'center',
  },
  wrapBottom: {
    position: 'absolute',
    right: 16,
    bottom: 16,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  wrapInput: {
    backgroundColor: COLORS.white,
    flex: 1,
    height: 60,
    borderRadius: 60 / 2,
    marginRight: 16,
    justifyContent: 'center',
    paddingHorizontal: 16,
    shadowColor: COLORS.black,
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  textInput: {
    ...FONT_ROBOTO_REGULAR,
    fontSize: 16,
  },
  emptyList: {
    alignItems: 'center',
    justifyContent: 'center',
    height: '100%',
  },
  wrapEmptyData: {
    alignItems: 'center',
  },
});

export default styles;
