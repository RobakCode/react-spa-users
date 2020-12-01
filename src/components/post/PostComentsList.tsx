import React from 'react';
import { Grid } from '@material-ui/core';
import { CommentType } from '../../types/types';
import PostCommentsListItem from './PostComentsListItem';

function PostComentsList({ comments }: { comments: CommentType[] }) {


  const commentList = () => {
    return comments.map(( comment: CommentType ) => (<PostCommentsListItem comment={comment} key={comment.id} />));
  }

  return (
    <Grid container>
      { commentList() }
    </Grid>
  );
}

export default PostComentsList;
