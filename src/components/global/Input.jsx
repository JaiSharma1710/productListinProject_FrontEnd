import { Validation } from '../../validations/Validation';

export const Input = {
  Email: ({ register, error }) => (
    <div className="h-14">
      <input
        type="email"
        className="border border-gray-300 rounded px-2 outline-none w-full h-10"
        placeholder="Email"
        {...register('email', Validation.EmailValidation)}
      />
      {error && (
        <p className="pl-2 font-light text-xs text-red-600">{error.message}</p>
      )}
    </div>
  ),
  Password: ({ register, error }) => (
    <div className="h-14">
      <input
        type="password"
        className="border border-gray-300 rounded px-2 outline-none w-full h-10"
        placeholder="Password"
        {...register('password', Validation.PasswordValidation)}
      />
      {error && (
        <p className="pl-2 font-light text-xs text-red-600">{error.message}</p>
      )}
    </div>
  ),
  FirstName: ({ register, error }) => (
    <div className="h-14">
      <input
        type="text"
        className="border border-gray-300 rounded px-2 outline-none w-full h-10"
        placeholder="First Name"
        {...register('firstName', Validation.FirstNameValidation)}
      />
      {error && (
        <p className="pl-2 font-light text-xs text-red-600">{error.message}</p>
      )}
    </div>
  ),
  LastName: ({ register, error }) => (
    <div className="h-14">
      <input
        type="text"
        className="border border-gray-300 rounded px-2 outline-none w-full h-10"
        placeholder="Last Name"
        {...register('lastName', Validation.LastNameValidation)}
      />
      {error && (
        <p className="pl-2 font-light text-xs text-red-600">{error.message}</p>
      )}
    </div>
  ),
  PhoneNumber: ({ register, error }) => (
    <div className="h-14">
      <input
        type="text"
        className="border border-gray-300 rounded px-2 outline-none w-full h-10"
        placeholder="Mobile Number"
        {...register('mobileNumber', Validation.PhoneNumberValidation)}
      />
      {error && (
        <p className="pl-2 font-light text-xs text-red-600">{error.message}</p>
      )}
    </div>
  ),
};
