//package import
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

//local import
import styles from './styles';
import I18n from '../../i18n';
import { Header, Button, Card } from '../../components';
import { COLORS, IMAGES, ENDPOINT } from '../../configs';
import { ArrowLeftIcon } from '../../assets/svgs';

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
      <Header>
        <Button
          onPress={() => navigation.goBack()}
          customContainer={styles.backContainer}
          customWrap={styles.backWrap}
          color={COLORS.white}
        >
          <ArrowLeftIcon width="20" heigh="20" />
        </Button>
        <Text style={styles.headerTitle}>Global Component</Text>
      </Header>
      <View style={styles.wrapComponent}>
        <Button title="Button Component" />
      </View>
      <View style={styles.wrapComponent}>
        <Card>
          <Text>Card Component</Text>
        </Card>
      </View>
    </View>
  );
};

export default Component;
