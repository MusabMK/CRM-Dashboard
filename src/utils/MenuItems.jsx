import React from "react";
import DashboardIcon from "../assets/key-square.svg?react";
import ProductIcon from "../assets/3d-square 1.svg?react";
import IncomeIcon from "../assets/wallet-money 2.svg?react";
import PromoteIcon from "../assets/discount-shape 1.svg?react";
import HelpIcon from "../assets/message-question 1.svg?react";
import UserIcon from "../assets/download.svg?react";

const menuItems = [
  {
    key: "/",
    icon: <DashboardIcon aria-label="Dashboard Icon" />,
    label: "Dashboard",
  },
  {
    icon: <ProductIcon aria-label="Product Icon" />,
    label: "Products",
    children: [
      { key: "/products", label: "Overview" }, 
      { key: "/products/list", label: "Products list" },
    ],
  },
  {
    icon: <UserIcon aria-label="Customer Icon" />,
    label: "Customers",
    children: [
      { key: "/customer", label: "Overview" }, 
      { key: "/customer/new", label: "Add Customer" },
    ],
  },
  {
    icon: <IncomeIcon aria-label="Income Icon" />,
    label: "Income",
    children: [
      { key: "/income", label: "Overview" }, 
      { key: "/income/report", label: "Income Report" },
    ],
  },
  {
    icon: <PromoteIcon aria-label="Promote Icon" />,
    label: "Promote",
    children: [
      { key: "/promote", label: "Overview" }, 
      { key: "/promote/new", label: "New Campaign" },
    ],
  },
  {
    icon: <HelpIcon aria-label="Help Icon" />,
    label: "Help",
    children: [
      { key: "/help", label: "Overview" }, 
      { key: "/help/contact", label: "Contact Support" },
    ],
  },
];

export default menuItems;
