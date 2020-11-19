import { CHANGE_TEXT1, CHANGE_TEXT2, CHANGE_TEXT3 } from '../actions/types'

  export const changeText1 = (str) => {
      return {
          type: CHANGE_TEXT1,
          payload: str
      }
  }
  export const changeText2 = (str) => {
    return {
        type: CHANGE_TEXT2,
        payload: str
    }
}
export const changeText3 = (str) => {
    return {
        type: CHANGE_TEXT3,
        payload: str
    }
}