import * as t from './BuyType';

function reducer(state, action) {
  switch (action.type) {
    case t.SET_IS_ID: {
      return {
        ...state,
        id: action.value,
      };
    }
    case t.SET_IS_IN_CART: {
      return {
        ...state,
        inCart: action.value,
      };
    }
    case t.SET_IS_FREEZED: {
      return {
        ...state,
        isFreezed: action.value,
      };
    }
  }
}

export { reducer };
