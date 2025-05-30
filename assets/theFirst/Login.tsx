import React from "react";
import { useNavigate } from "react-router-dom"; // صحيح

const Login: React.FC = () => {
  const navigate = useNavigate();

  return (
    <div
      className="flex flex-col justify-center items-center h-screen bg-cover bg-center"
      style={{ backgroundImage: "url('')" }} // أضف رابط الخلفية هنا
    >
      <img src="" alt="Logo" className="w-40 h-40 mb-8" />{" "}
      {/* أضف رابط اللوقو هنا */}
      <div className="bg-white p-6 rounded-lg shadow-md w-80">
        <input
          type="email"
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <input
          type="password"
          placeholder="Password"
          className="w-full p-3 mb-4 border rounded-lg"
        />
        <div className="text-right mb-4">
          <a href="#" className="text-blue-600 text-sm">
            Forgot Password?
          </a>
        </div>

        <button
          onClick={() => navigate("/dashboard")}
          className="w-full bg-blue-700 text-white p-3 rounded-lg text-lg font-semibold hover:bg-blue-800 transition"
        >
          SIGN IN
        </button>

        <div className="text-center mt-4">
          <span className="text-sm">Don't have an account? </span>
          <a href="/signup" className="text-blue-600 text-sm">
            SIGN UP
          </a>
        </div>
      </div>
    </div>
  );
};

export default Login;
