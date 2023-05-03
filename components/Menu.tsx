import Link from "next/link";
import React from "react";

export default function Menu() {
  return (
    <nav className="absolute top-20 mx-auto h-[587px] w-full flex-col items-center justify-center bg-very-dark-violet bg-pattern-mobile-nav bg-bottom bg-no-repeat px-6 pt-6 text-center md:hidden">
      <Link href={"#"}>
        <p className="mt-6 cursor-pointer text-xl font-bold uppercase text-white transition delay-100 ease-in-out hover:text-very-dark-violet">
          how we work
        </p>
      </Link>
      <Link href={"#"}>
        <p className="mt-8 cursor-pointer text-xl font-bold uppercase text-white transition delay-100 ease-in-out hover:text-very-dark-violet">
          blog
        </p>
      </Link>
      <Link href={"#"}>
        <p className="mt-8 cursor-pointer text-xl font-bold uppercase text-white transition delay-100 ease-in-out hover:text-very-dark-violet">
          account
        </p>
      </Link>

      <button className="mt-8 w-full border border-white px-6 py-3 text-2xl font-bold uppercase text-white">
        view plans
      </button>
    </nav>
  );
}
