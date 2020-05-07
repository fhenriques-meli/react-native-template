import styled from 'styled-components/native';

const StyledView = styled.View`
  margin: auto;
  justify-content: space-between;
  align-items: center;
`;

const ButtonContainer = styled.View`
  opacity: ${(props) => props.opacity};
  width: 300px;
  flex: 1;
  justify-content: center;
`;

const SwitchContainer = styled.View`
  width: 300px;
`;

const StyledTouchableOpacity = styled.TouchableOpacity`
  align-items: center;
  justify-content: space-between;
  background-color: ${(props) => props.color};
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  background-color: ${(props) => props.color};
  flex: 1;
`;

const SliderContainer = styled.View`
  margin-bottom: ${(props) => props.marginBottom}px;
  opacity: ${(props) => props.opacity};
  width: 100%;
`;

export {
  StyledView,
  SwitchContainer,
  ButtonContainer,
  SliderContainer,
  StyledTouchableOpacity,
};
