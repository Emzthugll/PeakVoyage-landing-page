import React, { useState, useEffect } from "react";
import Logo from "../components/images/Wanderlogo.png";

const Form = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isModalOpen] = useState(true);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Lock scroll when the modal is open
    if (isModalOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    // Cleanup effect when component unmounts
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isModalOpen]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    try {
      // Replace with your actual authentication logic
      const response = await fetch("/api/login", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (response.ok) {
        // Handle successful login (e.g., redirect)
        console.log("Login successful!");
      } else {
        const errorData = await response.json();
        setError(errorData.message || "An error occurred during login.");
      }
    } catch (error) {
      setError("Network error. Please try again later.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <div className="text-white w-full">
      <div className="flex items-center space-x-5 justify-center">
        <img src={Logo} alt="WanderMe Logo" className="w-50 h-auto" />
      </div>
      <form onSubmit={handleSubmit} className="mt-5">
        <label
          htmlFor="email"
          className="font-semibold text-sm text-gray-600 pb-1 block"
        >
          E-mail
        </label>
        <input
          placeholder="name@company.com"
          id="email"
          name="email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-100 text-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
        />
        <label
          htmlFor="password"
          className="font-semibold text-sm text-gray-600 pb-1 block"
        >
          Password
        </label>
        <input
          id="password"
          placeholder="•••••••"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
          name="password"
          type="password"
          className="border rounded-lg px-3 py-2 mt-1 mb-5 text-sm w-full bg-gray-100 text-gray-600 focus:border-blue-500 focus:ring-4 focus:ring-blue-500"
        />
        <div className="text-right mb-4">
          <a
            href="/"
            className="text-xs font-display font-semibold text-gray-500 hover:text-gray-400 cursor-pointer"
          >
            Forgot Password?
          </a>
        </div>
        <div className="flex flex-col items-center">
          <button
            type="button"
            className="flex items-center justify-center py-4 px-15 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg"
            onClick={() => {
              /* Sign in with Google logic */
            }}
          >
            <svg
              className="ml-2"
              enable-background="new 0 0 48 48"
              height="30"
              viewBox="0 0 48 48"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-1.649 4.657-6.08 8-11.303 8-6.627 0-12-5.373-12-12s5.373-12 12-12c3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-11.045 0-20 8.955-20 20s8.955 20 20 20 20-8.955 20-20c0-1.341-.138-2.65-.389-3.917z"
                fill="#ffc107"
              />
              <path
                d="m6.306 14.691 6.571 4.819c1.778-4.402 6.084-7.51 11.123-7.51 3.059 0 5.842 1.154 7.961 3.039l5.657-5.657c-3.572-3.329-8.35-5.382-13.618-5.382-7.682 0-14.344 4.337-17.694 10.691z"
                fill="#ff3d00"
              />
              <path
                d="m24 44c5.166 0 9.86-1.977 13.409-5.192l-6.19-5.238c-2.008 1.521-4.504 2.43-7.219 2.43-5.202 0-9.619-3.317-11.283-7.946l-6.522 5.025c3.31 6.477 10.032 10.921 17.805 10.921z"
                fill="#4caf50"
              />
              <path
                d="m43.611 20.083h-1.611v-.083h-18v8h11.303c-.792 2.237-2.231 4.166-4.087 5.571.001-.001.002-.001.003-.002l6.19 5.238c-.438.398 6.591-4.807 6.591-14.807 0-1.341-.138-2.65-.389-3.917z"
                fill="#1976d2"
              />
            </svg>
            <span className="ml-6">Sign in with Google</span>
          </button>
          <button
            type="button"
            className="flex items-center justify-center py-4 px-15 bg-white hover:bg-gray-200 focus:ring-blue-500 focus:ring-offset-blue-200 text-gray-700 w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg mt-4"
            onClick={() => {
              /* Sign in with Apple logic */
            }}
          >
            <svg
              viewBox="0 0 384 512"
              height="30"
              width="30"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="m318.7 268.7c-.2-36.7 16.4-64.4 50-84.8-18.8-26.9-47.2-41.7-84.7-44.6-35.5-2.8-74.3 20.7-88.5 20.7-15 0-49.4-19.7-76.4-19.7-55.8.9-115.1 44.5-115.1 133.2q0 39.3 14.4 81.2c12.8 36.7 59 126.7 107.2 125.2 25.2-.6 43-17.9 75.8-17.9 31.8 0 48.3 17.9 76.4 17.9 48.6-.7 90.4-82.5 102.6-119.3-65.2-30.7-61.7-90-61.7-91.9zm-56.6-164.2c27.3-32.4 24.8-61.9 24-72.5-24.1 1.4-52 16.4-67.9 34.9-17.5 19.8-27.8 44.3-25.6 71.9 26.1 2 49.9-11.4 69.5-34.3z" />
            </svg>
            <span className="ml-6">Sign in with Apple</span>
          </button>
        </div>
        <div className="mt-5">
          {error && <div className="text-red-500 mb-2">{error}</div>}
          <button
            type="submit"
            className={`py-2 px-4 bg-indigo-600 hover:bg-blue-700 focus:ring-blue-500 focus:ring-offset-blue-200 text-white w-full transition ease-in duration-200 text-center text-base font-semibold shadow-md focus:outline-none focus:ring-2 focus:ring-offset-2 rounded-lg ${
              isLoading ? "opacity-50 cursor-not-allowed" : ""
            }`}
            disabled={isLoading}
          >
            {isLoading ? "Logging in..." : "Log in"}
          </button>
        </div>
        <div className="flex items-center justify-between mt-4">
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
          <a
            href="/"
            className="text-xs text-gray-600 uppercase  hover:underline hover:text-gray-600"
          >
            or sign up
          </a>
          <span className="w-1/5 border-b dark:border-gray-600 md:w-1/4" />
        </div>
      </form>
    </div>
  );
};

export default Form;
