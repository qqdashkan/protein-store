import Button from "../Button/Button";

function Navigation() {
  return (
    <nav className="mx-auto flex w-10/12 grow">
      <ul className="flex items-center justify-start gap-x-16 text-nowrap text-zinc-400">
        <li>
          <Button>All products</Button>
        </li>
        <li>
          <Button>
            <p className="uppercase">Bcaa</p>
          </Button>
        </li>
        <li>
          <Button>Whey</Button>
        </li>
        <li>
          <Button>Bars</Button>
        </li>
        <li>
          <Button>Creatine</Button>
        </li>
        <li>
          <p>142 items</p>
        </li>
      </ul>
    </nav>
  );
}

export default Navigation;
