import axiosClient from "./axiosClient";

export const fetchCustomersApi = async () => {
  const res = await axiosClient.get("https://randomuser.me/api/?results=15");
  const data = res.data;


  return data.results.map((user) => ({
    key: user.login.uuid,
    name: `${user.name.first} ${user.name.last}`,
    company: user.location?.city || "—",
    phone: user.phone,
    email: user.email,
    country: user.location?.country || "—",
    status: Math.random() > 0.5 ? "Active" : "Inactive",
  }));
};

export const fetchProductsApi = async () => {
  const res = await axiosClient.get("https://fakestoreapi.com/products");
  return res.data;
};

export const fetchIncomeApi = async () => {

  return [
    { date: "2025-01", income: 1200 },
    { date: "2025-02", income: 1500 },
    { date: "2025-03", income: 1000 },
    { date: "2025-04", income: 1800 },
    { date: "2025-05", income: 2200 },
    { date: "2025-06", income: 2000 },
    { date: "2025-07", income: 2500 },
    { date: "2025-08", income: 2700 },
    { date: "2025-09", income: 2300 },
    { date: "2025-10", income: 5000},
  ];
};
