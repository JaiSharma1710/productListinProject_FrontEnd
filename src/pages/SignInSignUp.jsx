import SignIn from '../components/forms/SignIn.jsx';
import SignUp from '../components/forms/SignUp.jsx';
import { UseGlobalSignInSignUp } from '../logic/signInSignUp/globalSignInSignUp.js';

const transition = {
  signUp: '-translate-x-[50%]',
  default: '-translate-x-[0]',
};

function SignInSignUp() {
  const { setSignInSignUpState, SignInSignUpState } = UseGlobalSignInSignUp();

  return (
    <div className="relative overflow-hidden w-screen h-screen bg-violet-100 flex justify-center items-center">
      <div className="block absolute bottom-0 right-0 bg-gradient-to-r from-violet-200 to-indigo-600 rounded-3xl rotate-45 w-96 h-96" />
      <div className="block absolute top-0 left-0 bg-gradient-to-r from-violet-200 to-indigo-600 rounded-3xl rotate-45 w-96 h-96" />
      <div className="animate__animated animate__fadeIn w-[90%] lg:w-4/5 h-auto lg:h-4/5 rounded-lg shadow-xl bg-white overflow-hidden">
        <div
          className={`w-[200%] h-full flex ${transition[SignInSignUpState]} duration-500`}
        >
          <SignIn setSignInSignUpState={setSignInSignUpState} />
          <SignUp setSignInSignUpState={setSignInSignUpState} />
        </div>
      </div>
    </div>
  );
}

export default SignInSignUp;
