import { useContext, useEffect, useState } from "react";
import { AppContext } from "../context/AppContext";
import axios from "axios";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { backendUrl, token, setToken } = useContext(AppContext);
  const navigate = useNavigate();

  const [state, setState] = useState("Sign Up");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");

  const onSubmitHandler = async (event) => {
    event.preventDefault();

    try {
      if (state === "Sign Up") {
        const { data } = await axios.post(backendUrl + "/api/user/register", {
          name,
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success("Account created successfully!");
        } else {
          toast.error(data.message);
        }
      } else {
        const { data } = await axios.post(backendUrl + "/api/user/login", {
          email,
          password,
        });
        if (data.success) {
          localStorage.setItem("token", data.token);
          setToken(data.token);
          toast.success("Logged in successfully!");
        } else {
          toast.error(data.message);
        }
      }
    } catch (error) {
      toast.error(error.message);
    }
  };

  // Only redirect if token exists AND user deliberately logged in
  // not on initial page load
  useEffect(() => {
    if (token) {
      navigate("/");
    }
  }, [token]);

  return (
    <form onSubmit={onSubmitHandler} className="min-h-[80vh] flex items-center">
      <div className="flex flex-col gap-3 m-auto items-start p-8 min-w-[340px] sm:min-w-96 border border-green-100 rounded-xl text-zinc-600 text-sm shadow-lg">
        <p className="text-2xl font-semibold text-gray-800">
          {state === "Sign Up" ? "Create Account" : "Login"}
        </p>
        <p className="text-gray-500">
          Please {state === "Sign Up" ? "sign up" : "log in"} to book appointment
        </p>

        {state === "Sign Up" && (
          <div className="w-full">
            <p className="mb-1">Full Name</p>
            <input
              className="border border-zinc-300 rounded-lg w-full p-2 mt-1 focus:outline-none focus:border-primary"
              type="text"
              onChange={(e) => setName(e.target.value)}
              value={name}
              placeholder="Enter your full name"
              required
            />
          </div>
        )}

        <div className="w-full">
          <p className="mb-1">Email</p>
          <input
            className="border border-zinc-300 rounded-lg w-full p-2 mt-1 focus:outline-none focus:border-primary"
            type="email"
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            placeholder="Enter your email"
            required
          />
        </div>

        <div className="w-full">
          <p className="mb-1">Password</p>
          <input
            className="border border-zinc-300 rounded-lg w-full p-2 mt-1 focus:outline-none focus:border-primary"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            placeholder="Enter your password"
            required
          />
        </div>

        <button
          type="submit"
          className="bg-primary text-white w-full py-2.5 rounded-full text-base hover:bg-[#3B6D11] transition-colors duration-300 mt-2"
        >
          {state === "Sign Up" ? "Create Account" : "Login"}
        </button>

        {state === "Sign Up" ? (
          <p className="text-center w-full">
            Already have an account?{" "}
            <span
              onClick={() => setState("Login")}
              className="text-primary underline cursor-pointer"
            >
              Login here
            </span>
          </p>
        ) : (
          <p className="text-center w-full">
            Create a new account?{" "}
            <span
              onClick={() => setState("Sign Up")}
              className="text-primary underline cursor-pointer"
            >
              Click here
            </span>
          </p>
        )}
      </div>
    </form>
  );
};

export default Login;