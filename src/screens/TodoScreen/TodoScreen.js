//package import
import React, { useCallback, useState } from 'react';
import { Alert, FlatList, Keyboard, Text, TextInput, View } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

//local import
import styles from './styles';
import I18n from '../../i18n';
import { COLORS, STYLES } from '../../configs';
import {
  addData,
  deleteData,
  checkTask,
  editData,
} from '../../redux/redux-actions';
import { Header, Button, Card } from '../../components';
import {
  ArrowLeftIcon,
  CheckIcon,
  ChevronUpIcon,
  EditIcon,
  PlusIcon,
  TodoIcon,
  TrashIcon,
} from '../../assets/svgs';

const TodoScreen = () => {
  //package value
  const navigation = useNavigation();
  const dispatch = useDispatch();

  //state value
  const [input, setInput] = useState('');
  const [isVisible, setIsVisible] = useState(false);
  const [isEdit, setIsEdit] = useState(false);
  const [editIndex, setEditIndex] = useState(null);
  const todoState = useSelector((state) => state.todo);

  //place your function in here
  const _handleDeleteData = useCallback(
    (index) => {
      dispatch(deleteData(index));
    },
    [dispatch]
  );

  const _onClickTrash = useCallback(
    (item) => {
      Alert.alert(I18n.t('delete'), I18n.t('youSure'), [
        { text: I18n.t('no') },
        { text: I18n.t('yes'), onPress: () => _handleDeleteData(item) },
      ]);
    },
    [_handleDeleteData]
  );

  const _handleAddData = useCallback(() => {
    if (input.length > 0) {
      if (isEdit) {
        dispatch(editData(input, editIndex));
        setInput('');
        setIsEdit(false);
        setIsVisible(false);
        Keyboard.dismiss();
      } else {
        dispatch(addData(input));
        setInput('');
        setIsVisible(false);
        Keyboard.dismiss();
      }
    } else {
      setIsVisible(!isVisible);
    }
  }, [dispatch, editIndex, input, isEdit, isVisible]);

  const _handleCheck = useCallback(
    (status, index) => {
      dispatch(checkTask(!status, index));
    },
    [dispatch]
  );

  const _handleEdit = useCallback(
    (name, index) => {
      if (isEdit) {
        setIsEdit(!isEdit);
        setInput('');
        setEditIndex(null);
        setIsVisible(!isVisible);
      } else {
        setIsEdit(!isEdit);
        setInput(name);
        setEditIndex(index);
        setIsVisible(!isVisible);
      }
    },
    [isEdit, isVisible]
  );

  const _percentage = useCallback(() => {
    let filter = todoState.data.filter((item) => item.status === true);
    const formula = (filter.length / todoState.data.length) * 100;
    if (isNaN(formula)) {
      return 0;
    } else {
      return formula.toString().slice(0, 4);
    }
  }, [todoState.data]);

  //place your extension component here
  const _renderItem = ({ item, index }) => (
    <View style={styles.wrapItem}>
      <View style={[styles.row, STYLES.fx1]}>
        <Button
          onPress={() => _handleCheck(item.status, index)}
          styleContainer={[
            styles.containerCheck,
            !item.status && styles.borderCheck,
          ]}
          styleWrap={[styles.wrapCheck, STYLES.mrr12]}
          color={COLORS.primaryWhite}
        >
          {item.status && <CheckIcon width="25" height="25" />}
        </Button>
        <Text
          numberOfLines={1}
          style={[styles.itemText, item.status && STYLES.txtDecLineT]}
        >
          {item.name}
        </Text>
      </View>
      <View style={[styles.row, STYLES.mrl12]}>
        {!item.status && (
          <Button
            onPress={() => _handleEdit(item.name, index)}
            styleContainer={[styles.menuCheck]}
            styleWrap={styles.wrapCheck}
            color={COLORS.green}
          >
            <EditIcon width="12" height="12" fill={COLORS.primaryWhite} />
          </Button>
        )}
        <Button
          onPress={() => _onClickTrash(index)}
          styleContainer={[styles.menuCheck]}
          styleWrap={[styles.wrapCheck, STYLES.mrl4]}
          color={COLORS.red}
        >
          <TrashIcon width="12" height="12" fill={COLORS.primaryWhite} />
        </Button>
      </View>
    </View>
  );

  const _renderEmptyItem = () => (
    <View style={styles.wrapEmptyData}>
      <TodoIcon width="50" height="50" fill={COLORS.gray} />
      <Text style={[styles.smallText, STYLES.mrt12]}>{I18n.t('empty')}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Header>
        <>
          <Button
            types="nude"
            onPress={() => navigation.goBack()}
            styleContainer={styles.backContainer}
            styleWrap={styles.backWrap}
          >
            <ArrowLeftIcon width="20" heigh="20" fill={COLORS.black} />
          </Button>
          <Text style={styles.headerTitle}>{I18n.t('todoList')}</Text>
        </>
      </Header>
      <View style={styles.content}>
        <Text style={styles.bigText}>{I18n.t('whatsUp')}</Text>
        <View style={styles.wrapCard}>
          <Text style={[styles.smallText, STYLES.mrb12]}>
            {todoState.data.length} {I18n.t('task')}
          </Text>
          <Text style={[styles.title, STYLES.mrb12]}>
            {_percentage()}% {I18n.t('complete')}
          </Text>
          <View style={styles.wrapIndicator}>
            <View style={[styles.indicator, { width: `${_percentage()}%` }]} />
          </View>
        </View>
        <Text style={[styles.smallText, STYLES.mrv16]}>
          {I18n.t('todayTask')}
        </Text>
        <FlatList
          data={todoState.data}
          extraData={todoState}
          keyExtractor={(item, index) => index.toString()}
          renderItem={_renderItem}
          ListEmptyComponent={_renderEmptyItem}
          contentContainerStyle={
            todoState.data.length === 0 && styles.emptyList
          }
        />
        <View style={styles.wrapBottom}>
          {isVisible && (
            <View style={styles.wrapInput}>
              <TextInput
                placeholder={I18n.t('typeHere')}
                onChangeText={(text) => setInput(text)}
                value={input}
                style={styles.textInput}
              />
            </View>
          )}
          <Card
            types="button"
            onPress={_handleAddData}
            color={COLORS.yellow60}
            styleContainer={styles.containerSave}
            styleWrap={styles.containerSave}
          >
            {input.length > 0 ? (
              <ChevronUpIcon
                width="20"
                height="20"
                fill={COLORS.primaryWhite}
              />
            ) : (
              <PlusIcon width="20" height="20" fill={COLORS.primaryWhite} />
            )}
          </Card>
        </View>
      </View>
    </View>
  );
};

export default TodoScreen;
