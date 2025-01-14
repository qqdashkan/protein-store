function CardButton(props) {
  const { name, price, imgURL } = props;
  return (
    <div className="flex h-64 w-52 flex-col items-center justify-center border border-[#be9f57] hover:cursor-pointer">
      <div className="grid h-full w-full place-items-center">
        <img
          src={imgURL}
          alt={name}
          className="ease mx-auto w-[150px] py-6 transition duration-700 hover:scale-105 hover:drop-shadow-3xl"
        />
      </div>
      <span className="flex h-[50px] w-full items-end justify-center border-t border-[#be9f57] text-zinc-400">
        <div className="flex h-full w-4/12 items-center justify-center border-r border-[#be9f57] px-2 font-title text-2xl">
          {price}
        </div>
        <div className="flex h-full w-8/12 items-center justify-center px-3 text-xs">
          {name}
        </div>
      </span>
    </div>
  );
}

export default CardButton;
