import { BsFillXCircleFill } from "react-icons/bs";
import React, { useState } from "react";
import axios from "axios";

function AddBlogPost({ toggleForm, setPosts }) {
  const [newBlog, setNewBlog] = useState({
    title: "",
    description: "",
    images: [],
  });

  // Hàm xử lý thay đổi giá trị input
  const handleChange = (e) => {
    const { name, value } = e.target;
    setNewBlog({
      ...newBlog,
      [name]: value,
    });
  };

  // Hàm xử lý khi chọn ảnh
  const handleImageChange = (e) => {
    const files = e.target.files;
    const imageDatas = [...newBlog.images]; // Sao chép các ảnh hiện tại

    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();
      reader.onload = (event) => {
        imageDatas.push(event.target.result);
        if (imageDatas.length === newBlog.images.length + files.length) {
          setNewBlog({
            ...newBlog,
            images: imageDatas,
          });
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  // Hàm gửi dữ liệu bài viết lên server
  const handleAddBlog = async (newBlog) => {
    try {
      const formData = new FormData();
      formData.append("title", newBlog.title);
      formData.append("description", newBlog.description);

      newBlog.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      const response = await axios.post(
        `${process.env.REACT_APP_API_URL}/api/v1/blog`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        const newPost = response.data.data; // Giả sử server trả về bài viết mới đã được thêm vào cơ sở dữ liệu
        setPosts((prevPosts) => [newPost, ...prevPosts]); // Cập nhật bài viết mới vào đầu danh sách
        toggleForm(); // Tùy chọn: đóng form thêm bài viết
      } else {
        alert("Có lỗi xảy ra khi thêm bài viết. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error("Lỗi khi thêm bài viết:", error);
      alert("Có lỗi xảy ra khi thêm bài viết. Vui lòng thử lại sau.");
    }
  };

  // Hàm xử lý khi submit form
  const handleSubmit = (e) => {
    e.preventDefault();
    handleAddBlog(newBlog);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-3/4 max-w-4xl relative">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
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
              Tiêu đề bài viết
            </label>
            <input
              type="text"
              id="title"
              name="title"
              value={newBlog.title}
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
              value={newBlog.description}
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
            {newBlog.images.length > 0 && (
              <div className="mt-2 grid grid-cols-3 gap-4">
                {newBlog.images.map((image, index) => (
                  <img
                    key={index}
                    src={image}
                    alt={`Image ${index}`}
                    className="rounded-lg"
                    style={{ height: "150px" }}
                  />
                ))}
              </div>
            )}
          </div>
          <div className="relative">
            <button
              type="submit"
              className="w-full bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-2 px-4 rounded"
            >
              Thêm bài viết
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default AddBlogPost;
