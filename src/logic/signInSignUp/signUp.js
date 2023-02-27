import { useState } from 'react';

export const useSignUpLogin = () => {
  const [signUpStage, setSignUpStage] = useState(0);

  const handleSignUpStage = (stage) => setSignUpStage(stage);

  const stage1SubmitHandler = (data) => {
    console.log(data);
    setSignUpStage(1);
  };

  const stage2SubmitHandler = (data) => {
    console.log(data);
    setSignUpStage(2);
  };

  return {
    signUpStage,
    stage1SubmitHandler,
    stage2SubmitHandler,
    handleSignUpStage,
  };
};
