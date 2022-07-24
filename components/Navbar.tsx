import React from "react";
import Link from "next/link";
import { AiOutlineShopping } from "react-icons/ai";
import { BsPhoneLandscape } from "react-icons/bs";

const Navbar = () => {
  return (
    <nav className="h-16 flex justify-between items-center mx-5">
      <section className=" text-gray-700 cursor-pointer">
        <div>
          <Link href="/">
            <h1 className="text-2xl flex items-center">
              VDIAL
              <BsPhoneLandscape />
            </h1>
          </Link>
        </div>
      </section>
      <section>
        <button>
          <AiOutlineShopping size={40} />
          <h6 className="absolute w-5 h-5 bg-red-600 flex items-center justify-center text-white rounded-full top-4 right-4">
            {4}
          </h6>
        </button>
      </section>
    </nav>
  );
};

export default Navbar;
