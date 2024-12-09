"use client";
import Image from "next/image";

const BrandShowcase = () => {
  return (
    <div className="bg-black py-8">
      <div className="container mx-auto flex justify-center items-center">
        {/* Brand Logos */}
        <div className="flex flex-wrap justify-center items-center gap-8 lg:gap-44">
          <div className="flex justify-center items-center">
            <Image
              src="/images/versace.png"
              alt="Versace"
              width={120}
              height={40}
              className="text-white"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/zara.png"
              alt="Zara"
              width={70}
              height={40}
              className="text-white"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/gucci.png"
              alt="Gucci"
              width={120}
              height={40}
              className="text-white"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/prada.png"
              alt="Prada"
              width={120}
              height={40}
              className="text-white"
            />
          </div>
          <div className="flex justify-center items-center">
            <Image
              src="/images/calvin-klein.png"
              alt="Calvin Klein"
              width={120}
              height={40}
              className="text-white"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default BrandShowcase;
