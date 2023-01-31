import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native';
import { RFValue } from 'react-native-responsive-fontsize';

export const Container = styled(TouchableOpacity)`
  background-color: #0e7490;

  height: ${RFValue(50)}px;
  align-items: center;
  justify-content: center;
  border-radius: 15px;
`;
export const ButtonText = styled.Text`
  font-family: 'Rubik_500Medium';
  font-size: ${RFValue(15)}px;
  color: #ffffff;
`;