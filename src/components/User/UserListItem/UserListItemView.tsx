import React from 'react';
import { useHistory } from 'react-router-dom';
import { Box } from '@material-ui/core';
import { UserType } from '../../../types'

import {
  UserListItem,
  UserListItemTitle,
  UserListItemLink,
  UserListItemText,
  UserListItemButton
} from './UserListItemStyle';


function UserListItemView({ user }: { user: UserType }) {
  const history = useHistory();

  return (
    <UserListItem className="user-list__item">
      <UserListItemTitle>
        {user.name}
      </UserListItemTitle>
      <Box flexDirection="column" display="flex">
        <UserListItemLink href={`mailto: ${user.name}`} target="_blank">
          {user.email}
        </UserListItemLink>
        <UserListItemLink href={`tel: ${user.phone}`} target="_blank">
          {user.phone}
        </UserListItemLink>
        <UserListItemLink href={user.website} target="_blank">
          {user.website}
        </UserListItemLink>
      </Box>
      <Box>
        <UserListItemText>
          {user.city}
        </UserListItemText>
        <UserListItemText>
          {user.street}
        </UserListItemText>
        <UserListItemText>
          {user.companyName}
        </UserListItemText>
      </Box>
      <Box>
        <UserListItemButton onClick={() => history.push(`/user/${user.id}`)}>Details</UserListItemButton>
      </Box>
    </UserListItem>
  );
}

export default UserListItemView;