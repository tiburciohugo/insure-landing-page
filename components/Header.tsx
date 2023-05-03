/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import React, { useState } from "react";
import Menu from "./Menu";

export default function Header() {
  const [isOpen, setIsOpen] = useState(true);

  const toggleButton = () => {
    setIsOpen(!isOpen);
  };

  return (
    <>
      <div className="flex w-full items-center justify-between bg-white p-6 md:px-20 lg:px-24 xl:px-36">
        <img src="/assets/logo.svg" alt="Logo" />

        <nav className="hidden items-center gap-6 md:flex">
          <Link href={"#"}>
            <p className="cursor-pointer text-xs font-bold uppercase text-dark-grayish-violet transition delay-100 ease-in-out hover:text-very-dark-violet">
              how we work
            </p>
          </Link>
          <Link href={"#"}>
            <p className="cursor-pointer text-xs font-bold uppercase text-dark-grayish-violet transition delay-100 ease-in-out hover:text-very-dark-violet">
              blog
            </p>
          </Link>
          <Link href={"#"}>
            <p className="cursor-pointer text-xs font-bold uppercase text-dark-grayish-violet transition delay-100 ease-in-out hover:text-very-dark-violet">
              account
            </p>
          </Link>

          <button className="border border-very-dark-violet px-6 py-2 text-xs font-bold uppercase text-very-dark-violet transition delay-100 ease-in-out hover:bg-very-dark-violet hover:text-white">
            view plans
          </button>
        </nav>

        <button onClick={toggleButton} className="cursor-pointer md:hidden">
          <img
            className="transition-opacity delay-300 ease-in-out"
            src={
              isOpen ? "/assets/icon-hamburger.svg" : "/assets/icon-close.svg"
            }
            alt={isOpen ? "icon-hamburger" : "icon-close"}
          />
        </button>
      </div>

      {!isOpen ? (
        <div className="w-full">
          <Menu />
        </div>
      ) : null}
    </>
  );
}
