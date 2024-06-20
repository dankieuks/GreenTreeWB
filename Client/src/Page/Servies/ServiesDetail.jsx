import { Link, useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineTags } from "react-icons/ai";
import { BsPostcardHeart } from "react-icons/bs";
import Strengthcard from "../../Components/Slider/Strengthcard.jsx";

function ServiesDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);
  const [post, setPost] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/blog/${id}`
        );

        if (response.data && typeof response.data === "object") {
          setDetails(response.data.data);
        } else {
          setDetails(null);
        }

        const response1 = await axios.get(
          `${process.env.REACT_APP_API_URL}/api/v1/blog`
        );

        if (response1.data && Array.isArray(response1.data.data)) {
          const sortedPosts = response1.data.data.sort(
            (a, b) => new Date(b.createdAt) - new Date(a.createdAt)
          );
          setPost(sortedPosts.slice(0, 5));
        } else {
          setPost([]);
        }
      } catch (error) {
        console.error("There was an error fetching the data!", error);
      }
    };

    if (id) {
      fetchData();
    }
  }, [id]);

  const renderContent = () => {
    if (!details) return null;

    const { title, description, images } = details;
    const textSegments = description.split("\n").map((text, index) => (
      <p key={`text-${index}`} className=" text-justify md:text-md lg:text-lg">
        {text}
      </p>
    ));

    const combinedContent = [];
    const maxLength = Math.max(textSegments.length, images.length);

    for (let i = 0; i < maxLength; i++) {
      if (textSegments[i]) {
        combinedContent.push(
          <div key={`text-${i}`} className="flex my-4">
            <div className="w-4/4 lg:w-4/3">{textSegments[i]}</div>
          </div>
        );
      }
      if (images[i]) {
        combinedContent.push(
          <div key={`image-${i}`} className="flex justify-center my-4">
            <img
              src={images[i]}
              alt={`image-${i}`}
              className="w-3/4 lg:w-2/3 object-cover h-64 lg:h-96"
            />
          </div>
        );
      }
    }

    return (
      <article className="text-center">
        <h1 className="font-bold text-2xl md:text-3xl text-blue-600 uppercase mb-8 lg:text-4xl">
          {title}
        </h1>
        <div>{combinedContent}</div>
        <button className="btn1 my-8">Liên hệ: 0348216852</button>
      </article>
    );
  };

  return (
    <main>
      <section className="p-4 flex justify-center">
        <div className="w-full lg:w-5/6 flex flex-col lg:flex-row">
          <div className="lg:w-3/4">
            <span className="flex items-center mb-8">
              <AiOutlineTags />
              <h1 className="ml-2 text-left text-xl">
                Cắt tỉa đường phố, vv...
              </h1>
            </span>
            <nav>
              {details ? (
                renderContent()
              ) : (
                <>
                  <span className="loading loading-dots loading-xs"></span>
                  <span className="loading loading-dots loading-sm"></span>
                  <span className="loading loading-dots loading-md"></span>
                  <span className="loading loading-dots loading-lg"></span>
                </>
              )}
            </nav>
          </div>
          <div className="lg:w-1/4 lg:pl-8 mt-8 lg:mt-0">
            <div className="border p-4 rounded-lg shadow-lg bg-white">
              <h2 className="font-bold text-xl mb-6 text-gray-800">
                Bài viết mới nhất
              </h2>
              {post && post.length > 0 ? (
                <div className="grid gap-4 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-1">
                  {post.map((posts, index) => (
                    <div
                      key={index}
                      className="p-3 border rounded-lg shadow hover:shadow-md transition-shadow"
                    >
                      <Link
                        to={`/du-an/${posts._id}`}
                        className="text-blue-600 hover:text-blue-800 transition-colors duration-300"
                      >
                        <span className="flex items-center">
                          <BsPostcardHeart className="mr-2" />
                          <h3 className="text-md font-semibold mb-2 whitespace-nowrap max-w-xs overflow-hidden text-ellipsis">
                            {posts.title}
                          </h3>
                        </span>
                        <p className="text-sm text-gray-700 mt-2">
                          {posts.description.slice(0, 60)}...
                        </p>
                      </Link>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-600">Không có bài viết liên quan.</p>
              )}
            </div>
          </div>
        </div>
      </section>
      <Strengthcard />
    </main>
  );
}

export default ServiesDetail;
