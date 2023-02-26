import { useState } from 'react';

export const useSignUpLogin = () => {
  const [signUpStage, setSignUpStage] = useState(0);

  const signUpStageHandler = (stage) => {
    console.log(stage);
    setSignUpStage(stage);
  };

  return {
    signUpStage,
    signUpStageHandler,
    setSignUpStage,
  };
};
