import React from 'react';
import { shallow } from 'enzyme';

import RecipeForm, { validate } from '../RecipeForm';

describe('<RecipeForm />', () => {
  const defaultProps = {
    saveFunction: jest.fn(),
    handleSubmit: fn => fn,
    reset: jest.fn(),
    history: {
      push: jest.fn(),
    },
  };

  beforeEach(() => {
    const {
      saveFunction,
    } = defaultProps;

    saveFunction.mockClear();
  });

  it('should render without crashing', () => {
    shallow(<RecipeForm {...defaultProps} />);
  });

  it('should save recipe after submit button is clicked', () => {
    const wrapper = shallow(<RecipeForm {...defaultProps} />);

    const form = wrapper.find('form');
    expect(form).toHaveLength(1);
    form.simulate('submit');
    expect(defaultProps.saveFunction.mock.calls.length).toEqual(1);
  });

  it('should updated excisting recipe after submit button is clicked', () => {
    const updatedProps = {
      ...defaultProps,
      initialValues: {
        id: '1',
      },
      initialize: jest.fn(),
    };

    const wrapper = shallow(<RecipeForm {...updatedProps} />);

    const form = wrapper.find('form');
    expect(form).toHaveLength(1);
    form.simulate('submit');
    expect(defaultProps.saveFunction.mock.calls.length).toEqual(1);
    expect(defaultProps.saveFunction.mock.calls[0][0]).toEqual(updatedProps.initialValues);
  });
});

describe('Validate function for RecipeForm', () => {
  let allValues;

  beforeEach(() => {
    allValues = {
      title: 'Test Title',
      description: 'Test Description',
      steps: [
        { name: 'Step 1' },
      ],
      ingredients: [
        { amount: 2, name: 'ingr' },
      ],
    };
  });

  it('not retuan an error when all required values are given', () => {
    expect(validate(allValues)).toEqual({});
  });

  it('should return an error when no title is given', () => {
    delete allValues.title;

    expect(validate(allValues).title).toBeDefined();
  });

  it('should return an error when no description is given', () => {
    delete allValues.description;

    expect(validate(allValues).description).toBeDefined();
  });

  it('should return an error when no ingredients is given', () => {
    delete allValues.ingredients;

    expect(validate(allValues).ingredients).toBeDefined();
  });

  it('should return an error when no steps is given', () => {
    delete allValues.steps;

    expect(validate(allValues).steps).toBeDefined();
  });
});
