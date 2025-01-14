function RightSide() {
  return (
    <div className="flex h-full w-1/2 items-center justify-center border-l">
      <div className="mx-auto flex w-9/12 flex-col space-y-6 text-left">
        <h2 className="font-title text-7xl font-normal uppercase text-white">
          peanut butter
        </h2>
        <h3 className="font-flavour text-4xl text-[#be9f57]">Smooth Crunchy</h3>
        <h4 className="max-w-[500px] text-base text-neutral-500">
          GO ON Nutrition crunchy is an exceptional product made from 100%
          peanuts with no added ingredients. Its nutty flavour is the perfect
          match for sweet, savoury, or spicy foods.
        </h4>
        <button className="h-12 w-44 border uppercase text-white">
          shop now
        </button>
      </div>
    </div>
  );
}

export default RightSide;
