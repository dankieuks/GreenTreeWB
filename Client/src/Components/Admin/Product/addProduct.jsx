import { BsFillXCircleFill } from "react-icons/bs";
import React, { useState } from "react";
import axios from "axios";

function AddProduct({ toggleForm, setProducts }) {
  const [newProduct, setNewProduct] = useState({
    title: "",

    description: "",

    images: [],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewProduct({
      ...newProduct,
      [name]: value,
    });
  };

 
  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageDatas = [];

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imageDatas.push(event.target.result);
        if (imageDatas.length === files.length) {
          setNewProduct({
            ...newProduct,
            images: imageDatas,
          });
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const handleAddProduct = async (newProduct) => {
    try {
      const formData = new FormData();
      formData.append("title", newProduct.title);

      formData.append("description", newProduct.description);

      newProduct.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/product`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );
      if (response.data.success) {
        const newPro = response.data.data; 
        setProducts((prevPros) => [newPro, ...prevPros]); // Cập nhật bài viết mới vào đầu danh sách
        toggleForm(); // Tùy chọn: đóng form thêm bài viết
      } else {
        alert("Có lỗi xảy ra khi thêm bài viết. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error("Lỗi khi thêm sản phẩm:", error);
      alert("Có lỗi xảy ra khi thêm sản phẩm. Vui lòng thử lại sau.");
    }
  };

  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddProduct(newProduct);
  };

  return (
    <section className="max-w-lg mx-auto mt-10">
      <button
        className="absolute top-24 right-[20%] text-2xl rounded-md text-gray-500 hover:text-gray-700"
        onClick={toggleForm}
      >
        <BsFillXCircleFill className="text-red-500" />
      </button>
      <form className="space-y-6" onSubmit={handleSubmit}>
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Tên sản phẩm
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={newProduct.title}
            onChange={handleChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>

        <div>
          <label
            htmlFor="description"
            className="block text-sm font-medium text-gray-700"
          >
            Mô tả
          </label>
          <textarea
            id="description"
            name="description"
            value={newProduct.description}
            onChange={handleChange}
            rows="5"
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          ></textarea>
        </div>

        <div>
          <label
            htmlFor="images"
            className="block text-sm font-medium text-gray-700"
          >
            Hình ảnh
          </label>
          <input
            type="file"
            id="images"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="mt-1 p-2 w-full border border-gray-300 rounded-md focus:ring-indigo-500 focus:border-indigo-500"
          />
        </div>
        <div className="relative">
          <button
            type="submit"
            className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
          >
            Thêm sản phẩm
          </button>
        </div>
      </form>
    </section>
  );
}

export default AddProduct;
