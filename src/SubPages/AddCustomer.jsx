import React, { useEffect } from "react";
import { Form, Input, Button, Select, Card } from "antd";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { addCustomer, editCustomer } from "../store/actions";

const { Option } = Select;

const AddCustomer = () => {
  const [form] = Form.useForm();
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { id } = useParams();
  const customers = useSelector((state) => state.customers.list);

  
  const editingCustomer = customers.find((c) => String(c.key) === id);

  
  useEffect(() => {
    if (editingCustomer) {
      form.setFieldsValue(editingCustomer);
    }
  }, [editingCustomer, form]);

  const onFinish = (values) => {
    if (editingCustomer) {
      dispatch(editCustomer(editingCustomer.key, values)); // ✅ pass arguments correctly
    } else {
      dispatch(addCustomer(values));
    }
    navigate("/customer");
  };

  return (
    <Card
      title={editingCustomer ? "Edit Customer" : "Add New Customer"}
      
    >
      <Form
        form={form}
        layout="vertical"
        onFinish={onFinish}
        variant="filled"
      >
        <Form.Item
          name="name"
          label="Customer Name"
          rules={[{ required: true, message: "Please enter the name" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="company"
          label="Company"
          rules={[{ required: true, message: "Please enter the company" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="phone"
          label="Phone Number"
          rules={[{ required: true, message: "Please enter the phone number" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="email"
          label="Email"
          rules={[{ required: true, type: "email", message: "Please enter a valid email" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="country"
          label="Country"
          rules={[{ required: true, message: "Please enter the country" }]}
        >
          <Input />
        </Form.Item>

        <Form.Item
          name="status"
          label="Status"
          rules={[{ required: true, message: "Please select a status" }]}
        >
          <Select placeholder="Select status">
            <Option value="Active">Active</Option>
            <Option value="Inactive">Inactive</Option>
          </Select>
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" block>
            {editingCustomer ? "Update Customer" : "Add Customer"}
          </Button>
        </Form.Item>
      </Form>
    </Card>
  );
};

export default AddCustomer;
