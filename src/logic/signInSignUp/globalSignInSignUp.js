import { useState } from 'react';

export const UseGlobalSignInSignUp = () => {
  const [SignInSignUpState, setSignInSignUpState] = useState('default');

  return {
    SignInSignUpState,
    setSignInSignUpState,
  };
};
