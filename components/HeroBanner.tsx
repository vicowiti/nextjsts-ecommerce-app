import Link from "next/link";
import React from "react";
import { BannerData } from "./lib/types";
import { urlFor } from "./lib/client";

interface HeroBannerProps {
  heroBannerData: BannerData[];
}

const HeroBanner = ({ heroBannerData }: HeroBannerProps) => {
  const banner = heroBannerData[0];
  return (
    <section className="bg-[#dcdcdc] max-w-[140000px] h-[500px]  rounded-lg">
      <div>
        <p>{banner.smallText}</p>
        <h3>{banner.midText}</h3>
        <h1>{banner.product}</h1>
        <img src={urlFor(banner.image)} alt="header image" />
        <div>
          <Link href={`/product/${banner.product}`}>
            <button className="bg-[#f02d34] py-2.5 px-4 rounded-3xl text-white">
              {banner.buttonText}
            </button>
          </Link>
        </div>
        <article>{banner.desc}</article>
      </div>
    </section>
  );
};

export default HeroBanner;
