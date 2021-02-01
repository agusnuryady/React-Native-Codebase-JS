//package import
import React, { useCallback } from 'react';
import { SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//local import
import styles from './styles';
import I18n from '../../i18n';
import { COLORS } from '../../configs';
import { chooseLanguage } from '../../database/redux-actions';

const Component = () => {
  //package value
  const dispatch = useDispatch();

  //state value
  const persistState = useSelector((state) => state.persist);
  const _handleClick = useCallback(
    (value) => {
      dispatch(chooseLanguage(value));
    },
    [dispatch]
  );

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{I18n.t('selectLanguage')}</Text>
      <View style={styles.content}>
        <TouchableHighlight
          style={[styles.button, styles.border]}
          underlayColor={COLORS.black40}
          disabled={persistState.language === 'en'}
          onPress={() => _handleClick('en')}
        >
          <>
            <Text style={styles.text}>English</Text>
            {persistState.language === 'en' ? (
              <View style={styles.wrapIcon}>
                <Text>{I18n.t('selected')}</Text>
              </View>
            ) : null}
          </>
        </TouchableHighlight>
        <TouchableHighlight
          style={styles.button}
          underlayColor={COLORS.black40}
          disabled={persistState.language === 'id'}
          onPress={() => _handleClick('id')}
        >
          <>
            <Text style={styles.text}>Bahasa Indonesia</Text>
            {persistState.language === 'id' && (
              <View style={styles.wrapIcon}>
                <Text>{I18n.t('selected')}</Text>
              </View>
            )}
          </>
        </TouchableHighlight>
      </View>
    </SafeAreaView>
  );
};

export default Component;
