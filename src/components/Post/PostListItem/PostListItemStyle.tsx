import styled from 'styled-components';
import { Grid } from '@material-ui/core';

export const PostListItem = styled(Grid)`
  background-color: #FFE9F9;
  border-radius: 8px;
  margin: 12px 0;
  padding: 24px;
  color: #305F72;
  cursor: pointer;
`;

export const PostListDelete = styled(Grid)`
  font-size: 32px;
  color: #F18C8E;
`;

export const PostListGo = styled(Grid)`
  display: flex;
  justify-content: flex-end;
  font-size: 32px;
  color: #F18C8E;
`;