//package import
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

//local import
import styles from './styles';
import I18n from '../../i18n';
import { COLORS, IMAGES, ENDPOINT } from '../../configs';
import { widthByScreen, heightByScreen, isEmpty } from '../../utils';
import { getLocationByAddress, getLocationByCoordinate } from '../../apis';

const Component = () => {
  //package value
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //state value
  const [onLoading, setonLoading] = useState(false);
  const { authState, favoriteState } = useSelector(
    (state) => ({
      authState: state.auth,
      favoriteState: state.favorite,
    }),
    shallowEqual
  );

  //variable value

  //native effect
  useEffect(() => {
    //function here
  }, []);

  //place your function in here

  //place your extension component here

  return (
    <View style={styles.container}>
      <Text>Hook Screen Example</Text>
    </View>
  );
};

export default Component;
