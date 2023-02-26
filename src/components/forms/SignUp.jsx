import { IMG_CDN } from '../../constants/IMG_CDN';
import { ICONS } from '../../constants/ICON_SVG';

import { useSignUpLogin } from '../../logic/signInSignUp/signUp';
import Button from '../global/Button';

const { SIGN_UP } = IMG_CDN;

const formTransitions = {
  0: 'translate-x-0',
  1: '-translate-x-[33.3%]',
  2: '-translate-x-[66.65%]',
};

function SignUp({ setSignInSignUpState }) {
  const { signUpStage, signUpStageHandler, setSignUpStage } = useSignUpLogin();

  const handleBackClick = () => {
    setSignInSignUpState('default');
    setSignUpStage(0);
  };

  return (
    <div className="w-1/3 h-full flex flex-col-reverse justify-end lg:flex-row">
      <div className="w-full h-1/2 flex flex-col gap-4 justify-start items-start px-8 lg:p-10 lg:h-full lg:w-1/2">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-lg lg:text-2xl text-violet-900">Flower Store</h1>
          {signUpStage === 0 && (
            <p
              onClick={handleBackClick}
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
            <SignUpFormStep1 signUpStageHandler={signUpStageHandler} />
            <SignUpFormStep2 signUpStageHandler={signUpStageHandler} />
            <SignUpFormStep3 signUpStageHandler={signUpStageHandler} />
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

const SignUpFormStep1 = ({ signUpStageHandler }) => (
  <div className="w-1/3 h-full flex flex-col justify-center gap-2 lg:gap-4 px-1">
    <p>Sign Up</p>
    <input
      type="email"
      className="border border-gray-300 rounded px-2 outline-none w-full h-10"
      placeholder="Email"
    />
    <input
      type="password"
      className="border border-gray-300 rounded px-2 outline-none w-full h-10"
      placeholder="Password"
    />
    <Button onClick={() => signUpStageHandler(1)}>Sign Up</Button>
    <Button className="flex justify-center items-center gap-2" type="outlined">
      <ICONS.GOOGLE /> Sign Up with Google
    </Button>
  </div>
);

const SignUpFormStep2 = ({ signUpStageHandler }) => (
  <div className="w-1/3 h-full flex flex-col justify-center gap-2 lg:gap-4 px-1">
    <p>Step 1 - Basic Info</p>
    <input
      type="text"
      className="border border-gray-300 rounded px-2 outline-none w-full h-10"
      placeholder="First Name"
    />
    <input
      type="text"
      className="border border-gray-300 rounded px-2 outline-none w-full h-10"
      placeholder="Last Name"
    />
    <input
      type="number"
      className="border border-gray-300 rounded px-2 outline-none w-full h-10"
      placeholder="Mobile Number"
    />
    <span className="flex gap-2">
      <Button onClick={() => signUpStageHandler(0)}>Back</Button>
      <Button onClick={() => signUpStageHandler(2)} type="outlined">
        Next
      </Button>
    </span>
  </div>
);

const SignUpFormStep3 = ({ signUpStageHandler }) => (
  <div className="w-1/3 h-full flex flex-col justify-center gap-2 lg:gap-4 px-1">
    <p>Step 2 - Address Info</p>
    <input
      type="text"
      className="border border-gray-300 rounded px-2 outline-none w-full h-10"
      placeholder="Address"
    />
    <input
      type="text"
      className="border border-gray-300 rounded px-2 outline-none w-full h-10"
      placeholder="City"
    />
    <input
      type="text"
      className="border border-gray-300 rounded px-2 outline-none w-full h-10"
      placeholder="State"
    />
    <input
      type="text"
      className="border border-gray-300 rounded px-2 outline-none w-full h-10"
      placeholder="Country"
    />
    <span className="flex gap-2">
      <Button onClick={() => signUpStageHandler(1)}>Back</Button>
      <Button type="outlined">Sign Up</Button>
    </span>
  </div>
);
