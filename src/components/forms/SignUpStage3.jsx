import { useForm } from 'react-hook-form';

import Button from '../global/Button';
import { Input } from '../global/Input';

const SignUpFormStep3 = ({ handleSignUpStage }) => {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm();

  const {
    address: addressError,
    city: cityError,
    state: stateError,
    country: countryError,
  } = errors;

  const onSubmit = (data) => console.log(data);

  return (
    <div className="w-1/3 h-full flex flex-col justify-center gap-2 lg:gap-4 px-1">
      <p>Step 2 - Address Info</p>
      <form onSubmit={handleSubmit(onSubmit)}>
        <Input.Text
          placeholder="Address"
          register={register}
          name="address"
          validationType="AddressValidation"
          error={addressError}
        />
        <Input.Text
          placeholder="City"
          register={register}
          name="city"
          validationType="CityValidation"
          error={cityError}
        />
        <Input.Text
          placeholder="State"
          register={register}
          name="state"
          validationType="StateValidation"
          error={stateError}
        />
        <Input.Text
          placeholder="Country"
          register={register}
          name="country"
          validationType="CountryValidation"
          error={countryError}
        />
        <span className="flex gap-2">
          <Button onClick={() => handleSignUpStage(1)}>Back</Button>
          <Button type="submit" btnStyle="outlined">
            Sign Up
          </Button>
        </span>
      </form>
    </div>
  );
};

export default SignUpFormStep3;
