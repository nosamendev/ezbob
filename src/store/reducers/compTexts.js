import { COMP_TEXTS, CHANGE_TEXT1, CHANGE_TEXT2, CHANGE_TEXT3 } from '../actions/types';
  
  const INITIAL_STATE = {
    text1: '',
    text2: '',
    text3: ''
  };
  
  const compTexts = (state = INITIAL_STATE, action) => {
    switch (action.type) {
      case COMP_TEXTS:
        state.text1 = 'Component1';
        state.text2 = 'Component2';
        state.text3 = 'Component3';
        return { ...state};
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
  