import React, {useState, useEffect, useMemo, useCallback} from 'react';
import {useSelector, useDispatch} from 'react-redux';
import {
  hideNavigationBar,
  showNavigationBar,
} from 'react-native-navigation-bar-color';
import {
  Dimensions,
  TouchableWithoutFeedback,
  Animated,
  StatusBar,
} from 'react-native';
import UserInactivity from 'react-native-user-inactivity';
import {Portal, Provider} from 'react-native-paper';
import KeepAwake from 'react-native-keep-awake';
import fromHsv from '~/utils';
import {SwitchButton, BrightnessSlider} from '~/components/atoms';
import {userActions} from '~/actions';
import {translate} from '~/locales';

import {
  StyledTouchableOpacity,
  ButtonContainer,
  SliderContainer,
} from './index.style';

const {width} = Dimensions.get('window');
const {height} = Dimensions.get('window');

const Color = ({navigation}) => {
  const dispatch = useDispatch();
  const [userActive, setUserActive] = useState(true);
  const [showOptions, toggleOptions] = useState(true);
  const [switchOn, changeSwitch] = useState(true);
  const [hiddenStatusBar, changeStatusBar] = useState(false);
  const [marginBottom] = useState(new Animated.Value(-20));
  const [fadeIn] = useState(new Animated.Value(1));
  const color = useSelector((state) => state.user.selectedColor);
  const brightness = useSelector((state) => state.user.brightness);
  const {selectBrightness} = userActions;
  const hasDarkColor = color.v <= 0.1;

  const handleSlideComplete = (value) => {
    dispatch(selectBrightness(value));
  };

  useEffect(() => {
    if (!userActive && showOptions) {
      hideControls();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [userActive]);

  const handleHideSlider = useCallback(() => {
    Animated.timing(marginBottom, {
      toValue: -400,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [marginBottom]);

  const handleShowSlider = () => {
    Animated.timing(marginBottom, {
      toValue: -20,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const handleHideButton = useCallback(() => {
    Animated.timing(fadeIn, {
      toValue: 0,
      duration: 300,
      useNativeDriver: false,
    }).start();
  }, [fadeIn]);

  // eslint-disable-next-line react-hooks/exhaustive-deps
  const handleShowButton = () => {
    Animated.timing(fadeIn, {
      toValue: 1,
      duration: 300,
      useNativeDriver: false,
    }).start();
  };

  const showControls = () => {
    handleShowButton();
    handleShowSlider();
    toggleOptions(true);
  };

  const hideControls = useCallback(() => {
    handleHideButton();
    handleHideSlider();
    toggleOptions(false);
    setTimeout(() => {
      hideNavigationBar();
    }, 300);
    setTimeout(() => {
      changeStatusBar(true);
    }, 500);
  }, [handleHideButton, handleHideSlider]);

  const handlePress = () => {
    if (showOptions) {
      hideControls();
    } else {
      showControls();
    }
  };

  useEffect(() => {
    setTimeout(hideControls, 800);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handlePressSwitch = () => {
    if (showOptions) {
      changeSwitch(false);
      showNavigationBar();
      changeStatusBar(false);
      setTimeout(() => {
        navigation.navigate('Home');
      }, 300);
    } else {
      handleShowButton();
      handleShowSlider();
      toggleOptions(true);
    }
  };

  const AnimatedButtonContainer = Animated.createAnimatedComponent(
    ButtonContainer,
  );

  const AnimatedSliderContainer = Animated.createAnimatedComponent(
    SliderContainer,
  );

  const renderSlider = useMemo(
    () => (
      <BrightnessSlider
        onSlidingComplete={handleSlideComplete}
        color={color}
        width={width}
        initialBrightness={brightness}
      />
    ),
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [brightness, color],
  );

  return (
    <UserInactivity
      timeForInactivity={10000}
      isActive={userActive}
      onAction={(isActive) => {
        setUserActive(isActive);
      }}>
      <Provider>
        <Portal>
          <StatusBar hidden={hiddenStatusBar} animated={false} />
          <StyledTouchableOpacity
            activeOpacity={1}
            color={fromHsv(color)}
            onPress={handlePress}
            width={width}
            height={height + 50}>
            <AnimatedButtonContainer opacity={fadeIn}>
              <SwitchButton
                isSwitchOn={switchOn}
                onChange={handlePressSwitch}
                onPress={handlePressSwitch}
                text={translate('off')}
                backgroundColor={hasDarkColor ? '#ffffff' : '#000000'}
                switchColor={fromHsv(color)}
                textColor="#ffffff"
              />
            </AnimatedButtonContainer>
            <TouchableWithoutFeedback>
              <AnimatedSliderContainer
                marginBottom={marginBottom}
                opacity={fadeIn}>
                {renderSlider}
              </AnimatedSliderContainer>
            </TouchableWithoutFeedback>
          </StyledTouchableOpacity>
        </Portal>
        <KeepAwake />
      </Provider>
    </UserInactivity>
  );
};

export default Color;
