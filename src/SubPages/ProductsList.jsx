import React from "react";
import { Table, Card, Button, Popconfirm} from "antd";
import { useDispatch, useSelector } from "react-redux";
import {
  removeProductFromList,
  clearProductsList,
} from "../Redux/selectedProductsSlice";

const ProductsList = () => {
  const dispatch = useDispatch();
  const { list } = useSelector((state) => state.selectedProducts);

  const handleDelete = (id) => {
    dispatch(removeProductFromList(id));
  };

  const handleClearAll = () => {
    dispatch(clearProductsList());
  };

  const columns = [
    { title: "Title", dataIndex: "title", key: "title" },
    {
      title: "Price",
      dataIndex: "price",
      key: "price",
      render: (price) => `$${price}`,
    },
    { title: "Category", dataIndex: "category", key: "category" },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (img) => <img src={img} alt="product" style={{ width: 40 }} />,
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <Button danger onClick={() => handleDelete(record.id)}>
          Delete
        </Button>
      ),
    },
  ];

  return (
    <div>
      <Card
        title="Selected Products"
        extra={
          list.length > 0 && (
            <Popconfirm
              title="Are you sure you want to delete all products?"
              onConfirm={handleClearAll}
              okText="Yes"
              cancelText="No"
            >
              <Button danger>Delete All</Button>
            </Popconfirm>
          )
        }
      >
        <Table
          columns={columns}
          dataSource={list.map((item) => ({ ...item, key: String(item.id) }))}
          pagination={{ pageSize: 5 }}
          rowKey={(row) => String(row.id)}
        />
      </Card>
    </div>
  );
};

export default ProductsList;
