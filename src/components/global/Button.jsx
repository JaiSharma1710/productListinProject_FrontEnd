const BtnType = {
  default:
    'w-full border border-white bg-violet-400 py-3 rounded-lg text-white font-bold duration-300',
  outlined:
    'w-full border border-violet-400 py-3 rounded-lg text-violet-400 font-bold duration-300 hover:bg-violet-400 hover:text-white hover:border-white',
};

function Button({
  className,
  children,
  onClick,
  type = 'button',
  btnStyle = 'default',
}) {
  return (
    <button
      type={type}
      onClick={onClick}
      className={`${className} ${BtnType[btnStyle]}`}
    >
      {children}
    </button>
  );
}

export default Button;
