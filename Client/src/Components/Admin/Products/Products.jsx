import React, { useState, useEffect } from "react";
import axios from "axios";
import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiMessageSquareEdit } from "react-icons/bi";

import EditProduct from "./EditProduct.jsx";

import AddProduct from "./addProduct";

function Products() {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [products, setProducts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleEditForm = (product) => {
    setCurrentPost(product);
    setShowEditForm(!showEditForm);
  };

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/product`
        );
        setProducts(response.data.data);
      } catch (error) {
        console.error("Error fetching products:", error);
      }
    };

    fetchProducts();
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/v1/product/${productId}`
      );
      setProducts(products.filter((product) => product._id !== productId));
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  return (
    <div className="p-6">
      <header>
        <h1 className="text-3xl font-bold mb-6">Quản lý sản phẩm</h1>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-4" onClick={toggleForm}>
          Thêm sản phẩm mới
        </h2>
        {showForm && (
          <AddProduct toggleForm={toggleForm} setProducts={setProducts} />
        )}
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Danh sách sản phẩm ({products.length})
        </h2>
        <div className="overflow-x-auto">
          <table className="w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="min-w-full pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
                <th className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Hình ảnh
                </th>
                <th className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tiêu đề
                </th>
                <th className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Nội dung
                </th>
                <th className="pl-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Tác vụ
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="pl-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product._id}
                  </td>
                  <td className="pl-6 py-4 whitespace-nowrap">
                    {product.images &&
                      product.images.map((image, index) => (
                        <img
                          key={index}
                          src={image}
                          alt={`Product ${index}`}
                          className="h-20 w-20 object-cover rounded-md"
                        />
                      ))}
                  </td>
                  <td className="pl-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.title}
                  </td>
                  <td className="pl-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    {product.description}
                  </td>
                  <td className="pl-6 py-4 whitespace-nowrap text-sm text-gray-500">
                    <button
                      className="text-indigo-600 text-2xl hover:text-indigo-900"
                      onClick={() => toggleEditForm(product)}
                    >
                      <BiMessageSquareEdit className="inline" />
                    </button>
                    <button
                      className="text-red-600 text-2xl hover:text-red-900 ml-4"
                      onClick={() => handleDelete(product._id)}
                    >
                      <RiDeleteBin6Fill className="inline" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>

      {showEditForm && (
        <EditProduct
          product={currentPost}
          toggleEditForm={toggleEditForm}
          setProducts={setProducts}
        />
      )}
    </div>
  );
}

export default Products;
