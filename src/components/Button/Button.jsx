function Button({ children }) {
  return (
    <button className="h-12 w-40 border border-[#be9f57] hover:bg-[#be9f57] hover:text-black focus:bg-[#be9f57] focus:text-black">
      {children}
    </button>
  );
}

export default Button;
