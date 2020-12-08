import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const StyledGrid = styled(Grid)`
  background-color: #EC8689;
  border-radius: 8px;
  padding: 24px;
  margin-bottom: 32px;
  color: #fff;
`;


export const NavigationButtonWrap = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  background-image: linear-gradient(#F18C8E, #F19895);
  border-radius: 4px;
  width: 48px;
  height: 48px;
  color: #fff;
  cursor: pointer;
  & *,
  & *:hover {
    color: #fff;
  }
`;


export const NavigationTitle = styled.h1`
  font-family: "Lato";
  font-weight: 900;
  font-size: 48px;
  line-height: 1.2;
  text-align: center;
`;