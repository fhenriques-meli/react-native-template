import React, { useState, useCallback } from 'react';
import { Dimensions, StatusBar } from 'react-native';
import { useNavigation, useFocusEffect } from '@react-navigation/native';
import { useSelector, useDispatch } from 'react-redux';
import { BoxShadow } from 'react-native-shadow';
import fromHsv from '~/utils';
import { SwitchButton, TitleColor } from '~/components/atoms';
import { ColorPicker } from '~/components/molecules';
import { userActions } from '~/actions';
import { translate } from '~/locales';
import {
  Container,
  SwitchContainer,
  ViewShadow,
  StyledSafeAreaView,
} from './index.style';

const { width } = Dimensions.get('window');
const INITIAL_BRIGHTNESS = 0.25;

const Home = () => {
  const navigation = useNavigation();
  const dispatch = useDispatch();
  const { selectColor } = userActions;
  const color = useSelector((state) => state.user.selectedColor);
  const [switchOn, changeSwitch] = useState(false);
  const hasLightColor = color.v > 0.8 && color.s < 0.2;

  const padding = 50;
  const shadowOpt = {
    width: width - padding,
    height: 100,
    color: fromHsv(color),
    border: 110,
    radius: 50,
    opacity: 0.9,
    style: {
      top: -140,
      left: 0,
      right: 0,
      marginLeft: padding / 2,
    },
    x: 0,
    y: 0,
  };

  useFocusEffect(
    useCallback(() => {
      changeSwitch(false);
      // SystemSetting.setAppBrightness(INITIAL_BRIGHTNESS);
    }, []),
  );

  const handlePressStart = () => {
    changeSwitch(true);
    setTimeout(() => {
      navigation.navigate('Color');
    }, 200);
  };

  const onSatValPickerChange = ({ saturation, value }) => {
    dispatch(
      selectColor({
        ...color,
        s: saturation,
        v: value,
      }),
    );
  };

  const onHuePickerChange = ({ hue }) => {
    dispatch(
      selectColor({
        ...color,
        h: hue,
      }),
    );
  };

  return (
    <StyledSafeAreaView>
      <StatusBar
        backgroundColor="transparent"
        translucent
        barStyle="dark-content"
      />
      <BoxShadow setting={shadowOpt}>
        <ViewShadow />
      </BoxShadow>
      <Container>
        <TitleColor color={fromHsv(color)} />
        <ColorPicker
          satValPickerSize={width - 120}
          huePickerHue={color.h}
          onHuePickerDragMove={onHuePickerChange}
          satValPickerHue={color.h}
          satValPickerSaturation={color.s}
          satValPickerValue={color.v}
          huePickerBarWidth={30}
          satValPickerContainerStyle={{ marginRight: 10 }}
          huePickerBarHeight={width - 120}
          onSatValPickerDragMove={onSatValPickerChange}
        />
        <SwitchContainer>
          <SwitchButton
            isSwitchOn={switchOn}
            onChange={handlePressStart}
            onPress={handlePressStart}
            backgroundColor={hasLightColor ? '#CBCBCB' : color}
            switchColor={fromHsv(color)}
            text={translate('on')}
          />
        </SwitchContainer>
      </Container>
    </StyledSafeAreaView>
  );
};

export default Home;
