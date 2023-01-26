import styled from 'styled-components';

export const Header = styled.header`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;

  padding-top: 5px;
  padding-bottom: 10px;

  background-color: #314588;
  box-shadow: 1px 2px 5px rgb(95, 95, 95);
`;

export const Input = styled.input`
  padding-top: 10px;
  padding-bottom: 10px;
  padding-left: 41px;
  width: 320px;
  font-size: 16px;
  font-weight: 500;

  outline: transparent;
  border: none;
  border-radius: 3px;

  &::placeholder {
    font-size: 14px;
    font-weight: 500;
    color: #535353;
  }
`;
export const Form = styled.form`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const Button = styled.button`
  position: absolute;
  left: 0;
  top: 0;
  display: block;
  height: 100%;
  font-size: 16px;
  background-color: #ffffff;
  color: #535353;
  transition: color linear 150ms;

  border: none;
  border-radius: 3px;

  padding: 5px 8px;

  cursor: pointer;

  &:hover,
  &:focus {
    color: #020071;
  }
`;
