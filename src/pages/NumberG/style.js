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
  margin: 0px 0px ${(props) => `${props.bottom}px`} 0px;
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

export const Modal = styled.Modal``;

export const OutputBox = styled.View`
  flex: 1;

  justify-content: center;
  align-items: center;
`;

export const Output = styled.Text`
  font-family: serif;
  font-size: 30px;

  padding: 10px;
  margin-bottom: 130px;
  border-radius: 100px;

  text-align: center;

  color: #c0392b;
  background-color: #242424;
  elevation: 25;
`;

export const Img = styled.ImageBackground`
  padding: 10px;
  height: 60%;
  width: 100%;
  resize-mode: cover;
  align-items: center;
  justify-content: space-between;
`;

export const ErrorContainer = styled(Container)`
  background-color: transparent;
  justify-content: flex-start;
  align-items: center;
  padding: 20px;
`;

export const ErrorBox = styled.View`
  border-radius: 20px;
  margin-top: 25px;
  padding: 18px;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  background-color: #f3e5f5;
  elevation: 25;
`;

export const ErrorTitle = styled.Text`
  color: #c0392b;
  font-size: 18px;
  line-height: 25px;
  margin-bottom: 20px;
  font-family: pixel;
`;
