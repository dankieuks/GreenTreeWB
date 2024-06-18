import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Header from "../../Layout/Header/Header";
import axiosInstance from "../../../Utils/axiosInstance.js"; // Import instance đã tạo

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setError("");

    try {
      const response = await axiosInstance.post("/api/v1/user/login", {
        email,
        password,
      });
      console.log("Login successful:", response.data.data);

      localStorage.setItem("AccessToken", response.data.data.AccessToken);
      navigate("/admin/dashboard");
    } catch (error) {
      console.error("Login failed:", error);
      setError("Đăng nhập thất bại ");
    }
  };

  return (
    <section className="login flex items-center justify-center min-h-screen">
      <Header />
      <div className="max-w-md relative flex flex-col p-4 rounded-md text-black bg-white bg-opacity-90">
        <div className="text-2xl font-bold mb-2 text-[#1e0e4b] text-center">
          Welcome back to <span className="text-[#7747ff]">VĨNH PHAN</span>
        </div>
        <div className="text-md font-normal mb-4 text-center text-[#1e0e4b]">
          Đăng nhập tài khoản
        </div>
        <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
          {error && <div className="text-red-500 text-md mb-4">{error}</div>}
          <div className="block relative">
            <label
              htmlFor="email"
              className="block text-gray-600 cursor-text text-md leading-[140%] font-normal mb-2"
            >
              Email
            </label>
            <input
              type="text"
              id="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="rounded border border-gray-200 text-md w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div className="block relative">
            <label
              htmlFor="password"
              className="block text-gray-600 cursor-text text-md leading-[140%] font-normal mb-2"
            >
              Password
            </label>
            <input
              type="password"
              id="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className="rounded border border-gray-200 text-sm w-full font-normal leading-[18px] text-black tracking-[0px] appearance-none block h-11 m-0 p-[11px] focus:ring-2 ring-offset-2 ring-gray-900 outline-0"
            />
          </div>
          <div>
            <Link className="text-sm text-[#7747ff]" to="#">
              Forgot your password?
            </Link>
          </div>
          <button
            type="submit"
            className="bg-[#7747ff] w-max m-auto px-6 py-2 rounded text-white text-sm font-normal"
          >
            Submit
          </button>
        </form>
        <div className="text-sm text-center mt-[1.6rem]">
          Don’t have an account yet?{" "}
          <Link className="text-sm text-[#7747ff]" to="#">
            Sign up for free!
          </Link>
        </div>
      </div>
    </section>
  );
}

export default Login;
