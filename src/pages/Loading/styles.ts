import styled from 'styled-components/native';

interface ITheme {
  theme: string;
}

export const Container = styled.View<ITheme>`
  flex: 1;
  justify-content: center;
  align-items: center;
  background-color: ${(props) =>
    props.theme === 'light' ? '#8a05be' : 'black'};
`;

export const Logo = styled.Image`
  width: 130px;
  height: 120px;
`;

export const LoadingActivity = styled.View`
  position: absolute;
  bottom: 50px;
`;
