// selectors

export const getSearchString = (state) => state.searchString;
export const countAllCards = ({ cards }) => cards.length;
export const countVisibleCards = ({ cards, searchString }) => cards.filter((card) => new RegExp(searchString, 'i').test(card.title)).length; 

// action name creator

const reducerName = 'searchString';
const createActionName = name => `app/${reducerName}/${name}`;

// actions types

export const SEARCH_STRING = createActionName('CHANGE');

// action creators

export const createAction_changeSearchString = payload => ({ payload, type: SEARCH_STRING });

// reducer

export default function reducer(statePart = '', action = {}) {
  switch (action.type) {
    case SEARCH_STRING:
      return statePart, action.payload;
    default:
      return statePart;
  }
}

