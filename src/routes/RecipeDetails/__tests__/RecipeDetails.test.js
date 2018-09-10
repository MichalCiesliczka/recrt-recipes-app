import React from 'react';
import { shallow } from 'enzyme';

import RecipeDetails from '../RecipeDetails';

describe('<RecipeDetailsRouting />', () => {
  it('renders without crashing', () => {
    shallow(<RecipeDetails />);
  });
});
