import React, { useMemo } from 'react';
import Icon from 'react-native-vector-icons/Feather';

import { useTheme } from '../../hooks/theme';

import { Container, TextOption } from './styles';

interface ICardOption {
  icon: string;
}

const CardOption: React.FC<ICardOption> = ({ icon, children }) => {
  const { theme } = useTheme();

  const colorIcon = useMemo(() => {
    if (theme === 'light') {
      return '#8a05be';
    }

    return '#fff';
  }, [theme]);

  return (
    <Container theme={theme}>
      <Icon name={icon} size={20} color={colorIcon} />
      <TextOption theme={theme}>{children}</TextOption>
    </Container>
  );
};

export default CardOption;
