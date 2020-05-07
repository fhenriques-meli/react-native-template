import styled from 'styled-components/native';

const Container = styled.View`
  display: flex;
  flex-direction: row;
  align-items: center;
  margin: 20px 0;
`;

const Box = styled.View`
  width: 40px;
  height: 40px;
  border: 1px solid #888787;
  border-radius: 5px;
  background-color: ${(props) => props.color};
`;

const Title = styled.View`
  flex-direction: column;
  padding-left: 10px;
`;
const Strong = styled.Text`
  font-size: 18px;
  color: #4b4b4b;
  font-weight: 700;
`;
const StyledText = styled.Text`
  font-size: 18px;
  color: #888787;
`;

export {Box, Container, Strong, Title, StyledText};
