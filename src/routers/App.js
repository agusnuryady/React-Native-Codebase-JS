import React, { useEffect, useState } from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { useDispatch, useSelector } from 'react-redux';

import Stack from './Stack';
import { isBahasa } from '../i18n';
import { chooseLanguage } from '../database/redux-actions';

const App = () => {
  const dispatch = useDispatch();

  const [first, setFirst] = useState(true);
  const persistState = useSelector((state) => state.persist);

  useEffect(() => {
    if (first) {
      setFirst(false);
      if (persistState.language === '') {
        if (isBahasa()) {
          dispatch(chooseLanguage('id'));
        } else {
          dispatch(chooseLanguage('en'));
        }
      } else {
        dispatch(chooseLanguage(persistState.language));
      }
    }
  }, [dispatch, first, persistState.language]);

  return (
    <NavigationContainer>
      <Stack />
    </NavigationContainer>
  );
};

export default App;
