// @flow
import React from 'react';

import Table from '@material-ui/core/Table';
import TableHead from '@material-ui/core/TableHead';
import TableBody from '@material-ui/core/TableBody';

import RecipesTableHeader from './elements/RecipesTableHeader';
import RecipesTableRow from './elements/RecipesTableRow';

import type { Recipes } from '../../recipesList.types';
import { availableColumns } from '../../recipesList.constans';

const RecipesTable = ({ recipes }: { recipes: Recipes }) => (
  <Table>
    <TableHead>
      <RecipesTableHeader columns={availableColumns} />
    </TableHead>
    <TableBody>
      {recipes
        .map((recipe, index) => (
          <RecipesTableRow
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
