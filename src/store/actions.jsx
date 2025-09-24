export const toggleTheme = () => ({ type: "TOGGLE_THEME" });
export const toggleCollapse = () => ({ type: "TOGGLE_COLLAPSE" });

export const fetchCustomersRequest = () => ({ type: "FETCH_CUSTOMERS_REQUEST" });
export const fetchCustomersSuccess = (customers) => ({ type: "FETCH_CUSTOMERS_SUCCESS", payload: customers });
export const fetchCustomersFailure = (error) => ({ type: "FETCH_CUSTOMERS_FAILURE", payload: error });

export const addCustomer = (customer) => ({ type: "ADD_CUSTOMER", payload: customer });
export const editCustomer = (key, updatedData) => ({ type: "EDIT_CUSTOMER", payload: { key, updatedData } });

export const deleteCustomerRequest = (id) => ({ type: "DELETE_CUSTOMER_REQUEST", payload: id });
export const deleteCustomerSuccess = (id) => ({ type: "DELETE_CUSTOMER_SUCCESS", payload: id });
export const deleteCustomerFailure = (error) => ({ type: "DELETE_CUSTOMER_FAILURE", payload: error });

export const fetchProductsRequest = () => ({ type: "FETCH_PRODUCTS_REQUEST" });
export const fetchProductsSuccess = (products) => ({ type: "FETCH_PRODUCTS_SUCCESS", payload: products });
export const fetchProductsFailure = (error) => ({ type: "FETCH_PRODUCTS_FAILURE", payload: error });

export const addProductToList = (product) => ({ type: "ADD_PRODUCT_TO_LIST", payload: product });
export const removeProductFromList = (id) => ({ type: "REMOVE_PRODUCT_FROM_LIST", payload: id });
export const clearProductsList = () => ({ type: "CLEAR_PRODUCTS_LIST" });

export const fetchIncomeRequest = () => ({ type: "FETCH_INCOME_REQUEST" });
export const fetchIncomeSuccess = (data) => ({ type: "FETCH_INCOME_SUCCESS", payload: data });
export const fetchIncomeFailure = (error) => ({ type: "FETCH_INCOME_FAILURE", payload: error });
