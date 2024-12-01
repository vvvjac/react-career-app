import React, { useState } from 'react';
import ScoutLetter from '../components/ScoutLetter';
import Modal from '../components/Modal';

const Home = () => {
  const [activeModal, setActiveModal] = useState(null);

  const handleOpenModal = (modalId) => setActiveModal(modalId);
  const handleCloseModal = () => setActiveModal(null);

  return (
    <div className="flex flex-col items-center pt-32">
      <h1 className="text-5xl font-bold mb-6">
        Welcome to <span className="text-yellow-400">SCOUT</span>
      </h1>
      <p className="text-xl mb-12">Your journey to career success begins here</p>
      <div className="flex gap-4">
        {['S', 'C', 'O', 'U', 'T'].map((letter) => (
          <ScoutLetter
            key={letter}
            letter={letter}
            onClick={() => handleOpenModal(`modal${letter}`)}
          />
        ))}
      </div>
      <p className="mt-6">Click on the letters to begin your career journey</p>

      {/* Modals */}
      {activeModal && (
        <Modal modalId={activeModal} onClose={handleCloseModal}>
          <h2>Modal for {activeModal.replace('modal', '')}</h2>
          <p>Content for this modal...</p>
        </Modal>
      )}
    </div>
  );
};

export default Home;
