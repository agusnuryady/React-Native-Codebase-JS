import { Dimensions } from 'react-native';

export const heightByScreen = (percent) =>
  (percent / 100) * Dimensions.get('window').height;

export const widthByScreen = (percent) =>
  (percent / 100) * Dimensions.get('window').width;

export function isEmpty(value) {
  return value === null ||
    value === undefined ||
    String(value).trim() === '' ||
    value.length <= 0
    ? true
    : false;
}
