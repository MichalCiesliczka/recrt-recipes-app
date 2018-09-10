// @flow
import React from 'react';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';

import RecipeForm from '../../../components/RecipeForm';

import type { Recipe } from '../../recipeDetails/recipeDetails.types';

type Props = {
  editRecipe: (data: Recipe) => void,
  recipe: Recipe,
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

const RecipeDetailsComponent = ({ editRecipe, recipe, classes }: Props) => {
  return (
    <Paper className={classes.paper}>
      <Typography component="h1" className={classes.title}>
        Create a recipe
      </Typography>
      <RecipeForm
        saveFunction={editRecipe}
        initialValues={recipe}
      />
    </Paper>
  );
};

export default withStyles(styles)(RecipeDetailsComponent);
