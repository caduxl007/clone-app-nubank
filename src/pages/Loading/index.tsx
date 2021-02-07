import React from 'react';
import { ActivityIndicator } from 'react-native';

import nubankLogo from '../../images/nubank-logo.png';

import { Container, Logo, LoadingActivity } from './styles';

const Loading: React.FC = () => {
  return (
    <Container>
      <Logo source={nubankLogo} />
      <LoadingActivity>
        <ActivityIndicator size="large" color="white" />
      </LoadingActivity>
    </Container>
  );
};

export default Loading;
