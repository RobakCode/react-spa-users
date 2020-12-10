import React, { useEffect } from 'react';
import { connect } from "react-redux";
import { UserType, PostType, CommentType } from './types';
import Home from './pages/Home';
import User from './pages/User';
import Post from './pages/Post';
import { setUsers, setPosts, setComments } from './store/actions';
import { getUsers, getPosts, getComments } from './plugins/axios';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom';

function App({
    posts,
    setPosts,
    users,
    setUsers,
    comments,
    setComments
  }:{
    posts: PostType[],
    setPosts: any,
    users: UserType[],
    setUsers: any,
    comments: CommentType[],
    setComments: any
}) {



  useEffect(() => {
    const setLocalUsers = async () => {
      const apiUsers = await getUsers();
      setUsers( apiUsers );
    }
    if ( users && !users.length ) {
      setLocalUsers();
    }
  }, [ users ]); // eslint-disable-line



  useEffect(() => {
    const setLocalPosts = async () => {
      const apiPosts = await getPosts();
      setPosts( apiPosts );
    }
    if ( posts && !posts.length ) {
      setLocalPosts();
    }
  }, [ posts ]); // eslint-disable-line



  useEffect(() => {
    const setLocalComments = async () => {
      const apiComments = await getComments();
      setComments( apiComments );
    }
    if ( comments && !comments.length ) {
      setLocalComments();
    }
  }, [ comments ]); // eslint-disable-line



  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/user/:id" component={User} />
        <Route path="/post/:id" component={Post} />
      </Switch>
    </Router>
  );
}

const mapDispatchToProps = {
  setUsers,
  setPosts,
  setComments
};

const mapStateToProps = (state: any) => {
  return {
    users: state.users.users,
    posts: state.posts.posts,
    comments: state.comments.comments
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
