import { useState } from 'react';

import { IMG_CDN } from '../constants/IMG_CDN.js';

import SignIn from '../components/forms/SignIn.jsx';
import SignUp from '../components/forms/SignUp.jsx';
import Button from '../components/global/Button.jsx';

const { SIGN_IN_SIGN_UP_FLOWERS } = IMG_CDN;

const transition = {
  signIn: 'translate-x-[0]',
  signUp: '-translate-x-[66.67%]',
  default: '-translate-x-[33.36%]',
};

function SignInSignUp() {
  const [SignInSignUpState, setSignInSignUpState] = useState('default');

  return (
    <div className="w-screen h-screen bg-violet-100 flex justify-center items-center">
      <div className="w-4/5 h-auto lg:h-4/5 rounded-lg shadow-xl bg-white overflow-hidden">
        <div
          className={`w-[300%] h-full flex ${transition[SignInSignUpState]} duration-500`}
        >
          <SignIn setSignInSignUpState={setSignInSignUpState} />
          <SignInSignUpScreen
            setSignInSignUpState={setSignInSignUpState}
            SignInSignUpState={SignInSignUpState}
          />
          <SignUp setSignInSignUpState={setSignInSignUpState} />
        </div>
      </div>
    </div>
  );
}

export default SignInSignUp;

const SignInSignUpScreen = ({ setSignInSignUpState }) => (
  <div className="w-1/3 h-full flex flex-col-reverse lg:flex-row">
    <div className="w-full h-1/2 flex flex-col gap-4 justify-evenly items-center p-10 lg:h-full lg:w-1/2">
      <h1 className="text-2xl text-center md:text-4xl text-violet-900">
        Welcome to <br className="md:hidden" /> Flower Store!!
      </h1>
      <span className="w-full flex flex-col items-center gap-4">
        <Button onClick={() => setSignInSignUpState('signIn')}>Sign In</Button>
        <Button
          onClick={() => setSignInSignUpState('signUp')}
          btnStyle="outlined"
        >
          Sign Up
        </Button>
      </span>
    </div>
    <img
      src={SIGN_IN_SIGN_UP_FLOWERS}
      className="w-full h-1/2 lg:h-full lg:w-1/2"
    />
  </div>
);
