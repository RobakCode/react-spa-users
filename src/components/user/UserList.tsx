import React, { Fragment } from "react";
import { Grid } from '@material-ui/core';
import UserListItem from './UserListItem';
import { UserType, UserListType } from '../../types/types';


function UserList({ users }: UserListType) {
  const list = () => {
    return users.map((user: UserType) => (
      <Grid item xs={12} sm={6} md={4} key={user.id}>
        <UserListItem user={user} />
      </Grid>
    ))
  }

  return (
    <Fragment>
      {list()}
    </Fragment>
  );
}

export default UserList;