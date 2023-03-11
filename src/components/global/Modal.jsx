import React from 'react';

import { UseGlobalContext } from '../../helper/GlobalContext';

import Button from './Button';

function Modal() {
  const {
    actions: { toggleModalState },
    states: {
      modalContent: { title, description },
    },
  } = UseGlobalContext();

  return (
    <div className="z-[3] w-screen h-screen bg-black/50 flex justify-center items-center absolute">
      <div className="animate__animated animate__fadeIn flex flex-col items-center py-6 px-16 justify-around w-1/2 h-1/2 bg-white rounded-md relative z-[4]">
        <h1 className="text-2xl font-bold">{title}</h1>
        <p>{description}</p>
        <Button onClick={toggleModalState}>Close</Button>
      </div>
    </div>
  );
}

export default Modal;
