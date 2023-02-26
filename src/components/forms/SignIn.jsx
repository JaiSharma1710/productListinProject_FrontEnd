import { IMG_CDN } from '../../constants/IMG_CDN';
import { ICONS } from '../../constants/ICON_SVG';
import Button from '../global/Button';

const { SIGN_IN } = IMG_CDN;

function SignIn({ setSignInSignUpState }) {
  return (
    <div className="w-1/3 h-full flex flex-col-reverse justify-end lg:flex-row">
      <div className="w-full h-1/2 flex flex-col gap-4 justify-start items-start px-8 lg:p-10 lg:h-full lg:w-1/2">
        <div className="flex justify-between w-full items-center">
          <h1 className="text-lg lg:text-2xl text-violet-900">Flower Store</h1>
          <p
            onClick={() => setSignInSignUpState('default')}
            className="text-sm lg:text-lg text-violet-500 cursor-pointer"
          >
            Back
          </p>
        </div>
        <form className="w-full h-full flex flex-col justify-center gap-3 lg:gap-8">
          <p>Sign In</p>
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
          <Button>Sign In</Button>
          <Button
            className="flex justify-center items-center gap-2"
            type="outlined"
          >
            <ICONS.GOOGLE /> Sign In with Google
          </Button>
        </form>
      </div>
      <img
        src={SIGN_IN}
        className="mx-auto w-[15rem] h-2/5 lg:h-auto lg:w-1/2"
      />
    </div>
  );
}

export default SignIn;
