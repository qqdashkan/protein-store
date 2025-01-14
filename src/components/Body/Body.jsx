function Body({ children }) {
  return (
    <main className="mx-auto flex h-screen w-full flex-col items-stretch self-center">
      <div className="flex grow-[2]">{children}</div>
      <hr className="border-surface grow" />
    </main>
  );
}

export default Body;
