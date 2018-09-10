import React from 'react';
import { shallow } from 'enzyme';
import renderer from 'react-test-renderer';

import RecipesTableHeader from '../elements/RecipesTableHeader';

describe('<RecipesTableHeader />', () => {
  const defaultProps = {
    columns: [
      {
        label: 'Test label',
        value: 'testValue',
        isBig: false,
      },
      {
        label: 'Test label 2',
        value: 'testValue2',
        isBig: true,
      },
    ],
  };

  it('renders without crashing', () => {
    shallow(<RecipesTableHeader {...defaultProps} />);
  });

  it('should render default status', () => {
    const tree = renderer
      .create(<RecipesTableHeader {...defaultProps} />)
      .toJSON();

    expect(tree).toMatchSnapshot();
  });
});
