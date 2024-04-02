const Button = ({ content }) => {
  return (
    <>
      <div className="grid place-content-center relative w-24 h-8 rounded-lg overflow-hidden bg-black text-white transition-all duration-300 hover:scale-105 active:scale-95 capitalize before:absolute before:-left-10 before:w-8 before:h-[120%] before:bg-white/35 before:-skew-x-12 before:blur-sm before:hover:translate-x-48 before:transition-all before:duration-700">
        {content}
      </div>
    </>
  );
};

export default Button;
