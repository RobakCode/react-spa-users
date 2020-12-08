import React from 'react';
import { Grid } from '@material-ui/core';
import PostListItem from '../PostListItem';
import { PostType } from '../../../types/types';

function PostListView ({ posts }: { posts: PostType[] }) {

  const postList = () => {
    return posts.map((post: PostType) => (<PostListItem post={post} key={post.id} />));
  }

  return (
    <Grid container>
      {postList()}
    </Grid>
  );
}

export default PostListView;
