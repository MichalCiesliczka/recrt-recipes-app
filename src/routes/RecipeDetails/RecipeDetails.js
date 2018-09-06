import React from 'react';
import { NavLink } from 'react-router-dom';

import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import IconButton from '@material-ui/core/IconButton';

import RecipeDetailsContainer from '../../features/recipeDetails';

const RecipeDetails = () => (
  <div>
    <AppBar position="sticky" color="default">
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
          Recipe Details
        </Typography>
      </Toolbar>
    </AppBar>
    <RecipeDetailsContainer />
  </div>
);

export default RecipeDetails;
