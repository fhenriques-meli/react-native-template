/* eslint-disable react/jsx-props-no-spreading */
import React, {useEffect} from 'react';
import {Animated, ViewPropTypes, PanResponder} from 'react-native';
import LinearGradient from 'react-native-linear-gradient';
import PropTypes from 'prop-types';
import chroma from 'chroma-js';

import {Container, Slider, StyledView} from './index.style';

const HuePicker = ({
  sliderSize,
  barWidth,
  barHeight,
  borderRadius,
  containerStyle,
  hue,
  onDragMove,
}) => {
  const hueColors = [
    '#ff0000',
    '#ffff00',
    '#00ff00',
    '#00ffff',
    '#0000ff',
    '#ff00ff',
    '#ff0000',
  ];
  const sliderY = new Animated.Value((barHeight * hue) / 360);
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

  useEffect(() => {
    sliderY.setValue((barHeight * hue) / 360);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [hue, barHeight]);

  const getContainerStyle = () => {
    const paddingTop = sliderSize / 2;
    const paddingLeft =
      sliderSize - barWidth > 0 ? (sliderSize - barWidth) / 2 : 0;
    return [
      containerStyle,
      {
        paddingTop,
        paddingBottom: paddingTop,
        paddingLeft,
        paddingRight: paddingLeft,
      },
    ];
  };

  const currentColor = chroma.hsl(hue, 1, 0.5).hex();

  const computeHueValueContainerDrag = (event) => {
    const {nativeEvent = {}} = event;
    const {pageY} = nativeEvent;
    let positionY = pageY - 236.72;
    if (positionY < 0) {
      positionY = 0;
    } else if (positionY > barHeight) {
      positionY = barHeight - sliderSize;
    }

    const diff = (positionY / barHeight) * 360;
    const updatedHue = diff;
    return updatedHue;
  };

  const handleDragMove = (event, gestureState) => {
    if (onDragMove) {
      onDragMove({
        hue: computeHueValueContainerDrag(event),
        gestureState,
      });
    }
  };

  const AnimatedSlider = Animated.createAnimatedComponent(Slider);

  return (
    <Container style={getContainerStyle()}>
      <Animated.View {...panContainerResponder.panHandlers}>
        <LinearGradient
          colors={hueColors}
          style={{
            borderRadius,
          }}>
          <StyledView width={barWidth} height={barHeight} />
        </LinearGradient>
        <AnimatedSlider
          width={sliderSize}
          height={sliderSize}
          left={(barWidth - sliderSize) / 2}
          borderRadius={sliderSize / 2}
          borderWidth={sliderSize / 10}
          color={currentColor}
          translateY={sliderY}
        />
      </Animated.View>
    </Container>
  );
};

HuePicker.propTypes = {
  containerStyle: ViewPropTypes.style,
  borderRadius: PropTypes.number,
  hue: PropTypes.number,
  barWidth: PropTypes.number,
  barHeight: PropTypes.number,
  sliderSize: PropTypes.number,
  onDragStart: PropTypes.func,
  onDragMove: PropTypes.func,
  onDragEnd: PropTypes.func,
  onDragTerminate: PropTypes.func,
  onPress: PropTypes.func,
};

HuePicker.defaultProps = {
  containerStyle: {},
  borderRadius: 0,
  hue: 0,
  barWidth: 12,
  barHeight: 200,
  sliderSize: 24,
  onDragStart: null,
  onDragMove: null,
  onDragEnd: null,
  onDragTerminate: null,
  onPress: null,
};

export default HuePicker;
