import React, { useEffect } from "react";
import { Table, Card, Tag, Spin, Alert, Button, Popconfirm } from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCustomersRequest,
  deleteCustomerRequest,
} from "../Redux/customerSlice";
import { Link } from "react-router-dom";

const Customer = () => {
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.customers);

  useEffect(() => {
    dispatch(fetchCustomersRequest());
  }, [dispatch]);

  const columns = [
    { title: "Customer Name", dataIndex: "name", key: "name" },
    { title: "Company", dataIndex: "company", key: "company" },
    { title: "Phone Number", dataIndex: "phone", key: "phone" },
    { title: "Email", dataIndex: "email", key: "email" },
    { title: "Country", dataIndex: "country", key: "country" },
    {
      title: "Status",
      dataIndex: "status",
      key: "status",
      render: (status) => (
        <Tag color={status === "Active" ? "green" : "red"}>{status}</Tag>
      ),
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <>
          <Link to={`/customer/edit/${record.key}`}>
            <Button type="link">Edit</Button>
          </Link>
          <Popconfirm
            title="Are you sure you want to delete this customer?"
            okText="Yes"
            cancelText="No"
            okType="danger"
            onConfirm={() =>
              dispatch(deleteCustomerRequest(String(record.key)))
            }
          >
            <Button type="link" danger>
              Delete
            </Button>
          </Popconfirm>
        </>
      ),
    },
  ];

  return (
    <div>
      <Card
        title="All Customers"
        bordered={false}
        extra={
          <Link to="/customer/new">
            <Button type="primary">+ Add New Customer</Button>
          </Link>
        }
      >
        {loading && <Spin size="large" />}
        
        {error && <Alert type="error" message={error} />}

        {!loading && !error && (
          <Table
            columns={columns}
            dataSource={list.map((item) => ({
              ...item,
              key: String(item.key),
            }))}
            pagination={{ pageSize: 5 }}
            rowKey={(row) => String(row.key)}
          />
        )}
      </Card>
    </div>
  );
};

export default Customer;
