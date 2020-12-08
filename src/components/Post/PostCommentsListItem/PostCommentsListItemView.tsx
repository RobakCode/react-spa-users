import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CommentType } from '../../../types/types';

import {
  CommentsItem,
  CommentsItemTitle,
  CommentsItemEmail,
  CommentsItemBody
} from './PostComentsListItemStyle';

function PostComentsListItemView({ comment }: { comment: CommentType }) {
  return (
    <CommentsItem container>
      <Grid item xs={6}>
        <CommentsItemTitle>{comment.name}</CommentsItemTitle>
      </Grid>
      <CommentsItemEmail item xs={6}>
        <Typography variant="subtitle1" component="a">{comment.email}</Typography>
      </CommentsItemEmail>
      <CommentsItemBody item xs={12}>
        <Typography variant="body1" component="p">{comment.body}</Typography>
      </CommentsItemBody>
    </CommentsItem>
  );
}

export default PostComentsListItemView;
