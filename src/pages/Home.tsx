import React from "react";
import { Container, Grid } from '@material-ui/core';
import { connect } from "react-redux";
import UserList from '../components/user/UserList';
import { UserType } from "../types/types";


function Home({ users }: { users: UserType[] }) {
  return (
    <Container>
      <Grid container spacing={5}>
        <UserList users={users} />
      </Grid>
    </Container>
  );
}


const mapStateToProps = (state: any) => {
  return {
    users: state.users.users
  };
};

export default connect(mapStateToProps)(Home);