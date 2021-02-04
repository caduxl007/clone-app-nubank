import React, { useCallback, useState } from 'react';
import { ScrollView } from 'react-native';
import Icon from 'react-native-vector-icons/Feather';

import {
  Container,
  Content,
  Header,
  TextHeader,
  IconStyle,
  HeaderIcons,
  ContentScroll,
  Card,
  HeaderCard,
  TextCardHeader,
  TextTitle,
  Shadow,
  TextMoney,
  TextLimit,
  TextLimitValue,
  TextCardReward,
  TextReward,
  ButtonReward,
  TextButtonReward,
  CardOptionsContainer,
  CardOption,
  TextOption,
} from './styles';

const Dashboard: React.FC = () => {
  const [visibleBalance, setVisibleBalance] = useState(false);

  const handleVisibleBalance = useCallback(() => {
    setVisibleBalance(!visibleBalance);
  }, [visibleBalance]);

  return (
    <Container>
      <Content>
        <Header>
          <TextHeader>Olá, Carlos</TextHeader>
          <HeaderIcons>
            {visibleBalance ? (
              <IconStyle onPress={handleVisibleBalance} name="eye" />
            ) : (
              <IconStyle onPress={handleVisibleBalance} name="eye-off" />
            )}
            <IconStyle name="settings" />
          </HeaderIcons>
        </Header>
        <ContentScroll>
          <ScrollView
            overScrollMode="never"
            showsVerticalScrollIndicator={false}
            collapsable={false}
            contentContainerStyle={{ height: 680 }}
          >
            <Card>
              <HeaderCard>
                <Icon name="credit-card" size={16} color="#555" />
                <TextCardHeader>Cartão de Crédito</TextCardHeader>
              </HeaderCard>
              <TextTitle>Fatura atual</TextTitle>
              <Shadow visibleBalance={visibleBalance}>
                <TextMoney>{visibleBalance ? '' : 'R$ 10,42'}</TextMoney>
                <TextLimit>
                  {visibleBalance ? '' : 'Limite disponível'}{' '}
                  <TextLimitValue>
                    {visibleBalance ? '' : 'R$ 398,62'}
                  </TextLimitValue>
                </TextLimit>
              </Shadow>
            </Card>

            <Card>
              <HeaderCard>
                <Icon name="database" size={16} color="#555" />
                <TextCardHeader>Conta</TextCardHeader>
              </HeaderCard>
              <TextTitle>Saldo disponível</TextTitle>
              <Shadow visibleBalance={visibleBalance}>
                <TextMoney textCont>
                  {visibleBalance ? '' : 'R$ 250,98'}
                </TextMoney>
              </Shadow>
            </Card>

            <Card>
              <HeaderCard>
                <Icon name="gift" size={20} color="#cf25c6" />
                <TextCardReward>Rewards</TextCardReward>
              </HeaderCard>
              <TextReward>
                Apague compras com pontos que nunca {'\n'}expiram.
              </TextReward>
              <ButtonReward>
                <TextButtonReward>CONHECER</TextButtonReward>
              </ButtonReward>
            </Card>
          </ScrollView>
        </ContentScroll>
      </Content>

      <CardOptionsContainer
        overScrollMode="never"
        horizontal
        showsHorizontalScrollIndicator={false}
      >
        <CardOption>
          <Icon name="slack" size={20} color="#fff" />
          <TextOption>Pix</TextOption>
        </CardOption>

        <CardOption>
          <Icon name="sliders" size={20} color="#fff" />
          <TextOption>Pagar</TextOption>
        </CardOption>

        <CardOption>
          <Icon name="user-plus" size={20} color="#fff" />
          <TextOption>Indicar amigos</TextOption>
        </CardOption>

        <CardOption>
          <Icon name="dollar-sign" size={20} color="#fff" />
          <TextOption>Transferir</TextOption>
        </CardOption>

        <CardOption>
          <Icon name="dollar-sign" size={20} color="#fff" />
          <TextOption>Depositar</TextOption>
        </CardOption>

        <CardOption>
          <Icon name="dollar-sign" size={20} color="#fff" />
          <TextOption>Empréstimos</TextOption>
        </CardOption>

        <CardOption>
          <Icon name="credit-card" size={20} color="#fff" />
          <TextOption>Cartão virtual</TextOption>
        </CardOption>

        <CardOption>
          <Icon name="smartphone" size={20} color="#fff" />
          <TextOption>Recarga de celular</TextOption>
        </CardOption>

        <CardOption>
          <Icon name="tool" size={20} color="#fff" />
          <TextOption>Ajustar limite</TextOption>
        </CardOption>

        <CardOption>
          <Icon name="lock" size={20} color="#fff" />
          <TextOption>Bloquear cartão</TextOption>
        </CardOption>

        <CardOption>
          <Icon name="help-circle" size={20} color="#fff" />
          <TextOption>Me ajuda</TextOption>
        </CardOption>
      </CardOptionsContainer>
    </Container>
  );
};

export default Dashboard;
