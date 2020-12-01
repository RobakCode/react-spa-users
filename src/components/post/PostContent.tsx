import React from 'react';
import { PostType } from '../../types/types';
import { Grid } from '@material-ui/core';
import './css/PostContent.css';

function PostContent({ post }: { post: PostType }) {
  return (
    <Grid container className="post-content">
      <h2 className="post-content__title">{post.title}</h2>
      <div className="post-content__body">
        {post.body}
      </div>
    </Grid>
  );
}

export default PostContent;
