import { FaPhoneVolume } from "react-icons/fa";

import { FaMapMarkerAlt } from "react-icons/fa";
import React from "react";
import ContactForm from "../../Components/Slider/Formspree.jsx";

function Contact() {
  return (
    <section className="w-full my-7">
      <div className="grid grid-cols-2">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4345.061105214464!2d105.78069910935848!3d21.001571927740724!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3135ab825e16d629%3A0xf84242c3e477717!2zR3JlZW4gQmF5IEczIE3hu4UgVHLDrA!5e0!3m2!1svi!2s!4v1713804382725!5m2!1svi!2s"
          width="100%"
          height="450"
          loading="lazy"
          allowFullScreen
          className="px-6 rounded-3xl"
        ></iframe>
        <div className="col-span-1 px-7">
          <h1 className="font-bold text-2xl text-blue-600 uppercase mb-4 text-center">
            CÔNG TY TNHH ĐT TM DV CÂY XANH VĨNH PHAN
          </h1>
          <p className="text-lg">
            Công ty cây xanh Đặng Nguyễn luôn sẵn lòng đón nhận các ý kiến đóng
            góp cũng như hồi đáp các thắc mắc của khách hàng về các sản phẩm,
            dịch vụ. Khách hàng có thể liên hệ qua biểu mẫu hoặc liên hệ theo
            các thông tin dưới đây nếu bạn có bất kỳ yêu cầu hoặc thắc mắc nào
          </p>
          <span className="flex items-center">
            <FaMapMarkerAlt className="text-red-600 text-xl" />
            <h1 className="font-bold text-xl py-3 mx-2"> Trụ sở:</h1>
          </span>

          <p className="text-green-500 text-lg">
            {" "}
            118D Mậu Thân, Phường An Hòa, Quận Ninh Kiều, TP. Cần Thơ
          </p>
          <span className="flex items-center ">
            {" "}
            <FaPhoneVolume className="text-green-500 text-2xl" />
            <h1 className="font-bold text-xl py-3 mx-2 "> Điện thoại</h1>{" "}
            <button className="btn1 m-5">Liên hệ : 0348216852</button>
          </span>
          <h1 className="text-center text-2xl font-medium text-gray-950  ">
            Nhận thông báo ưu đãi
          </h1>
          <ContactForm />
        </div>
      </div>
    </section>
  );
}

export default Contact;
