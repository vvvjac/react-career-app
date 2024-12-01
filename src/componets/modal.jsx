import React from 'react';

const Modal = ({ modalId, onClose, children }) => {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
      <div className="bg-gray-800 text-white p-6 rounded-lg shadow-lg w-96">
        <button
          className="absolute top-2 right-2 text-white font-bold"
          onClick={onClose}
        >
          &times;
        </button>
        <div className="modal-content">{children}</div>
      </div>
    </div>
  );
};

export default Modal;
