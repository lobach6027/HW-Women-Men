const defaultState = [];
//const defaultState = localStorage.getItem('reduxState')?JSON.parse(localStorage.getItem('reduxState')):[]

console.log(defaultState);
console.log(JSON.parse(localStorage.getItem("reduxState")));

export const usersReducer = (state = defaultState, action) => {
  if (action.type === "ADD") {
    return [...state, action.payload];
  } else if (action.type === "DELETE") {
    return state.filter((item) => item.id !== action.payload);
  } else {
    return state;
  }
};
