import React from 'react';

const ScoutLetter = ({ letter, onClick }) => {
  return (
    <div
      className="text-3xl font-bold h-20 w-20 flex justify-center items-center bg-yellow-400 rounded-md shadow-lg cursor-pointer hover:scale-110 transition-transform"
      onClick={onClick}
    >
      {letter}
    </div>
  );
};

export default ScoutLetter;
