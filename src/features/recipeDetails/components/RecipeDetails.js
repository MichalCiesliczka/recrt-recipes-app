// @flow
import React, { Fragment } from 'react';
import { Redirect } from 'react-router-dom';

import { withStyles } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Typography from '@material-ui/core/Typography';
import Divider from '@material-ui/core/Divider';
import Grid from '@material-ui/core/Grid';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import Button from '@material-ui/core/Button';

import RecipeCard from './elements/RecipeCard';

import type { Recipe } from '../recipeDetails.types';

type Props = {
  recipe: Recipe,
  deleteRecipe: (id: string) => void,
  classes: {
    paper: string,
    title: string,
    desc: string,
    divider: string,
    card: string,
    deleteButton: string,
  },
};

const styles = {
  paper: {
    padding: 30,
    maxWidth: 900,
    margin: '30px auto',
  },
  title: {
    fontSize: 30,
  },
  desc: {
    fontSize: 15,
  },
  divider: {
    margin: '10px 0 25px',
  },
  card: {
    width: '50%',
  },
  deleteButton: {
    marginTop: 30,
  },
};

const RecipeDetailsComponent = ({ recipe, deleteRecipe, classes }: Props) => {
  const handleDelete = () => {
    deleteRecipe(recipe.id);
  };

  return (
    <Fragment>
      {
        recipe ? (
          <Paper className={classes.paper}>
            <Typography component="h1" className={classes.title}>
              {recipe.title}
            </Typography>
            <Divider className={classes.divider} />
            <Typography component="h3" className={classes.desc}>
              {recipe.description}
            </Typography>
            <Divider className={classes.divider} />
            <Grid container spacing={16}>
              <Grid item className={classes.card}>
                <RecipeCard
                  title="Ingredients"
                >
                  <List dense>
                    {
                      recipe.ingredients.map(ingredient => (
                        <ListItem
                          key={ingredient.name}
                        >
                          <ListItemText
                            primary={`${ingredient.amount} ${ingredient.name}`}
                          />
                        </ListItem>
                      ))
                    }
                  </List>
                </RecipeCard>
              </Grid>
              <Grid item className={classes.card}>
                <RecipeCard
                  title="Steps"
                >
                  <List dense>
                    {
                      recipe.steps.map(step => (
                        <ListItem
                          key={step}
                        >
                          <ListItemText
                            primary={step}
                          />
                        </ListItem>
                      ))
                    }
                  </List>
                </RecipeCard>
              </Grid>
            </Grid>
            <Button
              color="secondary"
              variant="contained"
              onClick={handleDelete}
              className={classes.deleteButton}
            >
              Delete this recipe
            </Button>
          </Paper>
        ) : (
          <Redirect to="/" />
        )
      }
    </Fragment>
  );
};

export default withStyles(styles)(RecipeDetailsComponent);
