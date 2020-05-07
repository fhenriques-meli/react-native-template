import styled from 'styled-components/native';

const Container = styled.View`
  justify-content: center;
  align-items: center;
`;

const Slider = styled.View`
  top: 0;
  position: absolute;
  border-color: #fff;
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
  left: ${(props) => props.left}px;
  border-radius: ${(props) => props.borderRadius}px;
  border-width: ${(props) => props.borderWidth}px;
  background-color: ${(props) => props.color};
  transform: translateY(${(props) => props.translateY}px);
`;

const StyledView = styled.View`
  width: ${(props) => props.width}px;
  height: ${(props) => props.height}px;
`;

export {Container, Slider, StyledView};
