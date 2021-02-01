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
      name: 'signIn',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.primaryBlue}
        />
      ),
      color: COLORS.primaryBlue,
      screen: 'Login',
      duration: 3300,
    },
    {
      name: 'register',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.lime50}
        />
      ),
      color: COLORS.lime50,
      screen: 'Register',
      duration: 3300,
    },
    {
      name: 'component',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.yellow60}
        />
      ),
      color: COLORS.yellow60,
      screen: 'Component',
      duration: 3300,
    },
    {
      name: 'weather',
      icon: (
        <WeatherIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.blue30}
        />
      ),
      color: COLORS.blue30,
      screen: 'Weather',
      duration: 3000,
    },
    {
      name: 'prayer',
      icon: (
        <MosqueIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.green40}
        />
      ),
      color: COLORS.green40,
      screen: 'Sholat',
      duration: 3100,
    },
    {
      name: 'todoList',
      icon: (
        <TodoIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.yellow50}
        />
      ),
      color: COLORS.yellow50,
      screen: 'Todo',
      duration: 3200,
    },
    {
      name: 'setting',
      icon: (
        <SettingIcon
          width={widthByScreen(9)}
          height={widthByScreen(9)}
          color={COLORS.black60}
        />
      ),
      color: COLORS.black60,
      screen: 'Setting',
      duration: 3300,
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
        styleBox={[STYLES.pd12]}
        color={item.color}
        types="button"
      >
        <FlipAnimated style={STYLES.mrb12} duration={item.duration}>
          <View style={[styles.iconCircle, STYLES.mrb12]}>{item.icon}</View>
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
          <SpinAnimated style={STYLES.mr12}>
            <Image
              source={IMAGES.rnLogo}
              style={[styles.rnLogo]}
              resizeMode="contain"
            />
          </SpinAnimated>
          <Text style={[styles.headerTitle, STYLES.mrb4]}>
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
