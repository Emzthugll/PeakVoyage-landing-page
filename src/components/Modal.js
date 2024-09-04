import React from "react";
import Form from "./Form"; // Adjust the import path as needed

const Modal = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div
        className="fixed inset-0 bg-black opacity-50"
        onClick={onClose}
      ></div>
      <div className="relative w-[400px] md:w-[500px]  bg-indigo-300 p-8 rounded-lg shadow-lg z-10">
        <button
          onClick={onClose}
          className="absolute top-6 right-8 text-4xl text-red-600  hover:text-gray-700"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            stroke-width="2"
            stroke-linecap="round"
            stroke-linejoin="round"
          >
            <line x1="18" y1="6" x2="6" y2="18" />
            <line x1="6" y1="6" x2="18" y2="18" />
          </svg>
        </button>
        <Form />
      </div>
    </div>
  );
};

export default Modal;
