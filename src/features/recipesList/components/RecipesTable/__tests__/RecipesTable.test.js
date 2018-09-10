import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';
import { BrowserRouter as Router } from 'react-router-dom';

import RecipesTable from '../RecipesTable';

describe('<RecipesTable />', () => {
  const defaultProps = {
    recipes: [
      {
        id: '1',
        title: 'Test Title',
        description: 'Test Description',
        steps: [
          { name: 'Step 1' },
        ],
        ingredients: [
          { amount: 2, name: 'ingr' },
        ],
      },
    ],
  };

  it('renders without crashing', () => {
    shallow(<RecipesTable {...defaultProps} />);
  });

  it('should render default status', () => {
    const tree = renderer
      .create(
        <Router>
          <RecipesTable {...defaultProps} />
        </Router>,
      )
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
