import { BiTimer } from "react-icons/bi";
import { GiMoneyStack } from "react-icons/gi";
import { GiMechanicalArm } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import React from "react";

function Strengthcard() {
  return (
    <section className="grid grid-cols-2 p-3 text-center md:grid-cols-2 lg:grid-cols-4 gap-4 ">
      <article className="bg-gray-100 p-6 rounded-lg shadow-md  ">
        <IoIosPeople className="text-green-500 text-4xl  w-full" />
        <h2 className="text-xl font-bold mb-4">Đội ngũ chuyên nghiệp</h2>
        <p>Thợ được đào tào bài bản, có kinh nghiệm lâu năm</p>
      </article>

      <article className="bg-gray-100 p-6 rounded-lg shadow-md">
        <GiMechanicalArm className="text-green-500 text-4xl  w-full" />
        <h2 className="text-xl font-bold mb-4">Thiết Bị Hiện Đại</h2>
        <p >Trang thiết bị hiện đại, đáp ứng tốt các yêu cầu của KH</p>
      </article>

      <article className="bg-gray-100 p-6 rounded-lg shadow-md">
        <GiMoneyStack className="text-green-500 text-4xl  w-full" />
        <h2 className="text-xl font-bold mb-4">Chi Phí Cạnh Tranh</h2>
        <p>Là cty đầu ngành chúng tôi luôn có giá thi công cạnh tranh</p>
      </article>

      <article className="bg-gray-100 p-6 rounded-lg shadow-md">
        <BiTimer className="text-green-500 text-4xl  w-full" />
        <h2 className="text-xl font-bold mb-4">Thi Công Nhanh Chóng</h2>
        <p>Cam kết tiến độ hoàn thành theo đúng thời gian thỏa thuận</p>
      </article>
    </section>
  );
}

export default Strengthcard;
