import React from 'react';
import {Switch} from 'react-native-paper';
import fromHsv from '~/utils';

import {Text, StyledView} from './index.styled';

const SwitchButton = ({
  isSwitchOn,
  onChange,
  onPress,
  backgroundColor,
  textColor,
  switchColor,
  text,
}) => (
  <StyledView
    activeOpacity={1}
    onPress={onPress}
    backgroundColor={fromHsv(backgroundColor)}>
    <Text color={textColor} isSwitchOn={isSwitchOn}>
      {text}
    </Text>
    <Switch value={isSwitchOn} onValueChange={onChange} color={switchColor} />
  </StyledView>
);

export default SwitchButton;
