// @flow
import React from 'react';
import { Field } from 'redux-form';
import type { FieldArrayProps } from 'redux-form';

import { withStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import FormHelperText from '@material-ui/core/FormHelperText';

import InputField from './InputField';

type Props = {
  title: string,
  buttonLabel: string,
  elements: string[],
  classes: {
    container: string,
    list: string,
    removeButton: string,
  },
} & FieldArrayProps;

const styles = {
  container: {
    margin: '20px 0',
  },
  list: {
    position: 'relative',
    margin: 30,
    paddingTop: 20,
  },
  removeButton: {
    position: 'absolute',
    right: 0,
    top: 0,
  },
};

const renderArray = ({
  title,
  buttonLabel,
  fields,
  elements,
  classes,
  meta,
}: Props) => (
  <div className={classes.container}>
    <Typography component="p">
      {title}
    </Typography>
    {
      meta.submitFailed && meta.error && (
        <FormHelperText error>
          {meta.error}
        </FormHelperText>
      )
    }
    <Button
      type="button"
      variant="contained"
      className="add-button"
      onClick={() => fields.push({})}
    >
      {buttonLabel}
    </Button>
    {
      fields.map((field, index) => (
        /* eslint-disable react/no-array-index-key */
        <div key={index} className={classes.list}>
          <Button
            type="button"
            className={classes.removeButton}
            onClick={() => fields.remove(index)}
            color="secondary"
            variant="fab"
            mini
          >
            X
          </Button>
          {
            elements.map(element => (
              <Field
                key={element}
                name={`${field}.${element}`}
                component={InputField}
                label={element}
              />
            ))
          }
        </div>
      ))
    }
  </div>
);

export default withStyles(styles)(renderArray);
