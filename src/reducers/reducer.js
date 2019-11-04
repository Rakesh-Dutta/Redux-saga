import {INCREMENT, DECREMENT, INCREMENT_5, DECREMENT_5} from './type';
export default (state = 0, action) => {
    switch (action.type) {
      case INCREMENT:
        return state + 1
      case DECREMENT:
        return state - 1
      case INCREMENT_5:
        return state + 5
      case DECREMENT_5:
        return state - 5   
      default:
        return state
    }
  }