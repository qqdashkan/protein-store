function Blog({ children }) {
  return (
    <section className="mx-auto flex h-screen w-full flex-col">
      <h1 className="mx-auto w-10/12 font-title text-6xl text-zinc-400">
        blog
      </h1>
      <div className="mx-auto flex w-10/12">{children}</div>
      <div className="mx-auto h-20 w-full grow"></div>
    </section>
  );
}

export default Blog;
