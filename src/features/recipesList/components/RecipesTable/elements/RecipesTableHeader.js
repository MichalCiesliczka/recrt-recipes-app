import React from 'react';
import TableCell from '@material-ui/core/TableCell';
import TableRow from '@material-ui/core/TableRow';

import type { RecipesListColumns } from '../../../recipesList.types';

type Props = {
  columns: RecipesListColumns,
};

const RecipesTableHeader = ({ columns }: Props) => (
  <TableRow>
    <TableCell>
      No.
    </TableCell>
    {
      columns.map(column => (
        <TableCell
          key={column.value}
        >
          {column.label}
        </TableCell>
      ))
    }
  </TableRow>
);

export default RecipesTableHeader;
