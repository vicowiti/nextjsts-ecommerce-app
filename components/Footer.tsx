import Link from "next/link";
import React from "react";
import { AiFillInstagram, AiOutlineTwitter } from "react-icons/ai";

const Footer = () => {
  return (
    <div className="mx-5 flex flex-col justify-center items-center my-10">
      <div className="flex gap-6 ">
        <div className="cursor-pointer">
          <Link href="">
            <AiFillInstagram size={30} />
          </Link>
        </div>
        <div className="cursor-pointer">
          <Link href="https://twitter.com/victorr_js">
            <AiOutlineTwitter size={30} />
          </Link>
        </div>
      </div>
      <p>{new Date().getFullYear()} Vdial Tech, All Rights Reserved</p>
    </div>
  );
};

export default Footer;
