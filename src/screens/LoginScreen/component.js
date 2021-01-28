//package import
import React, { useEffect, useState } from 'react';
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector, shallowEqual } from 'react-redux';

//local import
import styles from './styles';
import I18n from '../../i18n';
import { Header, Button, Input } from '../../components';
import { COLORS, IMAGES, ENDPOINT, STYLES } from '../../configs';
import { ArrowLeftIcon, LinkedInIcon } from '../../assets/svgs';

const Component = () => {
  //package value
  const dispatch = useDispatch();
  const navigation = useNavigation();

  //state value
  const [name, setName] = useState('');
  const [phone, setPhone] = useState(false);
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
      <Header shadow={false}>
        <Button
          onPress={() => navigation.goBack()}
          customContainer={styles.backContainer}
          customWrap={styles.backWrap}
          color={COLORS.white}
        >
          <ArrowLeftIcon width="20" heigh="20" />
        </Button>
        <Text style={styles.headerTitle}>Masuk</Text>
      </Header>
      <View style={styles.content}>
        <Text style={[styles.textTitle, STYLES.mb8]}>Lorem ipsum</Text>
        <Text style={[styles.textDesc, STYLES.mb20]}>
          Lorem ipsum dolor sit amet
        </Text>
        <Input
          label="Nama"
          value={name}
          onChangeText={(val) => setName(val)}
          placeholder="Nama"
          returnKeyType="done"
          styleWrap={STYLES.mb20}
          isError={name ? false : true}
          errorMessage="Form tidak boleh kosong"
        />
        <Input
          label="Nomor Ponsel"
          value={phone}
          onChangeText={(val) => setPhone(val)}
          placeholder="089xxx"
          keyboardType="phone-pad"
          returnKeyType="done"
          styleWrap={STYLES.mb20}
          isError={phone ? false : true}
          errorMessage="Form tidak boleh kosong"
        />
        <Button title="Masuk" disabled={!name} customWrap={STYLES.mb20} />
        <View style={styles.wrapCenter}>
          <Text style={[styles.textDesc, STYLES.mb16]}>OR</Text>
        </View>
        <View style={styles.rowButton}>
          <Button
            customWrap={[styles.wrapButton, STYLES.mb20]}
            customContainer={styles.row}
            color={COLORS.red60}
          >
            <LinkedInIcon width="22" height="22" color={COLORS.white} />
            <Text style={[styles.textButton, STYLES.ml10]}>Google</Text>
          </Button>
          <Button
            customWrap={[styles.wrapButton, STYLES.mb20]}
            customContainer={styles.row}
            color={COLORS.primaryBlue}
          >
            <LinkedInIcon width="22" height="22" color={COLORS.white} />
            <Text style={[styles.textButton, STYLES.ml10]}>Facebook</Text>
          </Button>
        </View>
        <View style={styles.wrapCenter}>
          <Text style={[styles.textBlur, STYLES.mb16]}>
            Belum punya akun Intermoda?
            <Text
              style={styles.textLink}
              onPress={() => navigation.navigate('Register')}
            >
              {' '}
              Daftar
            </Text>
          </Text>
        </View>
      </View>
    </View>
  );
};

export default Component;
