import React, { useCallback } from 'react';
import { ScrollView } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import Icon from 'react-native-vector-icons/Feather';

import { useTheme } from '../../hooks/theme';

import qrCode from '../../images/qrcode.png';

import {
  Container,
  Header,
  TextHeader,
  ContentIcons,
  IconStyle,
  InfoAccount,
  QrCode,
  TextAccount,
  ContentOptions,
  OptionSetting,
  InfoOption,
  TextOption,
  ButtonLogout,
  TextButtonLoggout,
} from './styles';

const Settings: React.FC = () => {
  const navigate = useNavigation();
  const { theme, themeMode } = useTheme();

  const handleNavigateBack = useCallback(() => {
    navigate.goBack();
  }, [navigate]);

  const handleSetThemeMode = useCallback(() => {
    themeMode();
  }, [themeMode]);

  return (
    <Container theme={theme}>
      <Header>
        <TextHeader>Olá, Carlos</TextHeader>
        <ContentIcons>
          <IconStyle onPress={handleSetThemeMode} name="sun" />
          <IconStyle onPress={handleNavigateBack} name="x" />
        </ContentIcons>
      </Header>

      <ScrollView
        overScrollMode="never"
        showsVerticalScrollIndicator={false}
        collapsable={false}
      >
        <InfoAccount>
          <QrCode source={qrCode} />
          <TextAccount>
            Agência 0000 Conta 00000000-0 {'\n'}Banco 000 - Nu Pagamentos S.A.
          </TextAccount>
        </InfoAccount>

        <ContentOptions>
          <OptionSetting>
            <InfoOption>
              <Icon name="help-circle" size={18} color="white" />
              <TextOption>Me ajuda</TextOption>
            </InfoOption>

            <Icon name="chevron-right" size={16} color="white" />
          </OptionSetting>

          <OptionSetting>
            <InfoOption>
              <Icon name="credit-card" size={18} color="white" />
              <TextOption>Ativar função débito</TextOption>
            </InfoOption>

            <Icon name="chevron-right" size={16} color="white" />
          </OptionSetting>

          <OptionSetting>
            <InfoOption>
              <Icon name="user" size={18} color="white" />
              <TextOption>Perfil</TextOption>
            </InfoOption>

            <Icon name="chevron-right" size={16} color="white" />
          </OptionSetting>

          <OptionSetting>
            <InfoOption>
              <Icon name="dollar-sign" size={18} color="white" />
              <TextOption>Configurar conta</TextOption>
            </InfoOption>

            <Icon name="chevron-right" size={16} color="white" />
          </OptionSetting>

          <OptionSetting>
            <InfoOption>
              <Icon name="credit-card" size={18} color="white" />
              <TextOption>Minhas chaves Pix</TextOption>
            </InfoOption>

            <Icon name="chevron-right" size={16} color="white" />
          </OptionSetting>

          <OptionSetting>
            <InfoOption>
              <Icon name="credit-card" size={18} color="white" />
              <TextOption>Configurar Cartão</TextOption>
            </InfoOption>

            <Icon name="chevron-right" size={16} color="white" />
          </OptionSetting>

          <OptionSetting>
            <InfoOption>
              <Icon name="layout" size={18} color="white" />
              <TextOption>Pedir conta PJ</TextOption>
            </InfoOption>

            <Icon name="chevron-right" size={16} color="white" />
          </OptionSetting>

          <OptionSetting>
            <InfoOption>
              <Icon name="mail" size={18} color="white" />
              <TextOption>Configurar notificações</TextOption>
            </InfoOption>

            <Icon name="chevron-right" size={16} color="white" />
          </OptionSetting>

          <OptionSetting>
            <InfoOption>
              <Icon name="smartphone" size={18} color="white" />
              <TextOption>Configurações do app</TextOption>
            </InfoOption>

            <Icon name="chevron-right" size={16} color="white" />
          </OptionSetting>

          <OptionSetting>
            <InfoOption>
              <Icon name="help-circle" size={18} color="white" />
              <TextOption>Sobre</TextOption>
            </InfoOption>

            <Icon name="chevron-right" size={16} color="white" />
          </OptionSetting>
        </ContentOptions>

        <ButtonLogout>
          <TextButtonLoggout>SAIR DO APP</TextButtonLoggout>
        </ButtonLogout>
      </ScrollView>
    </Container>
  );
};

export default Settings;
