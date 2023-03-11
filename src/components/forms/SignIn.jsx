import { useForm } from 'react-hook-form';

import { IMG_CDN } from '../../constants/IMG_CDN';
import { ICONS } from '../../constants/ICON_SVG';

import { UseSignIn } from '../../logic/signInSignUp/signIn';

import { Input } from '../global/Input';
import Button from '../global/Button';

const { SIGN_IN } = IMG_CDN;

function SignIn({ setSignInSignUpState }) {
  const { signInSubmitHandler } = UseSignIn();

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { email: emailError, password: passwordError } = errors;

  return (
    <div className="w-1/2 py-3 h-full flex flex-col-reverse justify-end lg:flex-row">
      <div className="w-full h-1/2 flex flex-col gap-4 justify-start items-start px-8 lg:p-6 lg:h-full lg:w-1/2">
        <h1 className="text-lg lg:text-2xl text-violet-900">Flower Store</h1>
        <form
          onSubmit={handleSubmit(signInSubmitHandler)}
          className="w-full h-full flex flex-col justify-center gap-2 lg:gap-3"
        >
          <p>Sign In</p>
          <Input.Email error={emailError} register={register} />
          <Input.Password error={passwordError} register={register} />
          <Button type="submit">Sign In</Button>
          <Button
            type="submit"
            className="flex justify-center items-center gap-2"
            btnStyle="outlined"
          >
            <ICONS.GOOGLE /> Sign In with Google
          </Button>
          <p className="text-sm mt-2">
            Not register yet?{' '}
            <span
              onClick={() => setSignInSignUpState('signUp')}
              className="text-violet-900 cursor-pointer hover:underline"
            >
              Create an account
            </span>
          </p>
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
