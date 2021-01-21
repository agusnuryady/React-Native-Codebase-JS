/* eslint-disable no-undef */
jest.mock('@react-native-community/async-storage', () => {
  require('@react-native-community/async-storage/jest/async-storage-mock');
});

jest.mock('redux-persist', () => {
  const real = jest.requireActual('redux-persist');
  return {
    ...real,
    persistReducer: jest
      .fn()
      .mockImplementation((config, reducers) => reducers),
  };
});

jest.mock('react-native-i18n', () => {
  const i18njs = require('i18n-js');
  const en = require('../src/i18n/locales/en');
  i18njs.translations = { en }; // Optional ('en' is the default)

  return {
    t: jest.fn((k, o) => i18njs.t(k, o)),
  };
});

jest.mock('react-native-reanimated', () => {
  const View = require('react-native').View;

  return {
    Value: jest.fn(),
    event: jest.fn(),
    add: jest.fn(),
    eq: jest.fn(),
    set: jest.fn(),
    cond: jest.fn(),
    interpolate: jest.fn(),
    View: View,
    Extrapolate: { CLAMP: jest.fn() },
    Transition: {
      Together: 'Together',
      Out: 'Out',
      In: 'In',
    },
  };
});
