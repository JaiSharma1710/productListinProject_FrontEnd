import { createContext, useContext, useState } from 'react';

export const UseGlobalStates = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isToasterActive, setIsToasterActive] = useState(true);
  const [modalContent, setModalContent] = useState({
    title: 'title',
    description: 'description',
  });

  const toggleModalState = () => setIsModalActive((pre) => !pre);

  return {
    globalMethods: {
      toggleModalState,
      setModalContent,
      setIsToasterActive,
    },
    globalState: {
      isModalActive,
      modalContent,
      isToasterActive,
    },
  };
};

export const GlobalContext = createContext();

export const UseGlobalContext = () => useContext(GlobalContext);
