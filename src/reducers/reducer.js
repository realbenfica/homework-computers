import { SELECT } from '../actions/select'

const data = {
  "Ivel Z3": {
    manufacturer: "Ivasim",
    year: 1969,
    origin: "Croatia"
  },
  "Bally Astrocade": {
    manufacturer: "Bally Consumer Products",
    year: 1977,
    origin: "USA"
  },
  "Sord M200 Smart Home Computer": {
    manufacturer: "Sord Computer Corporation",
    year: 1971,
    origin: "Japan"
  },
  "Commodore 64": {
    manufacturer: "Commodore",
    year: 1982,
    origin: "USA"
  }
}
const initialState = Object.keys(data).map(i => data[i])

const reducer = (state = initialState, action = {}) => {
  switch (action.type) {
    case SELECT:
      return [...state, action.payload]
    default:
        return state
}
}
  
  export default reducer
