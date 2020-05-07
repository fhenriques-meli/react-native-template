import React, {useEffect, useState} from 'react';
import Slider from '@ptomasroos/react-native-multi-slider';
import SystemSetting from 'react-native-system-setting';
import fromHsv from '~/utils';
import {translate} from '~/locales';
import {SliderMarker} from '~/components/atoms';
import {
  SliderContainer,
  StyledText,
  Label,
  Strong,
  Icon,
  IconContainer,
  Circle,
} from './index.style';

const BrightnessSlider = ({
  color,
  initialBrightness,
  onSlidingComplete,
  width,
}) => {
  const [brightness, changeBrightness] = useState(initialBrightness);
  const iconColor = color.v < 0.4 ? '#ffffff' : '#000000';
  const hasLightColor = color.s <= 0;
  const hsvColor = fromHsv(color);

  const handleCompleted = ([sliderValue]) => {
    const value = sliderValue / 100;
    onSlidingComplete(value);
  };

  const handleValueChange = ([sliderValue]) => {
    const value = sliderValue / 100;
    SystemSetting.setAppBrightness(value);
    changeBrightness(value);
  };

  useEffect(() => {
    SystemSetting.setAppBrightness(initialBrightness);
  }, [initialBrightness]);

  const thumbTintColor = hasLightColor ? '#000000' : hsvColor;

  return (
    <SliderContainer backgroundColor={hasLightColor ? '#E6E6E6' : '#ffffff'}>
      <Circle color={hasLightColor ? '#E6E6E6' : '#ffffff'}>
        <IconContainer color={hsvColor}>
          <Icon color={iconColor} />
        </IconContainer>
      </Circle>
      <Label>
        <StyledText>{translate('brightness')}</StyledText>
        <Strong>{parseInt(brightness * 100)}%</Strong>
      </Label>
      <Slider
        min={0}
        onValuesChangeFinish={handleCompleted}
        onValuesChange={handleValueChange}
        max={100}
        sliderLength={width - 60}
        allowOverlap={true}
        snapped={true}
        customMarker={(props) => (
          <SliderMarker
            {...props}
            markerStyle={{backgroundColor: thumbTintColor, top: 2}}
          />
        )}
        touchDimensions={{
          height: 40,
          width: 40,
          borderRadius: 20,
        }}
        selectedStyle={{
          backgroundColor: '#4B4B4B',
        }}
        unselectedStyle={{
          backgroundColor: '#CFD3D2',
        }}
        trackStyle={{
          height: 6,
          borderRadius: 5,
        }}
        values={[brightness * 100]}
      />
    </SliderContainer>
  );
};

export default React.memo(BrightnessSlider);
