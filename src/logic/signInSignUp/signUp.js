import { useState } from 'react';
import axios from 'axios';

import { UseGlobalContext } from '../../helper/GlobalContext';

export const useSignUpLogin = () => {
  const {
    actions: {
      toggleModalState,
      setModalContent,
      setIsToasterActive,
      setToasterMessage,
      setIsLoading,
    },
  } = UseGlobalContext();

  const [signUpStage, setSignUpStage] = useState(0);
  const [userData, setUserData] = useState({});

  const handleSignUpStage = (stage) => setSignUpStage(stage);

  const stage1SubmitHandler = (data) => {
    setUserData((pre) => {
      return { ...pre, ...data };
    });
    setSignUpStage(1);
  };

  const stage2SubmitHandler = (data) => {
    setUserData((pre) => {
      return { ...pre, ...data };
    });
    setSignUpStage(2);
  };

  const stage3SubmitHandler = (data) => {
    setUserData((pre) => {
      createUser({ ...pre, ...data });
      return { ...pre, ...data };
    });
  };

  const createUser = async (userData) => {
    try {
      setIsLoading(true);
      await axios.post(
        `${process.env.REACT_APP_BASE_URL}/flower/signup`,
        userData,
      );
      setIsLoading(false);
      setModalContent({
        title: `Hello ${userData.firstName}, Welcome to flower store!!`,
        description: 'your account has been created please signIn to continue',
      });
      toggleModalState();
    } catch (err) {
      setIsLoading(false);
      setToasterMessage(err.response.data.error);
      setIsToasterActive(true);
    }
  };

  return {
    signUpStage,
    stage1SubmitHandler,
    stage2SubmitHandler,
    handleSignUpStage,
    stage3SubmitHandler,
  };
};
