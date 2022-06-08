/* eslint-disable no-unreachable */
const addItem = [];

const addItems = (state = addItem, action) => {
  switch (action.type) {
    case "ADDITEM":
      return [...state, action.payload];
      // eslint-disable-next-line no-unreachable
      break;

    case "DELITEM":
      return (state = state.filter((x) => {
        return x.id !== action.payload.id;
      }));
      break;

    default:
      return state;
      break;
  }
};

export default addItems;
