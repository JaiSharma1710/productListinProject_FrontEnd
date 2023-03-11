import { IMG_CDN } from '../../constants/IMG_CDN';

import { useSignUpLogin } from '../../logic/signInSignUp/signUp';

import SignUpFormStep1 from './SignUpStep1';
import SignUpFormStep2 from './SignUpStep2';
import SignUpFormStep3 from './SignUpStage3';

const { SIGN_UP } = IMG_CDN;

const formTransitions = {
  0: 'translate-x-0',
  1: '-translate-x-[33.3%]',
  2: '-translate-x-[66.65%]',
};

function SignUp({ setSignInSignUpState }) {
  const {
    signUpStage,
    stage1SubmitHandler,
    handleSignUpStage,
    stage2SubmitHandler,
    stage3SubmitHandler,
  } = useSignUpLogin();

  return (
    <div className="w-1/2 py-3 h-full flex flex-col-reverse justify-end lg:flex-row">
      <div className="w-full h-full flex flex-col gap-4 justify-start items-start px-8 lg:p-10 lg:h-full lg:w-1/2">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-lg lg:text-2xl text-violet-900">Flower Store</h1>
          {signUpStage === 0 && (
            <p
              onClick={() => setSignInSignUpState('default')}
              className="text-sm lg:text-lg text-violet-500 cursor-pointer"
            >
              Back
            </p>
          )}
        </div>
        <div className="overflow-hidden h-full w-full">
          <div
            className={`h-full w-[300%] flex justify-center items-center ${formTransitions[signUpStage]} duration-300`}
          >
            <SignUpFormStep1 stage1SubmitHandler={stage1SubmitHandler} />
            <SignUpFormStep2
              handleSignUpStage={handleSignUpStage}
              stage2SubmitHandler={stage2SubmitHandler}
            />
            <SignUpFormStep3
              handleSignUpStage={handleSignUpStage}
              stage3SubmitHandler={stage3SubmitHandler}
            />
          </div>
        </div>
      </div>
      <img
        src={SIGN_UP}
        className="mx-auto w-[15rem] h-2/5 lg:h-auto lg:w-1/2"
      />
    </div>
  );
}

export default SignUp;
