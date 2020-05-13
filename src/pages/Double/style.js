import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #ffcdd2;
`;

export const DiceBox = styled.View`
  flex-direction: row;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.TouchableOpacity`
  padding: 10px 40px;
  margin: 0px 0px 30px 0px;
  border-radius: 3px;
  font-size: 18px;

  background-color: #e74c3c;
  border-bottom-width: 5px;
  border-bottom-color: #c0392b;
  text-shadow: 0px -2px #c0392b;
`;

// width: 100px;
// height: 50px;

// align-items: center;
// justify-content: center;

// margin-bottom: 30px;

// border: 2px solid #cc0000;
// border-radius: 40px;

export const TextB = styled.Text`
  font-size: 16px;
  font-family: serif;
  font-weight: bold;
  color: #fff;
`;
