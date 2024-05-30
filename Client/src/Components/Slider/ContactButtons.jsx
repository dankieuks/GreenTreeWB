import React, { useState } from "react";
import { FaPhoneAlt, FaFacebookF } from "react-icons/fa";
import { SiZalo } from "react-icons/si";

function ContactButtons() {
  const [isShaking, setIsShaking] = useState(false);

  const handleButtonClick = () => {
    setIsShaking(true);
    setTimeout(() => {
      setIsShaking(false);
    }, 500);
  };

  return (
    <section className="sticky bottom-9 ml-4 flex flex-col space-y-4">
      <a
        href="https://zalo.me/0348216852"
        className={`flex items-center  justify-center w-12 h-12 bg-blue-500  rounded-full shadow-lg ${
          isShaking ? "shake" : ""
        }`}
        aria-label="Chat on Zalo"
        onClick={handleButtonClick}
      >
        <SiZalo className="text-white  w-6 h-6 " />
      </a>

      <a
        href="tel:0901859622"
        className={`flex px-4 py-2 w-[150px] bg-green-500 text-white font-bold rounded-full shadow-lg ${
          isShaking ? "shake" : ""
        }`}
        aria-label="Call phone number"
        onClick={handleButtonClick}
      >
        <FaPhoneAlt className=" text-white mr-2 w-4 h-4 animate-spin" />
        <span>0348216852</span>
      </a>

      <a
        href="https://www.facebook.com/dankieu.ks"
        className={`flex items-center justify-center w-12 h-12 bg-blue-700 rounded-full shadow-lg ${
          isShaking ? "shake" : ""
        }`}
        aria-label="Chat on Facebook"
        onClick={handleButtonClick}
      >
        <FaFacebookF className="text-white w-6 h-6 " />
      </a>
    </section>
  );
}

export default ContactButtons;
