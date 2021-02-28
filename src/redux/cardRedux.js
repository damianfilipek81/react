import shortid from 'shortid';

// selectors
export const getCardsForColumn = ({cards}, columnId) => cards.filter(card => card.columnId == columnId);

// action name creator
const reducerName = 'cards';
const createActionName = name => `app/${reducerName}/${name}`;

// action types
export const ADD_CARDS = createActionName('ADD_CARDS');

// action creators
export const createActionAddCard = payload => ({ payload: { ...payload, id: shortid.generate() }, type: ADD_CARDS });

// reducer
export default function reducer(statePart = [], action = {}) {
  switch (action.type) {
    case ADD_CARDS:
      return [...statePart, action.payload];
    default:
      return statePart;
  }
}