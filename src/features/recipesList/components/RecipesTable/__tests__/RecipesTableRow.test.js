import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import { RecipesTableRow } from '../elements/RecipesTableRow';

describe('<RecipesTableRow />', () => {
  const defaultProps = {
    recipe: {
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
    index: 1,
    columns: [
      {
        label: 'Test label',
        value: 'title',
        isBig: false,
      },
      {
        label: 'Test label 2',
        value: 'description',
        isBig: true,
      },
    ],
    classes: {
      column: 'test class',
      'column--big': 'test big class',
    },
    history: {
      push: jest.fn(),
    },
  };

  it('renders without crashing', () => {
    shallow(<RecipesTableRow {...defaultProps} />);
  });

  it('should render default status', () => {
    const tree = renderer
      .create(<RecipesTableRow {...defaultProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });

  it('should redirect to recipe details on click', () => {
    const wrapper = shallow(<RecipesTableRow {...defaultProps} />);

    wrapper.simulate('click');

    expect(defaultProps.history.push.mock.calls.length).toEqual(1);
    expect(defaultProps.history.push.mock.calls[0][0]).toEqual('/recipe/1');
  });
});
