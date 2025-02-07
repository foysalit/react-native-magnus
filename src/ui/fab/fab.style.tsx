import { StyleSheet, Platform } from 'react-native';

import { getThemeProperty } from '../../theme/theme.service';

/**
 * computed style
 *
 * @param theme
 * @param props
 */
export const getStyle = (theme: any, props: any) => {
  const computedStyle: any = {};

  computedStyle.button = {
    bottom: 0,
    right: 0,
    overflow: Platform.OS === 'ios' ? 'visible' : 'hidden',
    zIndex: 2,
    alignItems: 'center',
    justifyContent: 'center',
    elevation: 5,
    position: props.position,
  };

  computedStyle.actions = {
    position: 'absolute',
    zIndex: 10,
  };

  if (props.shadow) {
    computedStyle.button = {
      ...computedStyle.button,
      ...theme.shadow[props.shadow],
      shadowColor: getThemeProperty(theme.colors, props.shadowColor),
    };
  }

  computedStyle.overlay = {
    position: 'absolute',
    bottom: 0,
    left: 0,
    right: 0,
    top: 0,
    elevation: 0,
    zIndex: 0,
  };

  return StyleSheet.create(computedStyle);
};
