import { useState } from 'react';
import axios from 'axios';

export const useSignUpLogin = ({
  toggleModalState,
  setModalContent,
  setIsToasterActive,
}) => {
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
      const data = await axios.post(
        `${process.env.REACT_APP_BASE_URL}/flower/signup`,
        userData,
      );
      setModalContent({
        title: `Hello ${userData.firstName},welcome to flower store!!`,
        description: 'your account has been created please signIn to continue',
      });
      toggleModalState();
    } catch (err) {
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
