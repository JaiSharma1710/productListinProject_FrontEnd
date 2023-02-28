import { useForm } from 'react-hook-form';

import Button from '../global/Button';
import { Input } from '../global/Input';

const SignUpFormStep2 = ({ handleSignUpStage, stage2SubmitHandler }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    firstName: firstNameError,
    lastName: lastNameError,
    mobileNumber: mobileNumberError,
  } = errors;
  return (
    <div className="w-1/3 h-full flex flex-col justify-center gap-2 lg:gap-4 px-1">
      <p>Step 1 - Basic Info</p>
      <form onSubmit={handleSubmit(stage2SubmitHandler)}>
        <Input.Text
          name="firstName"
          validationType="FirstNameValidation"
          register={register}
          error={firstNameError}
          placeholder="First Name"
        />
        <Input.Text
          name="lastName"
          validationType="LastNameValidation"
          register={register}
          error={lastNameError}
          placeholder="Last Name"
        />
        <Input.PhoneNumber register={register} error={mobileNumberError} />
        <span className="flex gap-2">
          <Button onClick={() => handleSignUpStage(0)}>Back</Button>
          <Button type="submit" btnStyle="outlined">
            Next
          </Button>
        </span>
      </form>
    </div>
  );
};

export default SignUpFormStep2;
