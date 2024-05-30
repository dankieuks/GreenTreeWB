import React from "react";

function Job() {
  return (
    <section>
      <h1 className=" pb-3 flex justify-center items-center font-bold text-4xl text-blue-600">
        AlBUM
      </h1>
      <nav className="container mx-auto py-7 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {images.map((image, index) => (
          <article key={index} className="relative group">
            <figure className="w-full h-64 overflow-hidden rounded-lg">
              <img
                src={image}
                alt={`Image ${index + 1}`}
                className="object-cover w-full h-full transition duration-300 transform group-hover:scale-105"
              />
            </figure>
          </article>
        ))}
      </nav>
    </section>
  );
}

export default Job;
