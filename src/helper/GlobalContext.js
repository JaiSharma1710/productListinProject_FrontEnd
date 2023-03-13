import { createContext, useContext, useState } from 'react';

export const UseGlobalStates = () => {
  const [isModalActive, setIsModalActive] = useState(false);
  const [isToasterActive, setIsToasterActive] = useState(false);
  const [toasterMessage, setToasterMessage] = useState('something went wrong');
  const [isUserLoggedIn, setIsUserLoggedIn] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
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
      setToasterMessage,
      setIsUserLoggedIn,
      setIsLoading,
    },
    globalState: {
      isModalActive,
      modalContent,
      isToasterActive,
      toasterMessage,
      isUserLoggedIn,
      isLoading,
    },
  };
};

export const GlobalContext = createContext();

export const UseGlobalContext = () => useContext(GlobalContext);
