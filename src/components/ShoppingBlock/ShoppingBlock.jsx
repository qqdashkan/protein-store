import { data } from "../../../data.js";
import CardButton from "../CardButton/CardButton";

function ShoppingBlock() {
  return (
    <div className="mx-auto flex h-full w-10/12 flex-col justify-center">
      <div className="no-scrollbar my-10 grid w-full grid-flow-col grid-rows-2 gap-7 overflow-x-scroll">
        {data.map((item) => (
          <div key={item.id} className="hover:bg-zinc-600 hover:bg-opacity-15">
            <CardButton
              name={item.title}
              price={item.price}
              imgURL={item.item_URL}
            />
          </div>
        ))}
      </div>
      <div className="mx-auto h-20 w-4/5 grow"></div>
    </div>
  );
}

export default ShoppingBlock;
