import React from "react";
import { StyledCard } from "../../Styles/SideBarStyles";
import { ShoppingCartOutlined, DollarOutlined } from "@ant-design/icons";
import { useSelector } from "react-redux";

const ProductsStatsCard = () => {
  // ✅ Get products & income data from Redux
  const products = useSelector((state) => state.products.items);
  const income = useSelector((state) => state.income.data);

  const totalProducts = products.length;
  const latestIncome = income.length > 0 ? income[income.length - 1].income : 0;

  return (
    <StyledCard>
      <div className="stats-wrapper">
        {/* Total Products */}
        <div className="stat-card">
          <div
            className="stat-icon"
            style={{ background: "#f6ffed", color: "#52c41a" }}
          >
            <ShoppingCartOutlined />
          </div>
          <div className="stat-text">
            <h3>Total Products</h3>
            <h2>{totalProducts}</h2>
            <p>Available in store</p>
          </div>
        </div>

        
        <div className="stat-card">
          <div
            className="stat-icon"
            style={{ background: "#fff1f0", color: "#cf1322" }}
          >
            <DollarOutlined />
          </div>
          <div className="stat-text">
            <h3>Latest Income</h3>
            <h2>${latestIncome}</h2>
            <p>Last month</p>
          </div>
        </div>
      </div>
    </StyledCard>
  );
};

export default ProductsStatsCard;
