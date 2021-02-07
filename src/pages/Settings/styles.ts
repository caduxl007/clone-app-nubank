import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #8a05be;
  padding: 45px 19px 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 30px;
`;

export const TextHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const IconStyle = styled(Feather)`
  font-size: 25px;
  border-radius: 50px;
  color: rgba(444, 444, 444, 0.9);
  background-color: rgba(255, 255, 255, 0.13);
  padding: 5px;
  margin-left: 7px;
`;

export const InfoAccount = styled.View`
  align-items: center;
  justify-content: center;
`;

export const QrCode = styled.Image`
  margin-top: 10px;
  width: 80px;
  height: 80px;
  border-radius: 5px;
  margin-bottom: 15px;
`;

export const TextAccount = styled.Text`
  color: #fff;
  font-size: 12px;
`;

export const ContentOptions = styled.View`
  margin: 30px 0 20px 0;
`;

export const OptionSetting = styled.TouchableOpacity`
  flex-direction: row;
  justify-content: space-between;
  padding: 15px;
  border-top-width: 0.2px;
  border-bottom-width: 0.2px;
  border-color: white;
`;

export const InfoOption = styled.View`
  flex-direction: row;
`;

export const TextOption = styled.Text`
  margin-left: 15px;
  color: #fff;
`;

export const ButtonLogout = styled.TouchableOpacity`
  margin-bottom: 20px;
  align-items: center;
  justify-content: center;
  padding: 7px 0;
  border-width: 0.5px;
  border-color: #fff;
  border-radius: 3px;
`;

export const TextButtonLoggout = styled.Text`
  color: #fff;
  font-weight: bold;
  font-size: 13px;
`;
