import { connect } from 'react-redux';

import { deletePost } from '../../../store/actions';
import { PostType } from '../../../types/types';
import PostListItemView from './PostListItemView';

const PostListItemContainer = ({ post, deletePost }: { post: PostType, deletePost: any }) => {
  return (
    <PostListItemView post={post} deletePost={deletePost} />
  )
}

const mapDispatchToProps = {
  deletePost
}

const mapStateToProps = (state: any, { post }: { post: PostType }) => {
  return {
    post
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(PostListItemContainer);