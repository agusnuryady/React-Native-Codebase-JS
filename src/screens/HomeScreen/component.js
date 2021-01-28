//package import
import React, { useEffect } from 'react';
import { View, Text, SafeAreaView, FlatList, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useSelector } from 'react-redux';

//local import
import styles from './styles';
import I18n from '../../i18n';
import { COLORS, IMAGES, STYLES } from '../../configs';
import { widthByScreen } from '../../utils';
import { Card } from '../../components';
import { FlipAnimated, SpinAnimated } from '../../animations';
import {
  MosqueIcon,
  SettingIcon,
  TodoIcon,
  WeatherIcon,
} from '../../assets/svgs';

const Component = () => {
  //package value
  const navigation = useNavigation();

  //state value
  const persistState = useSelector((state) => state.persist);

  //variable value
  const listMenu = [
    {
      name: 'login',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.blueViolet}
        />
      ),
      color: COLORS.blueViolet,
      screen: 'Login',
      duration: 3300,
    },
    {
      name: 'register',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.blueViolet}
        />
      ),
      color: COLORS.blueViolet,
      screen: 'Register',
      duration: 3300,
    },
    {
      name: 'gobalComponent',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.blueViolet}
        />
      ),
      color: COLORS.blueViolet,
      screen: 'GlobalComponent',
      duration: 3300,
    },
    {
      name: 'prayer',
      icon: (
        <MosqueIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.greenWorm}
        />
      ),
      color: COLORS.greenWorm,
      screen: 'Sholat',
      duration: 3100,
    },
    {
      name: 'todoList',
      icon: (
        <TodoIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.moonYellow}
        />
      ),
      color: COLORS.moonYellow,
      screen: 'Todo',
      duration: 3200,
    },
    {
      name: 'setting',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.blueViolet}
        />
      ),
      color: COLORS.blueViolet,
      screen: 'Setting',
      duration: 3300,
    },
    {
      name: 'weather',
      icon: (
        <WeatherIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.aqua}
        />
      ),
      color: COLORS.aqua,
      screen: 'Weather',
      duration: 3000,
    },
  ];

  //native effect
  useEffect(() => {}, [persistState.language]);

  //place your function in here

  //place your extension component here
  const _renderItemMenu = ({ item, index }) => {
    return (
      <Card
        onPress={() => navigation.navigate(item.screen)}
        styleContainer={styles.menuConten}
        styleWrap={styles.menuWrap}
        styleBox={[STYLES.pd10]}
        color={item.color}
      >
        <FlipAnimated style={STYLES.mb10} duration={item.duration}>
          <View style={[styles.iconCircle, STYLES.mb10]}>{item.icon}</View>
        </FlipAnimated>
        <Text numberOfLines={1} style={styles.menuTitle}>
          {I18n.t(item.name)}
        </Text>
      </Card>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.content}>
        <View style={styles.wrapHeader}>
          <Text style={styles.headerTitle}>{I18n.t('welcomeTo')}</Text>
          <SpinAnimated style={STYLES.mr10}>
            <Image
              source={IMAGES.rnLogo}
              style={[styles.rnLogo]}
              resizeMode="contain"
            />
          </SpinAnimated>
          <Text style={[styles.headerTitle, STYLES.mb5]}>
            React Native 0.63
          </Text>
          <Text style={styles.headerDesc}>
            {I18n.t('createdBy')} @agusnuryady
          </Text>
        </View>
        <FlatList
          data={listMenu}
          keyExtractor={(item, index) => index.toString()}
          numColumns={2}
          renderItem={_renderItemMenu}
        />
      </View>
    </SafeAreaView>
  );
};

export default Component;
