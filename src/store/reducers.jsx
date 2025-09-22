import { combineReducers } from "redux";

const themeReducer = (state = { darkMode: false, collapsed: false }, action) => {
  switch (action.type) {
    case "TOGGLE_THEME":
      return { ...state, darkMode: !state.darkMode };
    case "TOGGLE_COLLAPSE":
      return { ...state, collapsed: !state.collapsed };
    default:
      return state;
  }
};

const customersReducer = (state = { list: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case "FETCH_CUSTOMERS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_CUSTOMERS_SUCCESS":
      return {
        ...state,
        loading: false,
        list: [
          ...state.list.filter((c) => c.local),
          ...action.payload.map((c) => ({ ...c, local: false })),
        ],
      };
    case "FETCH_CUSTOMERS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    case "ADD_CUSTOMER":
      return { ...state, list: [{ key: `local-${Date.now()}`, ...action.payload, local: true }, ...state.list] };
    case "EDIT_CUSTOMER":
      return { ...state, list: state.list.map((c) => (String(c.key) === String(action.payload.key) ? { ...c, ...action.payload.updatedData } : c)) };
    case "DELETE_CUSTOMER_REQUEST":
      // optimistic removal handled elsewhere; here just set loading true
      return { ...state, loading: true };
    case "DELETE_CUSTOMER_SUCCESS":
      return { ...state, loading: false, list: state.list.filter((c) => String(c.key) !== String(action.payload)) };
    case "DELETE_CUSTOMER_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const productsReducer = (state = { items: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case "FETCH_PRODUCTS_REQUEST":
      return { ...state, loading: true, error: null };
    case "FETCH_PRODUCTS_SUCCESS":
      return { ...state, loading: false, items: action.payload };
    case "FETCH_PRODUCTS_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

const selectedProductsReducer = (state = { list: [] }, action) => {
  switch (action.type) {
    case "ADD_PRODUCT_TO_LIST":
      if (!state.list.find((p) => p.id === action.payload.id)) {
        return { ...state, list: [...state.list, action.payload] };
      }
      return state;
    case "REMOVE_PRODUCT_FROM_LIST":
      return { ...state, list: state.list.filter((p) => p.id !== action.payload) };
    case "CLEAR_PRODUCTS_LIST":
      return { ...state, list: [] };
    default:
      return state;
  }
};

const incomeReducer = (state = { data: [], loading: false, error: null }, action) => {
  switch (action.type) {
    case "FETCH_INCOME_REQUEST":
      return {
        ...state,
        loading: true,
        error: null,
      };
    case "FETCH_INCOME_SUCCESS":
      return { ...state, loading: false, data: action.payload };
    case "FETCH_INCOME_FAILURE":
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default combineReducers({
  theme: themeReducer,
  customers: customersReducer,
  products: productsReducer,
  selectedProducts: selectedProductsReducer,
  income: incomeReducer,
});
