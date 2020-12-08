import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const CommentsItem = styled(Grid)`
  padding: 26px;
  margin-bottom: 26px;
  border-radius: 16px;
  background-color: #2E001F;
`;

export const CommentsItemTitle = styled.h5`
  font-family: "Lato";
  margin: 0 0 12px 0;
  font-weight: 900;
  font-size: 22px;
  color: #fff;
`;

export const CommentsItemEmail = styled(Grid)`
  text-align: right;
  color: #fff;
`;

export const CommentsItemBody = styled(Grid)`
  margin-top: 16px;
  font-weight: 400;
  color: #fff;
`;
