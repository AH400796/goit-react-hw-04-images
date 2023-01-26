import styled from 'styled-components';

export const ListItem = styled.li`
  overflow: hidden;
  flex-basis: calc((100% - 15px * 3) / 4);

  border-radius: 5px;
  cursor: zoom-in;
  transition: transform linear 250ms;

  &:hover,
  &:focus {
    transform: scale(1.03);
  }
`;

export const Image = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  object-fit: cover;
`;
