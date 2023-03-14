import { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { LocalStorageHelper } from '../../helper/StorageHelper';
import Button from '../global/Button';
import { Input } from '../global/Input';

function ProfileUpdateFrom({ setIsUpdateFormActive }) {
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm({
    defaultValues: {
      fullName: '',
      email: '',
      mobileNumber: '',
      address: '',
    },
  });

  const {
    fullName: fullNameError,
    email: emailError,
    mobileNumber: mobileNumberError,
    address: addressError,
  } = errors;

  useEffect(() => {
    const { firstName, lastName, email, mobileNumber, address } = JSON.parse(
      LocalStorageHelper.getUserData(),
    );

    reset({
      fullName: `${firstName} ${lastName}`,
      email: email,
      mobileNumber: mobileNumber,
      address: address,
    });
  }, []);

  const onSubmit = (data) => console.log(data);

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className="flex flex-col justify-center px-2 md:px-10 h-full w-full lg:w-2/3"
    >
      <Input.Text
        name="fullName"
        placeholder="Full Name"
        register={register}
        validationType="FullNameValidation"
        error={fullNameError}
      />

      <Input.Email
        name="email"
        placeholder="Email"
        register={register}
        validationType="EmailValidation"
        error={emailError}
      />

      <Input.PhoneNumber
        name="mobileNumber"
        placeholder="Mobile No."
        register={register}
        validationType="PhoneNumberValidation"
        error={mobileNumberError}
      />

      <Input.Text
        name="address"
        placeholder="Address"
        register={register}
        validationType="AddressValidation"
        error={addressError}
      />
      <div className="flex gap-2">
        <Button type="submit">Update</Button>
        <Button
          onClick={() => setIsUpdateFormActive(false)}
          btnStyle="outlined"
        >
          Cancel
        </Button>
      </div>
    </form>
  );
}

export default ProfileUpdateFrom;
