import { data } from "../../../data.js";

import { Carousel } from "@material-tailwind/react";

function CarouselComponent() {
  return (
    <Carousel
      loop={true}
      autoplay={true}
      transition={{ duration: 1 }}
      navigation={() => {
        return;
      }}
      className="w-1/2 rounded-xl"
    >
      {data.slice(0, 5).map((item) => (
        <div
          key={item.id}
          className="mx-auto flex h-full w-80 items-center justify-center"
        >
          <img
            src={item.item_URL}
            alt={item.title}
            className="ease aspect-square max-h-full max-w-full object-contain transition duration-700 hover:scale-105 hover:cursor-pointer hover:drop-shadow-3xl"
          />
        </div>
      ))}
    </Carousel>
  );
}

export default CarouselComponent;
