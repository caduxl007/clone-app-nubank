import React, { useMemo } from 'react';
import { ScrollView, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useTheme } from '../../hooks/theme';

import Card from '../../components/CardOption';

import {
  Container,
  Header,
  IconsAfter,
  IconsRight,
  ContentBalance,
  ContentAfter,
  TextTitle,
  TextValue,
  TextLimit,
  TextLimitValue,
  ContentRight,
  Balance,
  Pages,
  PageOne,
  PageTwo,
  ContentCards,
  ContentNotifications,
  Notification,
  ContentSobre,
  TextService,
  TextSobre,
  ContentValue,
  ViewAlign,
  LineBottom,
} from './styles';

const CreditCard: React.FC = () => {
  const { theme } = useTheme();

  const navigation = useNavigation();

  const colorIcon = useMemo(() => {
    if (theme === 'light') {
      return '#666';
    }

    return '#fff';
  }, [theme]);

  return (
    <Container theme={theme}>
      <Header>
        <IconsAfter onPress={() => navigation.goBack()}>
          <Icon name="chevron-left" size={20} color={colorIcon} />
          <Icon name="credit-card" size={22} color={colorIcon} />
        </IconsAfter>

        <IconsRight>
          <Icon name="search" size={25} color={colorIcon} />
          <Icon name="help-circle" size={25} color={colorIcon} />
        </IconsRight>
      </Header>

      <ScrollView overScrollMode="never" showsHorizontalScrollIndicator={false}>
        <ContentBalance>
          <ContentAfter>
            <TextTitle>Fatura Atual</TextTitle>
            <TextValue>R$ 50,42</TextValue>
            <TextLimit theme={theme}>
              Limite disponível <TextLimitValue>R$ 398,62</TextLimitValue>
            </TextLimit>
          </ContentAfter>
          <ContentRight>
            <Balance color="#036b47" quantity={35} />
            <Balance color="#0879d4" quantity={15} />
            <Balance color="#ed570c" quantity={50} />
          </ContentRight>
        </ContentBalance>

        <Pages>
          <PageOne theme={theme} />
          <PageTwo theme={theme} />
        </Pages>

        <ContentCards
          horizontal
          overScrollMode="never"
          showsHorizontalScrollIndicator={false}
        >
          <Card icon="sliders">Pagar fatura</Card>
          <Card icon="list">Resumo de faturas</Card>
          <Card icon="tool">Ajustar limite</Card>
          <Card icon="credit-card">Cartão Virtual</Card>
          <Card icon="lock">Bloquear cartão</Card>
          <Card icon="user-plus">Indicar amigos</Card>
        </ContentCards>

        <ContentNotifications>
          <Notification>
            <ContentSobre>
              <TextService>Supermercado</TextService>
              <TextService>Sexta</TextService>
            </ContentSobre>
            <ContentValue>
              <ViewAlign>
                <Icon name="shopping-cart" size={20} color="#555" />
                <TextSobre>Local de compra</TextSobre>
              </ViewAlign>
              <ViewAlign>
                <Text>R$ 8,00</Text>
                <Icon name="chevron-right" size={20} color="#555" />
              </ViewAlign>
            </ContentValue>
            <LineBottom />
          </Notification>

          <Notification>
            <ContentSobre>
              <TextService>Supermercado</TextService>
              <TextService>Sexta</TextService>
            </ContentSobre>
            <ContentValue>
              <ViewAlign>
                <Icon name="shopping-cart" size={20} color="#555" />
                <TextSobre>Local de compra</TextSobre>
              </ViewAlign>
              <ViewAlign>
                <Text>R$ 8,00</Text>
                <Icon name="chevron-right" size={20} color="#555" />
              </ViewAlign>
            </ContentValue>
            <LineBottom />
          </Notification>

          <Notification>
            <ContentSobre>
              <TextService>Supermercado</TextService>
              <TextService>Sexta</TextService>
            </ContentSobre>
            <ContentValue>
              <ViewAlign>
                <Icon name="shopping-cart" size={20} color="#555" />
                <TextSobre>Local de compra</TextSobre>
              </ViewAlign>
              <ViewAlign>
                <Text>R$ 8,00</Text>
                <Icon name="chevron-right" size={20} color="#555" />
              </ViewAlign>
            </ContentValue>
          </Notification>
        </ContentNotifications>
      </ScrollView>
    </Container>
  );
};

export default CreditCard;
