import { useParams } from "react-router-dom";
import axios from "axios";
import React, { useState, useEffect } from "react";
import { AiOutlineTags } from "react-icons/ai";
import Strengthcard from "../../Components/Slider/Strengthcard.jsx";

function ServiesDetail() {
  const { id } = useParams();
  const [details, setDetails] = useState(null);

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
    const textSegments = description.split(". ").map((text, index) => (
      <p key={`text-${index}`} className="my-4 text-justify">
        {text}.
      </p>
    ));

    const combinedContent = [];
    const maxLength = Math.max(textSegments.length, images.length);

    for (let i = 0; i < maxLength; i++) {
      if (textSegments[i]) {
        combinedContent.push(
          <div key={`text-${i}`} className="flex  my-4">
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
              className="w-2/4 lg:w-1/3"
            />
          </div>
        );
      }
    }

    return (
      <article className="text-center">
        <h1 className="font-bold text-2xl md:text-4xl text-blue-600 uppercase mb-8">
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
            <span className="flex items-center  mb-8">
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
            <div className="border p-4 rounded shadow">
              <h2 className="font-bold text-lg mb-4">Bài viết liên quan</h2>
              <ul className="list-disc list-inside">
                <li>
                  <a href="#" className="text-blue-600">
                    Bài viết 1
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600">
                    Bài viết 2
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600">
                    Bài viết 3
                  </a>
                </li>
                <li>
                  <a href="#" className="text-blue-600">
                    Bài viết 4
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      <Strengthcard />
    </main>
  );
}

export default ServiesDetail;
