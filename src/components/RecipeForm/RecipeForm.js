// @flow
import React, { PureComponent } from 'react';
import {
  Field,
  FieldArray,
} from 'redux-form';
import type { FormProps } from 'redux-form';
import v4 from 'uuid/v4';

import Button from '@material-ui/core/Button';

import InputField from './elements/InputField';
import renderArray from './elements/renderArray';

import type { Recipe } from '../../features/recipeDetails/recipeDetails.types';

type Props = {
  saveFunction: (data: Recipe) => void,
  history: {
    push: (url: string) => void,
  },
} & FormProps;

export const validate = (values) => {
  const errors = {};

  if (!values.title) {
    errors.title = 'You should insert the title';
  }

  if (!values.description) {
    errors.description = 'You should insert the description';
  }

  if (!values.ingredients || !values.ingredients.length) {
    errors.ingredients = { _error: 'You should insert the ingredients' };
  }

  if (!values.steps || !values.steps.length) {
    errors.steps = { _error: 'You should insert the steps' };
  }

  return errors;
};

class RecipeForm extends PureComponent<Props> {
  componentDidMount() {
    const { initialValues, initialize } = this.props;
    if (initialValues) {
      initialize(initialValues);
    }
  }

  handleFormSubmit = (values) => {
    const {
      saveFunction,
      reset,
      history,
      initialValues,
    } = this.props;
    const newId = initialValues ? initialValues.id : v4();
    const preparedData = {
      ...values,
      id: newId,
    };

    saveFunction(preparedData);
    reset();
    history.push(`/recipe/${newId}`);
  };

  render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit(this.handleFormSubmit)}>
        <Field
          label="Title"
          name="title"
          component={InputField}
          type="text"
        />
        <Field
          label="Description"
          name="description"
          multiline
          component={InputField}
          type="text"
        />
        <FieldArray
          title="Ingredients"
          buttonLabel="Add Ingredient"
          elements={['amount', 'name']}
          name="ingredients"
          component={renderArray}
        />
        <FieldArray
          title="Steps"
          buttonLabel="Add Step"
          elements={['name']}
          name="steps"
          component={renderArray}
        />
        <Button
          type="submit"
          color="primary"
        >
          Save recipe
        </Button>
      </form>
    );
  }
}

export default RecipeForm;
