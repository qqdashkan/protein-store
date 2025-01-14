import { useEffect, useState } from "react";
import Post from "../Post/Post";

const ACCESS_KEY = "oLdw6aY9E5lVNCQUxxeTTcgxnr1HKkkuBs0XBjgmJWs";
const API_KEY = `https://api.unsplash.com/photos?client_id=${ACCESS_KEY}&page=1&per_page=9`;

function Gallery() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(API_KEY)
      .then((response) => response.json())
      .then((json) => setData(json));
  }, []);

  return (
    <div className="no-scrollbar mx-auto flex h-auto w-full gap-9 overflow-hidden overflow-x-scroll whitespace-nowrap">
      {data.map(({ id, description, urls }) => (
        <Post key={id} title={description} url={urls.regular} />
      ))}
    </div>
  );
}

export default Gallery;
