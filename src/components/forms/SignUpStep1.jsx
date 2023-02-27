import { useForm } from 'react-hook-form';

import { ICONS } from '../../constants/ICON_SVG';

import Button from '../global/Button';
import { Input } from '../global/Input';

const SignUpFormStep1 = ({ stage1SubmitHandler }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const { email: emailError, password: passwordError } = errors;

  return (
    <div className="w-1/3 h-full flex flex-col justify-center gap-2 lg:gap-4 px-1">
      <p>Sign Up</p>
      <form onSubmit={handleSubmit(stage1SubmitHandler)}>
        <Input.Email register={register} error={emailError} />
        <Input.Password register={register} error={passwordError} />
        <Button className="my-1" type="submit">
          Sign Up
        </Button>
        <Button
          className="my-1 flex justify-center items-center gap-2"
          btnStyle="outlined"
        >
          <ICONS.GOOGLE /> Sign Up with Google
        </Button>
      </form>
    </div>
  );
};

export default SignUpFormStep1;
