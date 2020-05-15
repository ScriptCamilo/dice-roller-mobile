import styled from 'styled-components/native';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: #f3e5f5;
`;

export const InputBox = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const Input = styled.TextInput.attrs((props) => ({
  placeholder: props.holder,
  placeholderTextColor: '#ECEFF199',
}))`
  height: 50px;
  width: 300px;

  border-radius: 15px;

  font-size: 18px;
  font-family: serif;

  color: #455a64;

  padding: 10px;
  margin: 20px;

  background-color: #ef9a9a;

  elevation: 5;
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

export const TextB = styled.Text`
  font-size: 16px;
  font-family: serif;
  font-weight: bold;
  color: #fff;
`;
