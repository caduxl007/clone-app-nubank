import styled from 'styled-components/native';

interface IThemeProps {
  theme: string;
}

export const Container = styled.View<IThemeProps>`
  border-width: 1.5px;
  border-left-width: 0;
  border-color: #d1d1d1;
  width: 90px;
  height: 90px;
  justify-content: space-between;
  padding: 9px;
`;

export const TextOption = styled.Text<IThemeProps>`
  font-size: 13px;
  color: ${(props) => (props.theme === 'light' ? '#000' : '#fff')};
`;
