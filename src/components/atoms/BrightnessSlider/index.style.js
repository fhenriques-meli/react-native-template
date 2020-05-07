import styled from 'styled-components/native';
import Lightbulb from '~/components/icons/lightbulb';

const Icon = styled(Lightbulb)`
  background-color: ${(props) => props.color};
`;

const Circle = styled.View`
  background-color: ${(props) => props.color};
  height: 70px;
  width: 70px;
  padding: 10px;
  margin: -40px auto 0;
  border-radius: 100px;
`;

const IconContainer = styled.View`
  height: 50px;
  width: 50px;
  border-radius: 100px;
  justify-content: center;
  align-items: center;
  background-color: ${(props) => props.color};
`;

const SliderContainer = styled.View`
  width: 100%;
  height: 200px;
  padding: 20px 30px;
  flex-direction: column;
  border-top-left-radius: 20px;
  border-top-right-radius: 20px;
  background-color: ${(props) => props.backgroundColor};
`;

const Label = styled.View`
  flex-direction: row;
  justify-content: space-between;
  width: 100%;
  padding: 20px 0 0;
`;

const StyledText = styled.Text`
  color: #485350;
`;

const Strong = styled.Text`
  font-weight: bold;
  color: #485350;
`;

export {
  Label,
  Strong,
  IconContainer,
  Circle,
  StyledText,
  SliderContainer,
  Icon,
};
