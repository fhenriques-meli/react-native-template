import styled from 'styled-components/native';

function hexToRGB(hex, alpha) {
  const r = parseInt(hex.slice(1, 3), 16),
    g = parseInt(hex.slice(3, 5), 16),
    b = parseInt(hex.slice(5, 7), 16);

  if (alpha) {
    return `rgba(${r}, ${g}, ${b}, ${alpha})`;
  } else {
    return `rgb(${r}, ${g}, ${b})`;
  }
}

const StyledView = styled.TouchableOpacity`
  border-radius: 7px;
  background-color: ${(props) => hexToRGB(props.backgroundColor, 0.3)};
  display: flex;
  width: 100%;
  flex-direction: row;
  padding: 20px;
  border-color: transparent;
  justify-content: space-between;
  align-items: center;
`;

const Text = styled.Text`
  color: ${(props) => props.color || '#4B4B4B'};
  font-weight: 700;
  font-size: 18px;
`;

export {Text, StyledView};
