import React from 'react';
import { shallow } from 'enzyme';

import CreateRecipe from '../CreateRecipe';

describe('<CreateRecipeRouting />', () => {
  it('renders without crashing', () => {
    shallow(<CreateRecipe />);
  });
});
