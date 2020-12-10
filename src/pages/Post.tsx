import React, { Fragment, useEffect, useState } from "react";
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { Container, Grid, Typography, Link, Icon, Dialog, DialogTitle, DialogActions, DialogContent, TextField, Button } from '@material-ui/core';
import { addComment } from '../store/actions';
import { PostType, CommentType, UserType } from '../types';
import PostContent from '../components/Post/PostContent';
import PostComents from '../components/Post/PostComments';
import HeaderNavigation from '../components/Navigation/HeaderNavigation';

function Post({ posts, comments, users, addComment }: { posts: PostType[], comments: CommentType[], users: UserType[], addComment: any }) {
  let { id }: { id: string } = useParams();
  const history = useHistory();

  const [ post, setPost ] = useState<PostType>();
  const [ comment, setComment ] = useState<CommentType[]>();
  const [ user, setUser ] = useState<UserType>();
  const [ dialog, setDialog ] = useState(false);
  const [ newCommentTitle, setNewCommentTitle ] = useState("");
  const [ newCommentBody, setNewCommentBody ] = useState("");
  const [ newCommentEmail, setNewCommentEmail ] = useState("");

  useEffect(() => {
    const activePost = posts.filter( (post: PostType) => post.id === parseInt(id) );
    setPost( activePost[0] );

    const activeComments = comments.filter( (comment: CommentType) => comment.postId === parseInt(id) );
    setComment( activeComments );

    if ( post ) {
      const userPosts = users.filter( (user: UserType) => user.id === post.userId );
      setUser( userPosts[0] );
    }
  }, [ post, comments ]); // eslint-disable-line



  function backArrow() {
    return user && (
      <Link component="a" onClick={() => history.push(`/user/${user.id}`)}>
        <Icon>arrow_back</Icon>
      </Link>
    );
  }


  function rightComponent() {
    return (<div style={{display: "none"}}></div>);
  }


  function addNewComment () {
    addComment({ postId: parseInt(id), name: newCommentTitle, body: newCommentBody, email: newCommentEmail });
    setDialog(false);
  }

  function dialogPopup() {
    return (
      <Fragment>
        <Typography variant="subtitle1" component="a" onClick={() => setDialog(true)}>add comment</Typography>
        <Dialog open={dialog}>
          <DialogTitle>Dodaj post</DialogTitle>
          <DialogContent>
            <Grid container>
              <Grid item xs={12}>
                <TextField
                  id="outlined-basic"
                  label="Tytuł"
                  variant="outlined"
                  style={{width: "100%"}}
                  value={newCommentTitle}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewCommentTitle(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} style={{marginTop: 24}}>
                <TextField
                  id="outlined-basic"
                  label="E-mail"
                  variant="outlined"
                  style={{width: "100%"}}
                  value={newCommentEmail}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewCommentEmail(event.target.value)}
                />
              </Grid>
              <Grid item xs={12} style={{marginTop: 24}}>
                <TextField
                  id="standard-multiline-static"
                  label="Treśc wpisu"
                  multiline
                  variant="outlined"
                  rows={6}
                  style={{width: "100%"}}
                  value={newCommentBody}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewCommentBody(event.target.value)}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialog(false)} color="secondary">
              Zamknij
            </Button>
            <Button onClick={() => addNewComment()} color="primary" autoFocus>
              Zapisz
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }


  return (
    <Container>
      {
        user && (<HeaderNavigation title={user.name} leftComponent={backArrow()} rightComponent={rightComponent()} />)
      }
      {
        post && (<PostContent post={post} />)
      }
      {
        comment && (<PostComents comments={comment} newComment={dialogPopup()} />)
      }
    </Container>
  );
}

const mapDispatchToProps = {
  addComment
}

const mapStateToProps = (state: any) => {
  return {
    posts: state.posts.posts,
    comments: state.comments.comments,
    users: state.users.users
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Post);