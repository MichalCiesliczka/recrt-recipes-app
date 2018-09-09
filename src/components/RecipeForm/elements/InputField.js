// @flow
import React from 'react';
import type { FieldProps } from 'redux-form';

import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

type Props = {
  label: string,
  multiline: boolean,
} & FieldProps;

const InputField = ({
  input,
  label,
  multiline,
  meta: {
    touched,
    error,
  },
  ...custom
}: Props) => (
  <div className="input-wrapper">
    <TextField
      fullWidth
      label={label}
      multiline={multiline}
      error={touched && !!error}
      {...input}
      {...custom}
    />
    {
      touched && error && (
        <FormHelperText error>
          {error}
        </FormHelperText>
      )
    }
  </div>
);

export default InputField;
