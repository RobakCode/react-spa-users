import React from 'react';
import { connect } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { Grid, Typography } from '@material-ui/core';
import { deletePost } from '../../store/actions';
import Icon from '@material-ui/core/Icon';
import { PostType } from '../../types/types';
import './css/PostListItem.css';

function PostListItem ({ post, deletePost }: { post: PostType, deletePost: any }) {
  const history = useHistory();

  return (
    <Grid container className="post-list__item">
      <Grid item xs={2} className="post-list__delete" onClick={() => deletePost(post.id)}>
        <Icon>delete</Icon>
      </Grid>
      <Grid item xs={8} style={{textAlign: "center"}} onClick={() => history.push(`/post/${post.id}`)}>
        <Typography variant="h6" component="p">{post.title}</Typography>
      </Grid>
      <Grid item xs={2}  className="post-list__go" onClick={() => history.push(`/post/${post.id}`)}>
        <Icon>keyboard_arrow_right</Icon>
      </Grid>
    </Grid>
  );
}

const mapDispatchToProps = {
  deletePost
}

const mapStateToProps = (state: any, { post }: { post: PostType }) => {
  return {
    post
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListItem);
