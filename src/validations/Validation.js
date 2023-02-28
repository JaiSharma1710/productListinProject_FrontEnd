export const Validation = {
  EmailValidation: {
    required: {
      message: 'Email is required',
      value: true,
    },
    pattern: {
      value: /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/,
      message: 'Please enter a valid Email',
    },
  },
  PasswordValidation: {
    required: {
      value: true,
      message: 'Password is required',
    },
    minLength: {
      value: 8,
      message: 'Password must be minimum 8 characters long',
    },
  },
  FirstNameValidation: {
    required: {
      value: true,
      message: 'Please enter your first name',
    },
  },
  LastNameValidation: {
    required: {
      value: true,
      message: 'Please enter your last name',
    },
  },
  AddressValidation: {
    required: {
      value: true,
      message: 'Please enter your Address',
    },
  },
  CityValidation: {
    required: {
      value: true,
      message: 'Please enter your City',
    },
  },
  StateValidation: {
    required: {
      value: true,
      message: 'Please enter your State',
    },
  },
  CountryValidation: {
    required: {
      value: true,
      message: 'Please enter your Country',
    },
  },
  PhoneNumberValidation: {
    required: {
      value: true,
      message: 'Please enter your phone number',
    },
    minLength: {
      value: 10,
      message: 'Phone number must be 10 digits long',
    },
  },
};
