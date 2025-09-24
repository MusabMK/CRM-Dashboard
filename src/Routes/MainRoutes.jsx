import React from "react";
import { Routes, Route } from "react-router-dom";
import Products from "../Pages/Products";
import Dashboard from "../Pages/Dashboard";
import Customer from "../Pages/Customer";
import Promote from "../Pages/Promote";
import AddCustomer from "../SubPages/AddCustomer";
import ProductsList from "../SubPages/ProductsList";
import IncomeReport from "../SubPages/IncomeReport";
import ContactSupport from "../SubPages/ContactSupport";


const MainRoutes = () => {
  return (
    <Routes>
      <Route index element={<Dashboard />} />
      {/* Products */}
      <Route path="products" element={<Products />} />
      <Route path="products/list" element={<ProductsList />} />
      {/* Customers */}
      <Route path="customer" element={<Customer />} />
      <Route path="customer/new" element={<AddCustomer />} />
      <Route path="customer/edit/:id" element={<AddCustomer />} />
      {/* Income */}
      <Route path="income/report" element={<IncomeReport />} />
      {/* Promote */}
      <Route path="promote" element={<Promote />} />
      {/* Help */}
      <Route path="help/contact" element={<ContactSupport />} />
    </Routes>
  );
};

export default MainRoutes;
