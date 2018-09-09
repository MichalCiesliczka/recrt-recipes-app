import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import CreateRecipeContainer from '../../features/createRecipe';

const CreateRecipe = () => (
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
            <NavLink to="/">
              {'<'}
            </NavLink>
          </IconButton>
          Create Recipe
        </Typography>
      </Toolbar>
    </AppBar>
    <CreateRecipeContainer />
  </div>
);

export default CreateRecipe;
