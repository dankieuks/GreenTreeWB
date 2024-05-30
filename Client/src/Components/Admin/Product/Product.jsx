import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiMessageSquareEdit } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import AddProduct from "./addProduct";
import axios from "axios";

function Product() {
  const [showForm, setShowForm] = useState(false);
  const [products, setProducts] = useState([]);
  const toggleForm = () => {
    setShowForm(!showForm);
  };

  console.log(products);

  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_API_URL}/api/v1/product`)
      .then((response) => {
        console.log("API response data:", response.data);
        setProducts(response.data.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleDelete = async (productId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/v1/product/${productId}`
      );
      console.log(productId);
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
        <h2 className="text-xl font-semibold mb-4">Product List</h2>
        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Image
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Name
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Description
                </th>

                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {products.map((product) => (
                <tr key={product._id}>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={product.images}
                      alt={product.title}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    {product.title}
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">
                    {product.description}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <button className="text-indigo-600 text-2xl hover:text-indigo-900">
                      <BiMessageSquareEdit />
                    </button>
                    <button
                      className="text-red-600 text-2xl hover:text-red-900 ml-4"
                      onClick={() => handleDelete(product._id)}
                    >
                      <RiDeleteBin6Fill />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </section>
    </div>
  );
}

export default Product;
