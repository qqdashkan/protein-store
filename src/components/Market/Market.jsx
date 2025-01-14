function Market({ children }) {
  return (
    <section className="mx-auto flex h-auto w-full flex-col">
      <h1 className="mx-auto my-4 w-10/12 font-title text-6xl text-zinc-400">
        popular
      </h1>
      <div className="flex w-full flex-col">{children}</div>
    </section>
  );
}

export default Market;
