import { RectButton } from 'react-native-gesture-handler';
import styled from 'styled-components/native';

interface IBalanceProps {
  color: string;
  quantity: number;
}

interface IThemeProps {
  theme: string;
}

export const Container = styled.View<IThemeProps>`
  flex: 1;
  justify-content: center;
  padding-top: 45px;
  background-color: ${(props) => (props.theme === 'light' ? '#fff' : '#000')};
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 15px;
`;

export const IconsAfter = styled(RectButton)`
  flex-direction: row;
  align-items: center;
  flex: 1;
`;

export const IconsRight = styled.View`
  flex-direction: row;
  width: 60px;
  justify-content: space-between;
  margin-right: 11px;
`;

export const ContentBalance = styled.View`
  margin-top: 5px;
  height: 480px;
  flex-direction: row;
  align-items: center;
`;

export const ContentAfter = styled.View`
  justify-content: center;
  flex: 1;
  padding-left: 25px;
`;

export const TextTitle = styled.Text`
  color: #0879d4;
  font-weight: bold;
`;

export const TextValue = styled.Text`
  color: #0879d4;
  font-size: 30px;
  margin: 5px 0;
`;

export const TextLimit = styled.Text<IThemeProps>`
  font-size: 12px;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
`;

export const TextLimitValue = styled.Text`
  color: #036b47;
  font-weight: bold;
`;

export const ContentRight = styled.View`
  height: 460px;
  width: 7px;
  margin-right: 19px;
  border-radius: 20px;
  background-color: transparent;
`;

export const Balance = styled.View<IBalanceProps>`
  height: ${(props) => `${props.quantity}%`};
  width: 7px;
  background-color: ${(props) => props.color};
`;

export const Pages = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const PageOne = styled.View<IThemeProps>`
  width: 20px;
  height: 5px;
  background-color: ${(props) => (props.theme === 'light' ? '#444' : '#fff')};
  margin-right: 5px;
  border-radius: 5px;
`;

export const PageTwo = styled.View<IThemeProps>`
  width: 5px;
  height: 5px;
  border-radius: 3px;
  background-color: ${(props) => (props.theme === 'light' ? '#444' : '#fff')};
`;

export const ContentCards = styled.ScrollView`
  margin-top: 30px;
`;

export const ContentNotifications = styled.View`
  background-color: #d1d1d1;
  padding: 20px;
`;

export const Notification = styled.View``;

export const ContentSobre = styled.View`
  flex-direction: row;
  justify-content: space-between;
  padding: 0 20px 0 35px;
`;

export const TextService = styled.Text`
  color: #555;
`;

export const TextSobre = styled.Text`
  margin-left: 15px;
`;

export const ContentValue = styled.View`
  flex-direction: row;
  justify-content: space-between;
`;

export const ViewAlign = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const LineBottom = styled.View`
  border-left-width: 0.8px;
  border-left-color: black;
  height: 40px;
  margin: 5px 10px;
  position: relative;
  top: 5px;
`;
