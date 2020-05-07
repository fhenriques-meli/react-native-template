import styled from 'styled-components/native';

const Icon = styled.TouchableOpacity`
  top: 0;
  left: 0;
  position: absolute;
  border-color: #fff;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  border-radius: ${(props) => props.borderRadius}px;
  border-width: ${(props) => props.borderWidth}px;
  background-color: ${(props) => props.color};
  transform: translate(
    ${(props) => props.translateX}px,
    ${(props) => props.translateY}px
  );
`;

const Container = styled.View`
  justify-content: center;
  align-items: center;
  height: auto;
  width: auto;
`;

const GradientView = styled.View`
  height: ${(props) => props.height}px;
  width: ${(props) => props.width}px;
`;

export {Icon, Container, GradientView};
