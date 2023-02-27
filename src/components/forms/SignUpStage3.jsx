import Button from '../global/Button';

const SignUpFormStep3 = ({ handleSignUpStage }) => (
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
      <Button onClick={() => handleSignUpStage(1)}>Back</Button>
      <Button btnStyle="outlined">Sign Up</Button>
    </span>
  </div>
);

export default SignUpFormStep3;
