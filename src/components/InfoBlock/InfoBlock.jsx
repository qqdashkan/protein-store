function InfoBlock() {
  return (
    <section className="mx-auto mb-20 flex h-full w-full items-center justify-center text-zinc-400">
      <div className="flex h-full w-9/12 justify-between">
        <span className="flex items-center gap-5">
          <i class="fi fi-rs-shipping-timed text-6xl"></i>
          <p className="w-1/2 text-2xl font-bold">Fast Shipping</p>
        </span>
        <span className="flex items-center gap-5">
          <i class="fi fi-rr-credit-card text-6xl"></i>
          <p className="w-1/2 text-2xl font-bold">Online payment</p>
        </span>
        <span className="flex items-center gap-5">
          <i class="fi fi-rr-gift-box-benefits text-6xl"></i>
          <p className="w-1/2 text-2xl font-bold">Bonus system</p>
        </span>
        <span className="flex items-center gap-5">
          <i class="fi fi-rr-chat-bubble-call text-6xl"></i>
          <p className="w-1/2 text-2xl font-bold">Online support</p>
        </span>
      </div>
    </section>
  );
}

export default InfoBlock;
