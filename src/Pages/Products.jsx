import React, { useEffect } from "react";
import { Table, Card, Spin, Alert , Button} from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { fetchProductsRequest } from "../Redux/productSlice";
import { addProductToList } from "../Redux/selectedProductsSlice";

const Products = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { list, loading, error } = useSelector((state) => state.products);

  useEffect(() => {
    dispatch(fetchProductsRequest());
  }, [dispatch]);

  const handleAdd = (product) => {
    dispatch(addProductToList(product));
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
        <Button type="primary" onClick={() => handleAdd(record)}>
          Add to basket
        </Button>
      ),
    },
  ];

  return (
    <div >
      <Card
      title="All Products"
      extra={
        <Button type="default" onClick={() => navigate("/products/list")}>
          Go to Basket
        </Button>
      }
    >
      
       

        {loading && <Spin size="large" />}
        {error && <Alert type="error" message={error} />}
        {!loading && !error && (
          <Table
            columns={columns}
            dataSource={list.map((item) => ({ ...item, key: String(item.id) }))}
            pagination={{ pageSize: 5 }}
            rowKey={(row) => String(row.id)}
          />
        )}
      </Card>
    </div>
  );
};

export default Products;
