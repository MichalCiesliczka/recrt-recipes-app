// @flow
import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import RecipesTableHeader from './elements/RecipesTableHeader';
import RecipesTableRowContainer from './elements/RecipesTableRow';

import type { Recipes } from '../../recipesList.types';
import { availableColumns } from '../../recipesList.constans';

type Props = {
  recipes: Recipes,
};

const RecipesTable = ({ recipes }: Props) => (
  <Table>
    <TableHead>
      <RecipesTableHeader columns={availableColumns} />
    </TableHead>
    <TableBody>
      {recipes
        .map((recipe, index) => (
          <RecipesTableRowContainer
            key={recipe.id}
            recipe={recipe}
            index={index}
            columns={availableColumns}
          />
        ))
      }
    </TableBody>
  </Table>
);

export default RecipesTable;
