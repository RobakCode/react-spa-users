import styled from 'styled-components';
import { Box } from '@material-ui/core';

export const UserListItem = styled(Box)`
  background-color: #EAF9FE;
  border-radius: 8px;
  padding: 24px;
`;

export const UserListItemTitle = styled.h2`
  font-family: "Lato";
  font-weight: 900;
  font-size: 32px;
  color: #305F72;
  margin: 0 0 24px 0;
`;

export const UserListItemLink = styled.a`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  color: #305F72;
  margin-bottom: 8px;
  &:hover,
  &:active {
    color: #305F72;
  }
`;

export const UserListItemText = styled.p`
  font-family: "Roboto";
  font-weight: 400;
  font-size: 18px;
  color: #F18C8E;
  margin: 0;
`;

export const UserListItemButton = styled.button`
  display: block;
  width: 100%;
  font-family: "Lato";
  font-weight: 900;
  font-size: 20px;
  text-transform: uppercase;
  text-decoration: none;
  text-align: center;
  margin-top: 24px;
  color: #305F72;
  background-color: #fff;
  border-radius: 8px;
  border: none;
  padding: 16px;
  outline: none;
  cursor: pointer;
`;