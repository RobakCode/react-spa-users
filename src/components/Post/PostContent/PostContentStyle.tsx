import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const PostContent = styled(Grid)`
  flex-direction: column;
`;

export const PostContentTitle = styled.h2`
  font-family: "Lato";
  font-size: 48px;
  font-weight: 600;
  margin-top: 50px;
  margin-bottom: 32px;
`;

export const PostContentBody = styled.div`
  font-family: "Roboto";
  font-size: 18px;
  font-weight: 400;
  margin-bottom: 32px;
`;