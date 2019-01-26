import { SELECT } from '../actions/select'

const reducer = (state = [], action = {}) => {
  switch (action.type) {
    case SELECT:
      return [...state, action.payload]
    default:
        return state
}
}
  
  export default reducer
