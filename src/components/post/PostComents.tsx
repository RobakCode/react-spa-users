import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CommentType } from '../../types/types';
import PostComentsList from './PostComentsList';
import './css/PostComments.css';

function PostComents({ comments, newComment }: { comments: CommentType[], newComment: any }) {
  return (
    <Grid className="comments-list">
      <Grid container className="comments-list__header">
        <Grid item xs={6}>
          <Typography variant="subtitle1" component="p">Comments</Typography>
        </Grid>
        <Grid item xs={6} className="comments-list__header--add">
          {newComment}
        </Grid>
      </Grid>
      <Grid container>
        <PostComentsList comments={comments} />
      </Grid>
    </Grid>
  );
}

export default PostComents;
