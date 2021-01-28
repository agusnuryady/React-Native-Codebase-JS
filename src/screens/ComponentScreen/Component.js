//package import
import React, { useCallback, useState } from 'react';
import { SafeAreaView, Text, TouchableHighlight, View } from 'react-native';
import { useDispatch, useSelector } from 'react-redux';

//local import
import styles from './styles';
import I18n from '../../i18n';
import { COLORS, IMAGES, STYLES } from '../../configs';
import { chooseLanguage } from '../../database/redux-actions';
import { Button, Alert as AlertPopUp } from '../../components';

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
  const [alertSuccess, setAlertSuccess] = useState(false);
  const [alertWarning, setAlertWarning] = useState(false);
  const [alertInformation, setAlertInformation] = useState(false);
  const [alertError, setAlertError] = useState(false);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.title}>{I18n.t('listComponent')}</Text>
      <View style={styles.content}>
        <AlertPopUp
          visible={alertSuccess}
          title={I18n.t('successAlert')}
          desc={I18n.t('successAlert')}
          types="success"
          duration={10000}
          close={() => {
            setAlertSuccess(false);
          }}
        />

        <AlertPopUp
          visible={alertWarning}
          title={I18n.t('warningAlert')}
          desc={I18n.t('warningAlert')}
          types="warning"
          duration={10000}
          close={() => {
            setAlertWarning(false);
          }}
        />

        <AlertPopUp
          visible={alertInformation}
          title={I18n.t('informationAlert')}
          desc={I18n.t('informationAlert')}
          types="information"
          duration={10000}
          close={() => {
            setAlertInformation(false);
          }}
        />

        <AlertPopUp
          visible={alertError}
          title={I18n.t('errorAlert')}
          desc={I18n.t('errorAlert')}
          types="error"
          duration={10000}
          close={() => {
            setAlertError(false);
          }}
        />

        <Button
          title={I18n.t('filledButton')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          // onPress={_handleLogin}
          color={COLORS.green80}
          isLoading={false}
        />
        <Button
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          // onPress={_handleLogin}
          color={COLORS.green80}
          isLoading={true}
        />
        <Button
          title={I18n.t('disabledButton')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          color={COLORS.green80}
          disabled={true}
        />
        <Button
          title={I18n.t('ghostButton')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          types="ghost"
          styleContainer={styles.borderColor}
          isLoading={false}
        />
        <Button
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          styleContainer={styles.borderColor}
          types="ghost"
          isLoading={true}
        />
        <Text>Alert</Text>
        <Button
          title={I18n.t('successAlert')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          onPress={() => {
            setAlertSuccess(true);
          }}
          color={COLORS.green80}
          isLoading={false}
        />
        <Button
          title={I18n.t('warningAlert')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          onPress={() => {
            setAlertWarning(true);
          }}
          color={COLORS.yellow70}
          isLoading={false}
        />
        <Button
          title={I18n.t('informationAlert')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          onPress={() => {
            setAlertInformation(true);
          }}
          color={COLORS.blue80}
          isLoading={false}
        />
        <Button
          title={I18n.t('errorAlert')}
          styleContainer={STYLES.pd16}
          styleWrap={STYLES.mrb20}
          onPress={() => {
            setAlertError(true);
          }}
          color={COLORS.red70}
          isLoading={false}
        />
      </View>
    </SafeAreaView>
  );
};

export default Component;
