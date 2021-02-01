//package import
import React, { useEffect, useState, useCallback } from 'react';
import { View, Text, Image, FlatList, RefreshControl } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import moment from 'moment';
import SkeletonPlaceholder from 'react-native-skeleton-placeholder';

//local import
import styles from './styles';
import { IMAGES, STYLES } from '../../configs';
import { getWeather } from '../../apis';
import { Button, Header } from '../../components';
import { ArrowLeftIcon, ThermometerIcon, WindIcon } from '../../assets/svgs';

const Component = () => {
  //package value
  const navigation = useNavigation();

  //state value
  const [isLoading, setIsLoading] = useState(false);
  const [data, setData] = useState([]);

  //variable value

  //native effect
  useEffect(() => {
    //function here
    _getWeather();
  }, [_getWeather]);

  //place your function in here
  const _getWeather = useCallback(async () => {
    setIsLoading(true);
    try {
      let res = await getWeather();
      if (res.dataseries.length > 0) {
        setIsLoading(false);
        setData(res.dataseries);
      } else {
        setIsLoading(false);
      }
    } catch (error) {
      console.log('error', error);
      setIsLoading(false);
    }
  }, []);

  const _windSpeed = useCallback((val) => {
    switch (val) {
      case 1:
        return '0.3';
      case 2:
        return '0.3 - 3.4';
      case 3:
        return '3.4 - 8';
      case 4:
        return '8 - 10.8';
      case 5:
        return '10.8 - 17.2';
      case 6:
        return '17.2 - 24.5';
      case 7:
        return '24.5 - 32.6';
      case 8:
        return '+32.6';
    }
  }, []);

  const _weatherName = useCallback((val) => {
    switch (val) {
      case 'clear':
        return 'Clear';
      case 'pcloudy':
        return 'Cloudy';
      case 'mcloudy':
        return 'Cloudy';
      case 'cloudy':
        return 'Cloudy';
      case 'humid':
        return 'Foggy';
      case 'lightrain':
        return 'Rain';
      case 'oshower':
        return 'Rain';
      case 'ishower':
        return 'Rain';
      case 'rain':
        return 'Rain';
      case 'lightsnow':
        return 'Snow';
      case 'snow':
        return 'Snow';
      case 'rainsnow':
        return 'Snow';
      case 'ts':
        return 'Thunderstorm';
      case 'tsrain':
        return 'Thunderstorm';
      default:
        return 'Clear';
    }
  }, []);

  const _weatherColor = useCallback((val) => {
    switch (val) {
      case 'clear':
        return '#ECE3B2';
      case 'pcloudy':
        return '#B2DEEC';
      case 'mcloudy':
        return '#B2DEEC';
      case 'cloudy':
        return '#B2DEEC';
      case 'humid':
        return '#E5E5E5';
      case 'lightrain':
        return '#CACECF';
      case 'oshower':
        return '#CACECF';
      case 'ishower':
        return '#CACECF';
      case 'rain':
        return '#CACECF';
      case 'lightsnow':
        return '#FFF';
      case 'snow':
        return '#FFF';
      case 'rainsnow':
        return '#FFF';
      case 'ts':
        return '#383F41';
      case 'tsrain':
        return '#383F41';
      default:
        return '#ECE3B2';
    }
  }, []);

  const _weatherIcon = useCallback((val) => {
    switch (val) {
      case 'clear':
        return IMAGES.sunny;
      case 'pcloudy':
        return IMAGES.cloudy;
      case 'mcloudy':
        return IMAGES.cloudy;
      case 'cloudy':
        return IMAGES.cloudy;
      case 'humid':
        return IMAGES.foggy;
      case 'lightrain':
        return IMAGES.rain;
      case 'oshower':
        return IMAGES.rain;
      case 'ishower':
        return IMAGES.rain;
      case 'rain':
        return IMAGES.rain;
      case 'lightsnow':
        return IMAGES.snow;
      case 'snow':
        return IMAGES.snow;
      case 'rainsnow':
        return IMAGES.snow;
      case 'ts':
        return IMAGES.thunderstorm;
      case 'tsrain':
        return IMAGES.thunderstorm;
      default:
        return IMAGES.sunny;
    }
  }, []);

  //place your extension component here
  const _renderItemMenu = ({ item, index }) => {
    return (
      <View
        key={index + 1}
        style={[
          styles.wrapItem,
          { backgroundColor: _weatherColor(item.weather) },
        ]}
      >
        <View style={[styles.rightItem, STYLES.fx1]}>
          <Text style={styles.dayText}>
            {moment(item.date, 'YYYYMMDD').isSame(moment(), 'day')
              ? 'Today'
              : moment(item.date, 'YYYYMMDD').format('dddd')}
          </Text>
          <View style={STYLES.row}>
            <WindIcon width="20" height="20" />
            <Text style={[styles.infoText, STYLES.mrl4]}>
              {_windSpeed(item.wind10m_max)} m/s
            </Text>
          </View>
        </View>
        <View style={styles.centerItem}>
          <Image
            source={_weatherIcon(item.weather)}
            style={[styles.weatherIcon, STYLES.mrb12]}
            resizeMode="contain"
          />
          <Text style={styles.conditionText}>{_weatherName(item.weather)}</Text>
        </View>
        <View style={styles.leftItem}>
          <View style={STYLES.alItCenter}>
            <Text style={[styles.infoText, STYLES.mrb4]}>
              {item.temp2m.max}°C
            </Text>
            <ThermometerIcon width="30" height="30" />
            <Text style={[styles.infoText, STYLES.mrt4]}>
              {item.temp2m.min}°C
            </Text>
          </View>
        </View>
      </View>
    );
  };

  const _renderLoading = () => {
    return (
      <SkeletonPlaceholder>
        <SkeletonPlaceholder.Item width="100%" padding={16} flexDirection="row">
          <SkeletonPlaceholder.Item
            alignSelf="stretch"
            justifyContent="space-between"
            flex={1}
          >
            <SkeletonPlaceholder.Item width={90} height={18} borderRadius={5} />
            <SkeletonPlaceholder.Item width={60} height={15} borderRadius={5} />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item flex={1}>
            <SkeletonPlaceholder.Item
              width={100}
              height={100}
              borderRadius={50}
              marginBottom={10}
            />
            <SkeletonPlaceholder.Item
              width={100}
              height={20}
              borderRadius={5}
            />
          </SkeletonPlaceholder.Item>
          <SkeletonPlaceholder.Item
            alignItems="flex-end"
            justifyContent="center"
            flex={1}
          >
            <SkeletonPlaceholder.Item alignItems="center">
              <SkeletonPlaceholder.Item
                width={20}
                height={15}
                borderRadius={5}
                marginBottom={5}
              />
              <SkeletonPlaceholder.Item
                width={10}
                height={50}
                borderRadius={5}
                marginBottom={5}
              />
              <SkeletonPlaceholder.Item
                width={20}
                height={15}
                borderRadius={5}
              />
            </SkeletonPlaceholder.Item>
          </SkeletonPlaceholder.Item>
        </SkeletonPlaceholder.Item>
      </SkeletonPlaceholder>
    );
  };

  return (
    <View style={styles.container}>
      <Header>
        <Button
          types="nude"
          onPress={() => navigation.goBack()}
          styleContainer={styles.backContainer}
          styleWrap={styles.backWrap}
        >
          <ArrowLeftIcon width="20" heigh="20" />
        </Button>
        <Text style={styles.headerTitle}>Jakarta - Indonesia</Text>
      </Header>
      <FlatList
        data={isLoading ? new Array(4) : data}
        extraData={data}
        keyExtractor={(item, index) => index.toString()}
        renderItem={isLoading ? _renderLoading : _renderItemMenu}
        refreshControl={
          <RefreshControl
            refreshing={isLoading}
            onRefresh={() => {
              _getWeather();
            }}
          />
        }
      />
    </View>
  );
};

export default Component;
