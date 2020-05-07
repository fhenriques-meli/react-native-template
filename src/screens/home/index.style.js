import styled from 'styled-components/native';
import { SafeAreaView } from 'react-native-safe-area-context';

const Container = styled.View`
  padding: 0 40px 0;
  flex: 1;
  margin: -100px 0 0;
  width: 100%;
  justify-content: center;
`;

const ViewShadow = styled.View`
  width: 100px;
  height: 100px;
`;

const StyledSafeAreaView = styled(SafeAreaView)`
  background-color: #fff;
  flex: 1;
`;

const StyledScrollView = styled.ScrollView`
  flex: 1;
`;

const SwitchContainer = styled.View`
  padding-top: 50px;
`;

export {
  Container,
  ViewShadow,
  StyledSafeAreaView,
  StyledScrollView,
  SwitchContainer,
};
