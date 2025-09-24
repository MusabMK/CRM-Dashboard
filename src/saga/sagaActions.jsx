// Customers
export const requestFetchCustomers = () => ({ type: "FETCH_CUSTOMERS_REQUEST" });
export const requestDeleteCustomer = (id) => ({ type: "DELETE_CUSTOMER_REQUEST", payload: id });

// Products
export const requestFetchProducts = () => ({ type: "FETCH_PRODUCTS_REQUEST" });

// Income
export const requestFetchIncome = () => ({ type: "FETCH_INCOME_REQUEST" });
