import React from 'react';
import { Grid, Typography } from '@material-ui/core';
import { CommentType } from '../../../types';
import PostCommentsList from '../PostCommentsList';

import {
  CommentsListHeader,
  CommentsListHeaderAdd
} from './PostCommentsStyle';

function PostCommentsView({ comments, newComment }: { comments: CommentType[], newComment: any }) {
  return (
    <Grid>
      <CommentsListHeader>
        <Grid item xs={6}>
          <Typography variant="subtitle1" component="p">Comments</Typography>
        </Grid>
        <CommentsListHeaderAdd item xs={6}>
          {newComment}
        </CommentsListHeaderAdd>
      </CommentsListHeader>
      <Grid container>
        <PostCommentsList comments={comments} />
      </Grid>
    </Grid>
  );
}

export default PostCommentsView;
