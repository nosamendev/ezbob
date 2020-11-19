import { CHANGE_TEXT1, CHANGE_TEXT2, CHANGE_TEXT3 } from '../actions/types';
  
  const INITIAL_STATE = {
    text1: '',
    text2: '',
    text3: ''
  };
  
  const compTexts = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case CHANGE_TEXT1:
        return {...state, text1: action.payload};
      case CHANGE_TEXT2:
        return {...state, text2: action.payload}
      case CHANGE_TEXT3:
        return {...state, text3: action.payload}

      default:
        return state;
    }
  };
  
  export default compTexts;
  