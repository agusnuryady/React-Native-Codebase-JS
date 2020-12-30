//package import
import React, { useEffect, useCallback } from 'react';
import { View, Text, Image, ScrollView, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';
import moment from 'moment';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

//local import
import styles from './styles';
import I18n from '../../i18n';
import { COLORS, IMAGES } from '../../configs';
import { getJadwal } from '../../database/redux-actions';
import { Button, Header } from '../../components';
import { ArrowLeftIcon } from '../../assets/svgs';

const Component = () => {
  //package value
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //state value
  const sholatState = useSelector((state) => state.sholat);
  let arr = [...Array(8).keys()];

  //native effect
  useEffect(() => {
    //function here
    if (sholatState.isFirst) {
      _getSchedule();
    }
  }, [_getSchedule, sholatState.isFirst]);

  //place your function in here
  const _getSchedule = useCallback(() => {
    const curentDate = moment().format('YYYY-MM-DD');
    dispatch(getJadwal('667', curentDate));
  }, [dispatch]);

  const _timeChecker = useCallback((before, after) => {
    if (
      moment().isBetween(
        moment(before, 'hh:mm').add(-1, 'minutes'),
        moment(after)
      )
    ) {
      return { color: COLORS.white };
    } else if (moment().isBefore(moment(before, 'hh:mm'))) {
      return { color: COLORS.black };
    } else {
      return { color: COLORS.gray };
    }
  }, []);

  //place your extension component here
  const _renderLoading = () => {
    return (
      <>
        <SkeletonPlaceholder>
          {arr.map(({ item, index }) => (
            <SkeletonPlaceholder.Item
              key={index + 1}
              width="100%"
              padding={16}
              flexDirection="row"
              alignItems="center"
              justifyContent="space-between"
            >
              <SkeletonPlaceholder.Item
                width={70}
                height={20}
                borderRadius={5}
              />
              <SkeletonPlaceholder.Item
                width={85}
                height={20}
                borderRadius={5}
              />
            </SkeletonPlaceholder.Item>
          ))}
        </SkeletonPlaceholder>
      </>
    );
  };

  return (
    <View style={styles.container}>
      <Header>
        <>
          <Button
            onPress={() => navigation.goBack()}
            customContainer={styles.backContainer}
            customWrap={styles.backWrap}
            color={COLORS.white}
          >
            <ArrowLeftIcon width="20" heigh="20" color={COLORS.black} />
          </Button>
          <Text style={styles.headerTitle}>{I18n.t('prayerSchedule')}</Text>
        </>
      </Header>
      <ScrollView
        refreshControl={
          <RefreshControl
            refreshing={sholatState.isLoading}
            onRefresh={() => {
              _getSchedule();
            }}
          />
        }
      >
        <View style={styles.wrapTop}>
          <View style={styles.containerTop}>
            <Text style={styles.topText}>
              {moment().format('DD MMMM YYYY')}
            </Text>
            <Text style={styles.topText}>Jakarta - Indonesia</Text>
          </View>
          <Image
            source={IMAGES.mosque}
            resizeMode="cover"
            style={styles.imageTop}
          />
        </View>
        <View style={styles.wrapList}>
          {sholatState.isLoading ? (
            _renderLoading()
          ) : (
            <>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(sholatState.data.imsak, 'hh:mm').add(-1, 'minutes'),
                    moment(sholatState.data.subuh, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.imsak,
                      moment(sholatState.data.subuh, 'hh:mm')
                    ),
                  ]}
                >
                  Imsak
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.imsak,
                      moment(sholatState.data.subuh, 'hh:mm')
                    ),
                  ]}
                >
                  {sholatState.data.imsak} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(sholatState.data.subuh, 'hh:mm').add(-1, 'minutes'),
                    moment(sholatState.data.terbit, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.subuh,
                      moment(sholatState.data.terbit, 'hh:mm')
                    ),
                  ]}
                >
                  Subuh
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.subuh,
                      moment(sholatState.data.terbit, 'hh:mm')
                    ),
                  ]}
                >
                  {sholatState.data.subuh} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(sholatState.data.terbit, 'hh:mm').add(-1, 'minutes'),
                    moment(sholatState.data.dhuha, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.terbit,
                      moment(sholatState.data.dhuha, 'hh:mm')
                    ),
                  ]}
                >
                  Terbit
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.terbit,
                      moment(sholatState.data.dhuha, 'hh:mm')
                    ),
                  ]}
                >
                  {sholatState.data.terbit} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(sholatState.data.dhuha, 'hh:mm').add(-1, 'minutes'),
                    moment(sholatState.data.dzuhur, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.dhuha,
                      moment(sholatState.data.dzuhur, 'hh:mm')
                    ),
                  ]}
                >
                  Dhuha
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.dhuha,
                      moment(sholatState.data.dzuhur, 'hh:mm')
                    ),
                  ]}
                >
                  {sholatState.data.dhuha} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(sholatState.data.dzuhur, 'hh:mm').add(-1, 'minutes'),
                    moment(sholatState.data.ashar, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.dzuhur,
                      moment(sholatState.data.ashar, 'hh:mm')
                    ),
                  ]}
                >
                  Dzuhur
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.dzuhur,
                      moment(sholatState.data.ashar, 'hh:mm')
                    ),
                  ]}
                >
                  {sholatState.data.dzuhur} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(sholatState.data.ashar, 'hh:mm').add(-1, 'minutes'),
                    moment(sholatState.data.maghrib, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.ashar,
                      moment(sholatState.data.maghrib, 'hh:mm')
                    ),
                  ]}
                >
                  Ashar
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.ashar,
                      moment(sholatState.data.maghrib, 'hh:mm')
                    ),
                  ]}
                >
                  {sholatState.data.ashar} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(sholatState.data.maghrib, 'hh:mm').add(
                      -1,
                      'minutes'
                    ),
                    moment(sholatState.data.isya, 'hh:mm')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.maghrib,
                      moment(sholatState.data.isya, 'hh:mm')
                    ),
                  ]}
                >
                  Maghrib
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.maghrib,
                      moment(sholatState.data.isya, 'hh:mm')
                    ),
                  ]}
                >
                  {sholatState.data.maghrib} AM
                </Text>
              </View>
              <View
                style={[
                  styles.listItem,
                  moment().isBetween(
                    moment(sholatState.data.isya, 'hh:mm').add(-1, 'minutes'),
                    moment(sholatState.data.subuh, 'hh:mm').add(1, 'days')
                  ) && styles.listActive,
                ]}
              >
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.isya,
                      moment(sholatState.data.subuh, 'hh:mm').add(1, 'days')
                    ),
                  ]}
                >
                  Isya
                </Text>
                <Text
                  style={[
                    styles.headerTitle,
                    _timeChecker(
                      sholatState.data.isya,
                      moment(sholatState.data.subuh, 'hh:mm').add(1, 'days')
                    ),
                  ]}
                >
                  {sholatState.data.isya} AM
                </Text>
              </View>
            </>
          )}
        </View>
      </ScrollView>
    </View>
  );
};

export default Component;
