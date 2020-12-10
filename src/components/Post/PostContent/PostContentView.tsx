import React from 'react';
import { PostType } from '../../../types';

import {
  PostContent,
  PostContentTitle,
  PostContentBody
} from './PostContentStyle';

function PostContentView({ post }: { post: PostType }) {
  return (
    <PostContent container>
      <PostContentTitle>{post.title}</PostContentTitle>
      <PostContentBody>
        {post.body}
      </PostContentBody>
    </PostContent>
  );
}

export default PostContentView;
