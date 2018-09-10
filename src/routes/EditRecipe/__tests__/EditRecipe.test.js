import React from 'react';
import { shallow } from 'enzyme';

import EditRecipe from '../EditRecipe';

describe('<EditRecipeRouting />', () => {
  const defaultProp = {
    match: {
      params: {
        id: '1',
      },
    },
  };

  it('renders without crashing', () => {
    shallow(<EditRecipe {...defaultProp} />);
  });
});
