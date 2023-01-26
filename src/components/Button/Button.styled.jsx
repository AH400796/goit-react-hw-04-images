import styled from 'styled-components';

export const LoadButton = styled.button`
  width: 200px;
  padding-top: 10px;
  padding-bottom: 10px;

  color: #ffffff;
  background-color: #314588;
  transition: background-color linear 150ms;

  border: none;
  border-radius: 5px;
  cursor: pointer;

  box-shadow: 1px 2px 5px rgb(95, 95, 95);

  &:hover,
  &:focus {
    background-color: #2c2b66;
  }
`;

export const ButtonWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding-top: 10px;
  padding-bottom: 20px;
  border: none;
`;
