// @flow
import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import EditRecipeContainer from '../../features/editRecipe';

type Props = {
  match: {
    params: {
      id: string,
    },
  },
};

const EditRecipe = ({ match: { params: { id } } }: Props) => (
  <div>
    <AppBar position="static" color="default">
      <Toolbar>
        <Typography
          variant="title"
          color="inherit"
          align="center"
          style={{
            width: '100%',
          }}
        >
          <IconButton color="inherit">
            <NavLink to={`/recipe/${id}`}>
              {'<'}
            </NavLink>
          </IconButton>
          Edit recipe #
          {id}
        </Typography>
      </Toolbar>
    </AppBar>
    <EditRecipeContainer />
  </div>
);

export default EditRecipe;
