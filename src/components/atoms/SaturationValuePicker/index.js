/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import {View, ViewPropTypes, PanResponder} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import chroma from 'chroma-js';
import {Icon, Container, GradientView} from './index.style';

const normalizeValue = (value) => {
  if (value < 0) {
    return 0;
  }
  if (value > 1) {
    return 1;
  }
  return value;
};

const SaturationValuePicker = ({
  size,
  sliderSize,
  hue,
  value,
  saturation,
  containerStyle,
  borderRadius,
  onDragMove,
}) => {
  const panContainerResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onStartShouldSetPanResponderCapture: () => true,
    onMoveShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponderCapture: () => true,
    onPanResponderGrant: () => true,
    onPanResponderMove: (evt, gestureState) => {
      handleDragMove(evt, gestureState);
    },
    onPanResponderTerminationRequest: () => true,
    onPanResponderRelease: () => true,
    onPanResponderTerminate: () => true,
    onShouldBlockNativeResponder: () => true,
  });

  const currentColor = chroma.hsv(hue, saturation, value).hex();

  const computeSatValDragContainer = (event) => {
    const {nativeEvent = {}} = event;
    const {pageX, pageY} = nativeEvent;
    const positionX = pageX - 40;
    const positionY = pageY - 236.72;
    return {
      saturation: normalizeValue(positionX / size),
      value: 1 - normalizeValue(positionY / size),
    };
  };

  const handleDragMove = (evt, gestureState) => {
    if (onDragMove) {
      onDragMove({
        ...computeSatValDragContainer(evt),
        gestureState,
      });
    }
  };

  const positionX = size * saturation;
  const positionY = size * (1 - value);
  return (
    <Container style={containerStyle}>
      <View {...panContainerResponder.panHandlers}>
        <LinearGradient
          style={{
            borderRadius,
          }}
          colors={['#fff', chroma.hsl(hue, 1, 0.5).hex()]}
          start={{x: 0, y: 0.5}}
          end={{x: 1, y: 0.5}}>
          <LinearGradient colors={['rgba(0, 0, 0, 0)', '#000']}>
            <GradientView height={size} width={size} />
          </LinearGradient>
        </LinearGradient>
        <Icon
          width={sliderSize}
          height={sliderSize}
          borderRadius={sliderSize / 2}
          borderWidth={sliderSize / 10}
          sliderSize={sliderSize}
          size={size}
          color={currentColor}
          saturation={saturation}
          value={value}
          translateX={positionX >= size ? positionX - sliderSize : positionX}
          translateY={positionY >= size ? positionY - sliderSize : positionY}
        />
      </View>
    </Container>
  );
};

SaturationValuePicker.propTypes = {
  containerStyle: ViewPropTypes.style,
  borderRadius: PropTypes.number,
  size: PropTypes.number,
  sliderSize: PropTypes.number,
  hue: PropTypes.number,
  saturation: PropTypes.number,
  value: PropTypes.number,
  onDragStart: PropTypes.func,
  onDragMove: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragTerminate: PropTypes.func,
  onPress: PropTypes.func,
};

SaturationValuePicker.defaultProps = {
  containerStyle: {},
  borderRadius: 0,
  size: 200,
  sliderSize: 24,
  hue: 0,
  saturation: 1,
  value: 1,
  onDragStart: null,
  onDragMove: null,
  onDragEnd: null,
  onDragTerminate: null,
  onPress: null,
};

export default SaturationValuePicker;
