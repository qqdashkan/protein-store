"use client";
import logo from "../../assets/go-on-logo.svg";
import { Typography } from "@material-tailwind/react";

const LINKS = [
  {
    title: <i class="fi fi-brands-instagram"></i>,
    href: "#",
  },
  {
    title: <i class="fi fi-brands-facebook"></i>,
    href: "#",
  },
  {
    title: <i class="fi fi-brands-whatsapp"></i>,
    href: "#",
  },
  {
    title: "About Us",
    href: "/about",
  },
  {
    title: "Partners",
    href: "#",
  },
  {
    title: "Delivery and payment",
    href: "#",
  },
  {
    title: "Customers",
    href: "#",
  },
  {
    title: "Contact Us",
    href: "#",
  },
];

function Footer() {
  return (
    <footer className="mb-10 w-full">
      <hr className="border-surface mb-10" />
      <div className="mx-auto flex w-10/12 flex-row flex-wrap items-center justify-center gap-x-12 gap-y-3 text-center md:justify-between">
        <img src={logo} alt="brand" className="w-52" />
        <ul className="flex flex-wrap items-center gap-x-6 gap-y-2 text-zinc-400">
          {LINKS.map(({ title, href }, key) => (
            <li key={key}>
              <Typography
                as="a"
                href={href}
                className="font-main hover:text-white"
              >
                {title}
              </Typography>
            </li>
          ))}
        </ul>
      </div>
    </footer>
  );
}

export default Footer;
