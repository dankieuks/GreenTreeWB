import { RiDeleteBin6Fill } from "react-icons/ri";
import { BiMessageSquareEdit } from "react-icons/bi";
import React, { useState, useEffect } from "react";
import AddBlogPost from "./addBlog.jsx";

import axios from "axios";
import EditBlogPost from "./EditBlogPost";
import Lazyloading from "../../Slider/Lazyloading.jsx";

function Blog() {
  const [showForm, setShowForm] = useState(false);
  const [showEditForm, setShowEditForm] = useState(false);
  const [posts, setPosts] = useState([]);
  const [currentPost, setCurrentPost] = useState(null);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const toggleEditForm = (post) => {
    setCurrentPost(post);
    setShowEditForm(!showEditForm);
  };

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        console.log("API URL:", process.env.REACT_APP_API_URL);

        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/blog`
        );
        setPosts(response.data.data);
      } catch (error) {
        console.error("Error fetching posts:", error);
      }
    };

    fetchPosts();
  }, []);

  const handleDelete = async (postId) => {
    try {
      await axios.delete(
        `${process.env.REACT_APP_API_URL}/api/v1/blog/${postId}`
      );

      setPosts(posts.filter((post) => post._id !== postId));
    } catch (error) {
      console.error("Error deleting post:", error);
    }
  };

  return (
    <div className="p-6">
      <header>
        <h1 className="text-3xl font-bold mb-6">Quản lý bài đăng</h1>
      </header>

      <section>
        <h2 className="text-xl font-semibold mb-4" onClick={toggleForm}>
          Thêm bài viết mới
        </h2>
        {showForm && (
          <AddBlogPost toggleForm={toggleForm} setPosts={setPosts} />
        )}
      </section>
      <section className="mb-8">
        <h2 className="text-xl font-semibold mb-4">
          Danh sách bài viết ({posts.length})
        </h2>

        <div className="overflow-x-auto">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  ID
                </th>
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
              {posts.map((post) => (
                <tr key={post._id}>
                  <td className="px-6 py-4 whitespace-nowrap">{post._id}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <img
                      src={post.images[0] || "https://via.placeholder.com/150"}
                      alt={post.title}
                      className="h-16 w-16 object-cover rounded"
                    />
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">{post.title}</td>
                  <td className="px-6 py-4 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">
                    {post.description}
                  </td>

                  <td className="px-6 py-4 whitespace-nowrap">
                    <button
                      className="text-indigo-600 text-2xl hover:text-indigo-900"
                      onClick={() => toggleEditForm(post)}
                    >
                      <BiMessageSquareEdit />
                    </button>
                    <button
                      className="text-red-600 text-2xl hover:text-red-900 ml-4"
                      onClick={() => handleDelete(post._id)}
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
      {showEditForm && (
        <EditBlogPost
          post={currentPost}
          toggleEditForm={toggleEditForm}
          setPosts={setPosts}
        />
      )}
    </div>
  );
}

export default Blog;
