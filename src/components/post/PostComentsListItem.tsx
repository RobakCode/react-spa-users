import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CommentType } from '../../types/types';
import './css/PostCommentsListItem.css';

function PostComentsListItem({ comment }: { comment: CommentType }) {
  return (
    <Grid container className="comments-item">
      <Grid item xs={6}>
        <h5 className="comments-item__title">{comment.name}</h5>
      </Grid>
      <Grid item xs={6} className="comments-item__email">
        <Typography variant="subtitle1" component="a">{comment.email}</Typography>
      </Grid>
      <Grid item xs={12} className="comments-item__body">
        <Typography variant="body1" component="p">{comment.body}</Typography>
      </Grid>
    </Grid>
  );
}

export default PostComentsListItem;
