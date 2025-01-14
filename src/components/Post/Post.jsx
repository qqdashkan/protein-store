function Post(props) {
  const { title, url } = props;
  return (
    <div className="inline-block w-1/3 text-white">
      <img src={url} alt={title} className="my-5 h-[300px] w-[400px]" />
      <h2 className="my-2 h-16 whitespace-normal font-title text-2xl">
        {title}
      </h2>
      <p className="w-[350px] whitespace-normal">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
        debitis magnam dolor itaque hic corrupti quidem deserunt quo laborum,
        odit aspernatur porro, non voluptatem velit animi in asperiores dolorem
        autem!
      </p>
    </div>
  );
}
export default Post;
