import React from 'react';
import { shallow } from 'enzyme';

import RecipesList from '../RecipesList';

describe('<RecipesListRouting />', () => {
  it('renders without crashing', () => {
    shallow(<RecipesList />);
  });
});
