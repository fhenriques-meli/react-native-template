import React from 'react';
import {View, StyleSheet, Platform, TouchableHighlight} from 'react-native';

const SliderMarker = ({
  markerStyle,
  pressed,
  enabled,
  pressedMarkerStyle,
  disabledMarkerStyle,
}) => (
  <TouchableHighlight>
    <View
      style={
        enabled
          ? [
              styles.markerStyle,
              markerStyle,
              pressed && styles.pressedMarkerStyle,
              pressed && pressedMarkerStyle,
            ]
          : [styles.markerStyle, styles.disabled, disabledMarkerStyle]
      }
    />
  </TouchableHighlight>
);

const styles = StyleSheet.create({
  markerStyle: {
    ...Platform.select({
      ios: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 1,
        shadowOpacity: 0.2,
      },
      android: {
        height: 30,
        width: 30,
        borderRadius: 30,
        backgroundColor: '#0D8675',
      },
      web: {
        height: 30,
        width: 30,
        borderRadius: 30,
        borderWidth: 1,
        borderColor: '#DDDDDD',
        backgroundColor: '#FFFFFF',
        shadowColor: '#000000',
        shadowOffset: {
          width: 0,
          height: 3,
        },
        shadowRadius: 1,
        shadowOpacity: 0.2,
      },
    }),
  },
  pressedMarkerStyle: {
    ...Platform.select({
      web: {},
      ios: {},
      android: {
        height: 35,
        width: 35,
        borderRadius: 35,
      },
    }),
  },
  disabled: {
    backgroundColor: '#d3d3d3',
  },
});

export default SliderMarker;
