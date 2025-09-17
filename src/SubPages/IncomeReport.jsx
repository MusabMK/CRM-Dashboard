import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Line } from "@ant-design/charts";
import { Spin, Card } from "antd";
import { fetchIncomeRequest } from "../Redux/incomeSlice";

const IncomeReport = () => {
  const dispatch = useDispatch();
  const { data, loading, error } = useSelector((state) => state.income);

  useEffect(() => {
    dispatch(fetchIncomeRequest());
  }, [dispatch]);

  const config = {
    data,
    xField: "date",
    yField: "income",
    smooth: true,
    color: "#5932ea",
    point: { size: 5, shape: "diamond" },
    tooltip: { showMarkers: true },
    areaStyle: { fill: "l(270) 0:#5932ea 1:#ffffff" },
  };

  return (
    <Card title="Income Report" style={{ overflowY:"auto" }}>
      {loading && <Spin />}
      {error && <p style={{ color: "red" }}>{error}</p>}
      {!loading && !error && <Line {...config} />}
    </Card>
  );
};

export default IncomeReport;