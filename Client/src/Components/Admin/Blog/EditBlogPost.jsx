import { BsFillXCircleFill } from "react-icons/bs";
import React, { useState } from "react";
import axios from "axios";

function EditBlogPost({ post, toggleEditForm, setPosts }) {
  const [editedBlog, setEditedBlog] = useState(post);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditedBlog({
      ...editedBlog,
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
          setEditedBlog({
            ...editedBlog,
            images: imageDatas,
          });
        }
      };
      reader.readAsDataURL(files[i]);
    }
  };

  const handleEditBlog = async (editedBlog) => {
    try {
      const formData = new FormData();
      formData.append("title", editedBlog.title);
      formData.append("description", editedBlog.description);

      editedBlog.images.forEach((image, index) => {
        formData.append(`images[${index}]`, image);
      });

      const response = await axios.put(
        `${process.env.REACT_APP_API_URL}/api/v1/blog/${editedBlog._id}`,
        formData,
        {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        }
      );

      if (response.data.success) {
        const updatedPost = response.data.data;
        setPosts((prevPosts) =>
          prevPosts.map((post) =>
            post._id === updatedPost._id ? updatedPost : post
          )
        );
        toggleEditForm();
      } else {
        alert("Có lỗi xảy ra khi chỉnh sửa bài viết. Vui lòng thử lại sau.");
      }
    } catch (error) {
      console.error("Lỗi khi chỉnh sửa bài viết:", error);
      alert("Có lỗi xảy ra khi chỉnh sửa bài viết. Vui lòng thử lại sau.");
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    handleEditBlog(editedBlog);
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50 z-50">
      <div className="bg-white p-6 rounded-lg w-3/4 max-w-4xl relative">
        <button
          className="absolute top-2 right-2 text-2xl text-gray-500 hover:text-gray-700"
          onClick={toggleEditForm}
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
              value={editedBlog.title}
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
              value={editedBlog.description}
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
              Chỉnh sửa bài viết
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default EditBlogPost;
