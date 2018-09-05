import { handleActions } from 'redux-actions';

import {
  updateRecipesList,
  LOCAL_STORAGE_KEY,
} from './recipesList.actions';

// ------------------------------------
// State
// ------------------------------------
export const initialState = {
  recipesList: JSON.parse(localStorage.getItem(LOCAL_STORAGE_KEY)) || [],
};

// ------------------------------------
// Reducer
// ------------------------------------
export default handleActions({
  [updateRecipesList](state, { payload }) {
    return {
      ...state,
      recipesList: payload,
    };
  },
}, initialState);
