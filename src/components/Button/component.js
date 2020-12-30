//package import
import React, { memo } from 'react';
import {
  TouchableOpacity,
  TouchableNativeFeedback,
  Text,
  Platform,
  View,
  ActivityIndicator,
} from 'react-native';
import PropTypes from 'prop-types';

//local import
import styles from './styles';
import { COLORS } from '../../configs';

const Component = ({
  children,
  color,
  customContainer,
  customText,
  customWrap,
  disabled,
  disabledColor,
  isLoading,
  isUpperCase,
  loadingColor,
  onPress,
  title,
  type,
  ...props
}) => {
  //variable value
  let containerStyle = styles.container;
  let textStyle = styles.text;

  if (type.match(/flat-ripple/)) {
    containerStyle = styles.containerFlat;
  }

  if (disabled) {
    containerStyle = styles.containerDisabled;
  }
  if (isUpperCase) {
    title = title.toUpperCase();
  }
  const colors = disabled ? disabledColor : color;

  if (Platform.OS === 'ios') {
    return (
      <View style={[styles.wrapContainer, customWrap]}>
        <TouchableOpacity
          style={[
            containerStyle,
            customContainer,
            color && { backgroundColor: colors },
          ]}
          disabled={disabled}
          onPress={onPress}
          activeOpacity={0.8}
          {...props}
        >
          {isLoading ? (
            <ActivityIndicator color={loadingColor} />
          ) : (
            <>
              {children}
              {title ? (
                <Text style={[textStyle, customText]}>{title}</Text>
              ) : null}
            </>
          )}
        </TouchableOpacity>
      </View>
    );
  } else {
    return (
      <View style={[styles.wrapContainer, customWrap]}>
        <TouchableNativeFeedback
          disabled={disabled}
          onPress={onPress}
          useForeground={true}
          background={TouchableNativeFeedback.Ripple('rgba(1, 0, 0, 0.2)')}
          {...props}
        >
          <View
            style={[
              containerStyle,
              customContainer,
              color && { backgroundColor: colors },
            ]}
          >
            {isLoading ? (
              <ActivityIndicator color={loadingColor} />
            ) : (
              <>
                {children}
                {title ? (
                  <Text style={[textStyle, customText]}>{title}</Text>
                ) : null}
              </>
            )}
          </View>
        </TouchableNativeFeedback>
      </View>
    );
  }
};

Component.propTypes = {
  children: PropTypes.node,
  color: PropTypes.string,
  customContainer: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  customText: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  customWrap: PropTypes.oneOfType([PropTypes.object, PropTypes.any]),
  disabled: PropTypes.bool,
  disabledColor: PropTypes.string,
  isLoading: PropTypes.bool,
  isUpperCase: PropTypes.bool,
  loadingColor: PropTypes.string,
  onPress: PropTypes.func,
  title: PropTypes.string,
  type: PropTypes.oneOf(['flat', 'flat-ripple', 'raised-ripple']),
};

Component.defaultProps = {
  children: <View />,
  color: '',
  customContainer: {},
  customText: {},
  customWrap: {},
  disabled: false,
  disabledColor: COLORS.gray,
  isLoading: false,
  isUpperCase: false,
  loadingColor: COLORS.white,
  onPress: () => null,
  title: '',
  type: 'raised-ripple',
};

export default memo(Component);
