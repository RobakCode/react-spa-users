import React, { Fragment, useEffect, useState } from 'react';
import { connect } from "react-redux";
import { useParams, useHistory } from "react-router-dom";
import { addPost } from '../store/actions';
import PostList from '../components/Post/PostList';
import { UserType, PostType } from '../types/types';
import { Container, Grid, Link, Dialog, DialogTitle, DialogActions, DialogContent, TextField, Button, Icon } from '@material-ui/core';

import HeaderNavigation from '../components/Navigation/HeaderNavigation';

function User({ posts, users, addPost }: { posts: PostType[], users: UserType[], addPost: any }) {
  let { id }: { id: string } = useParams();
  const history = useHistory();
  const [ dialog, setDialog ] = useState(false);
  const [ newPostTitle, setNewPostTitle ] = useState("");
  const [ newPostBody, setNewPostBody ] = useState("");
  const [ user, setUser ] = useState<UserType>();
  const [ userPosts, setUserPosts ] = useState<PostType[]>();

  useEffect(() => {
    const activeUser = users.filter( (user: UserType) => user.id === parseInt(id) );
    setUser( activeUser[0] );
  }, [ users ]); // eslint-disable-line

  useEffect(() => {
    const userPosts = posts.filter( (post: PostType) => post.userId === parseInt(id) );
    setUserPosts( userPosts);
  }, [ posts ]); // eslint-disable-line

  function backArrow() {
    return (
      <Link component="a" onClick={() => history.push('/')}>
        <Icon>arrow_back</Icon>
      </Link>
    );
  }


  function addNewPost () {
    user && addPost({ userId: user.id, title: newPostTitle, body: newPostBody });
    setDialog(false);
  }


  function dialogPopup() {
    return (
      <Fragment>
        <Icon onClick={() => setDialog(true)}>add</Icon>
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
                  value={newPostTitle}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPostTitle(event.target.value)}
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
                  value={newPostBody}
                  onChange={(event: React.ChangeEvent<HTMLInputElement>) => setNewPostBody(event.target.value)}
                />
              </Grid>
            </Grid>
          </DialogContent>
          <DialogActions>
            <Button onClick={() => setDialog(false)} color="secondary">
              Zamknij
            </Button>
            <Button onClick={() => addNewPost()} color="primary" autoFocus>
              Zapisz
            </Button>
          </DialogActions>
        </Dialog>
      </Fragment>
    )
  }

  const navigation = () => {
    return user && user.name && (
      <HeaderNavigation title={user.name} leftComponent={backArrow()} rightComponent={dialogPopup()} />
    );
  }

  return(
    <Container>
      {navigation()}
      {userPosts && <PostList posts={userPosts} />}
    </Container>
  )
}

const mapDispatchToProps = {
  addPost
}

const mapStateToProps = (state: any) => {
  return {
    users: state.users.users,
    posts: state.posts.posts
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(User);