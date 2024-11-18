const Button = ({ label, iconURL }) => {
  return (
    <button className="flex items-center justify-center gap-2 py-4 text-lg leading-none border px-7 font-montserrat bg-coral-red">
      {label}
      <img
        src={iconURL}
        alt="arrow right icon"
        className="w-5 h-5 ml-2 text-white rounded-full border-coral-red "
      />
    </button>
  );
};
export default Button;
