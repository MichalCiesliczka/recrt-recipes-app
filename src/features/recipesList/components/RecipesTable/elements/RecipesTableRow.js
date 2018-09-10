// @flow
import React from 'react';
import { compose } from 'redux';
import { withRouter } from 'react-router';

import { withStyles } from '@material-ui/core/styles';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import type { RecipesListColumns } from '../../../recipesList.types';
import type { Recipe } from '../../../../recipeDetails/recipeDetails.types';

// TODO: Add type for history React-Router object.
type Props = {
  recipe: Recipe,
  index: number,
  columns: RecipesListColumns,
  history: {
    push: (url: string) => void,
  },
  classes: {
    column: string,
    'column--big': string,
  },
};

const styles = {
  column: {
    maxWidth: 300,
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
  },
  'column--big': {
    maxWidth: 500,
  },
};

export const RecipesTableRow = ({
  recipe,
  index,
  columns,
  history,
  classes,
}: Props) => {
  const redirectToDetails = id => history.push(`/recipe/${id}`);
  return (
    <TableRow
      hover
      onClick={() => redirectToDetails(recipe.id)}
      style={{
        cursor: 'pointer',
      }}
    >
      <TableCell>{index + 1}</TableCell>
      {
        columns.map(column => (
          <TableCell
            key={column.value}
            className={`${classes.column} ${column.isBig ? classes['column--big'] : ''}`}
            big={column.isBig ? column.isBig.toString() : undefined}
          >
            {recipe[column.value]}
          </TableCell>
        ))
      }
    </TableRow>
  );
};

export default compose(
  withRouter,
  withStyles(styles),
)(RecipesTableRow);
