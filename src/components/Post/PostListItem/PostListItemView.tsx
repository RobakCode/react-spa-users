import React from 'react';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import Icon from '@material-ui/core/Icon';
import { PostType } from '../../../types';

import {
  PostListItem,
  PostListDelete,
  PostListGo
} from './PostListItemStyle';
function PostListItemView ({ post, deletePost }: { post: PostType, deletePost: any }) {
  const history = useHistory();

  return (
    <PostListItem container>
      <PostListDelete item xs={2} onClick={() => deletePost(post.id)}>
        <Icon>delete</Icon>
      </PostListDelete>
      <Grid item xs={8} style={{textAlign: "center"}} onClick={() => history.push(`/post/${post.id}`)}>
        <Typography variant="h6" component="p">{post.title}</Typography>
      </Grid>
      <PostListGo item xs={2} onClick={() => history.push(`/post/${post.id}`)}>
        <Icon>keyboard_arrow_right</Icon>
      </PostListGo>
    </PostListItem>
  );
}

export default PostListItemView;
