import styled from 'styled-components/native';
import Feather from 'react-native-vector-icons/Feather';
import { RectButton } from 'react-native-gesture-handler';

interface ICardProps {
  textCont?: boolean;
}

interface IShadowProps {
  visibleBalance: boolean;
}

export const Container = styled.View`
  flex: 1;
  justify-content: center;
  background-color: #8a05be;
`;

export const Content = styled.View`
  padding: 0 15px;
  position: relative;
  top: 0;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const TextHeader = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: white;
`;

export const HeaderIcons = styled.View`
  flex-direction: row;
`;

export const ContentScroll = styled.View`
  height: 600px;
`;

export const IconStyle = styled(Feather)`
  font-size: 22px;
  border-radius: 50px;
  color: rgba(444, 444, 444, 0.9);
  background-color: rgba(255, 255, 255, 0.13);
  padding: 7px;
  margin-left: 7px;
`;

export const Card = styled.View`
  margin-bottom: 20px;
  border-radius: 5px;
  padding: 20px;
  background-color: #ffff;
`;

export const HeaderCard = styled.View`
  flex-direction: row;
  align-items: center;
`;

export const TextCardHeader = styled.Text`
  margin-left: 10px;
  font-size: 13px;
  color: #555;
`;

export const TextTitle = styled.Text`
  color: #444;
  font-size: 11px;
  margin: 10px 0;
`;

export const Shadow = styled.View<IShadowProps>`
  background-color: ${(props) => (props.visibleBalance ? '#bbb' : '#fff')};
`;

export const TextMoney = styled.Text<ICardProps>`
  color: ${(props) => (props.textCont ? 'black' : '#0879d4')};
  font-size: 21px;
  font-weight: bold;
`;

export const TextLimit = styled.Text`
  margin-top: 2px;
  font-size: 12px;
  color: black;
`;

export const TextLimitValue = styled.Text`
  color: #036b47;
  font-weight: bold;
`;

export const TextCardReward = styled.Text`
  margin-left: 10px;
  color: rgb(109, 33, 119);
  font-size: 20px;
`;

export const TextReward = styled.Text`
  margin: 15px 0;
  font-size: 14px;
  line-height: 20px;
`;

export const ButtonReward = styled(RectButton)`
  width: 85px;
  background-color: #fff;
`;

export const TextButtonReward = styled.Text`
  color: rgb(109, 33, 119);
  font-weight: bold;
  font-size: 12px;
  padding: 9px;
  border-width: 1px;
  border-color: rgb(109, 33, 119);
  border-radius: 5px;
`;

export const CardOptionsContainer = styled.ScrollView`
  position: absolute;
  bottom: 30px;
  padding: 0 15px;
`;

export const CardOption = styled(RectButton)`
  border-radius: 3px;
  width: 80px;
  height: 80px;
  background-color: rgba(255, 255, 255, 0.13);
  padding: 5px;
  margin-right: 10px;
  justify-content: space-between;
`;

export const TextOption = styled.Text`
  /* margin-top: 25px; */
  color: #fff;
  font-size: 11px;
  line-height: 15px;
`;
