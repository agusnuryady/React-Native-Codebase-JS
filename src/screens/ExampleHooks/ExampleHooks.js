//package import
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

//local import
import styles from './styles';
import I18n from '../../i18n';
import { Alert, Button, Card, Input } from '../../components';
import { COLORS, IMAGES, ENDPOINT } from '../../configs';
import { widthByScreen, heightByScreen, isEmpty } from '../../utils';

const Component = () => {
  //package value
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //state value
  const [onLoading, setonLoading] = useState(false);
  const { persistState, todoState } = useSelector(
    (state) => ({
      persistState: state.persist,
      todoState: state.todo,
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
