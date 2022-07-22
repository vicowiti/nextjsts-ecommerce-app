import React from "react";
import Link from "next/link";
import { urlFor } from "./lib/client";

const FooterBanner = ({
  footerData: {
    discount,
    largeText1,
    largeText2,
    saleTime,
    smallText,
    midText,
    desc,
    product,
    buttonText,
    image,
  },
}) => {
  return (
    <div className="bg-[#f02d34] rounded-lg max-w-[140000px] h-[50vh] text-white">
      <div>
        <section>
          <p>{discount}</p>
          <h3>{largeText1}</h3>
          <h3>{largeText2}</h3>
          <p>{saleTime}</p>
        </section>

        <section>
          <p>{smallText}</p>
          <p>{midText}</p>
          <p>{desc}</p>
          <Link href={`/product/${product}`}>
            <button>{buttonText}</button>
          </Link>
        </section>
        <img src={urlFor(image)} />
      </div>
    </div>
  );
};

export default FooterBanner;
