// @flow
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import RecipeForm from '../../../components/RecipeForm/RecipeForm';

import type { Recipe } from '../../recipeDetails/recipeDetails.types';

type Props = {
  createRecipe: (data: Recipe) => void,
  classes: {
    paper: string,
    title: string,
  }
}

const styles = {
  paper: {
    padding: 30,
    maxWidth: 900,
    margin: '30px auto',
  },
  title: {
    fontSize: 30,
  },
};

const RecipeDetailsComponent = ({ createRecipe, classes }: Props) => {
  return (
    <Paper className={classes.paper}>
      <Typography component="h1" className={classes.title}>
        Create a recipe
      </Typography>
      <RecipeForm
        saveFunction={createRecipe}
      />
    </Paper>
  );
};

export default withStyles(styles)(RecipeDetailsComponent);
