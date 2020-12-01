import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box, Link } from '@material-ui/core';
import { UserType } from '../../types/types'
import './css/UserListItem.css';


function UserListItem({ user }: { user: UserType }) {
  const history = useHistory();

  return (
    <Box className="user-list__item">
      <h2 className="user-list__title">
        {user.name}
      </h2>
      <Box flexDirection="column" display="flex">
        <a className="user-list__link" href={`mailto: ${user.name}`} target="_blank">
          {user.email}
        </a>
        <a className="user-list__link" href={`tel: ${user.phone}`} target="_blank">
          {user.phone}
        </a>
        <a className="user-list__link" href={user.website} target="_blank">
          {user.website}
        </a>
      </Box>
      <Box>
        <p className="user-list__text">
          {user.city}
        </p>
        <p className="user-list__text">
          {user.street}
        </p>
        <p className="user-list__text">
          {user.companyName}
        </p>
      </Box>
      <Box>
        <button className="user-list__button" onClick={() => history.push(`/user/${user.id}`)}>Details</button>
      </Box>
    </Box>
  );
}

export default UserListItem;