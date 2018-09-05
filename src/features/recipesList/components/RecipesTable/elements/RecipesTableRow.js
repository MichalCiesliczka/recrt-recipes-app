// @flow
import React from 'react';
import styled from 'styled-components';

import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import type { Recipe, RecipesListColumns } from '../../../recipesList.types';

type Props = {
  recipe: Recipe,
  index: number,
  columns: RecipesListColumns,
};

const RecipesRowCell = styled(TableCell)`
  max-width: 300px;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: nowrap;

  ${props => props.big && `
    max-width: 500px;
  `}
`;

const RecipesTableRow = ({ recipe, index, columns }: Props) => (
  <TableRow
    hover
    // onClick={() => redirectToDetails(recipe.id)}
    style={{
      cursor: 'pointer',
    }}
  >
    <TableCell>{index + 1}</TableCell>
    {
      columns.map(column => (
        <RecipesRowCell
          key={column.value}
          big={column.isBig ? column.isBig.toString() : undefined}
        >
          {recipe[column.value]}
        </RecipesRowCell>
      ))
    }
  </TableRow>
);

export default RecipesTableRow;
