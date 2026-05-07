import Image from "next/image";



import hero from '@/assets/hero.jpg'
import Link from "next/link";

const Hero = () => {
  return (
  <div className="relative mt-5 ">
<Image className="rounded-lg  mx-auto h-fit object-center" width={1100} height={100} src={hero} alt="hero"></Image>
<div
className=" grid object-contain gap-2 md:gap-4 justify-start my-auto items-center text-[20px] absolute top-5 h-fit left-10 lg:left-20 bottom-1.5 text-black ml-1 lg:ml-10 rounded-lg">

       <div className="font-extrabold text-2xl">  Get Your Qurbani Animal 🐐🐄  </div>
          <span className="font-medium text-xl"> • Healthy Animals • Best Price 
            <br />
            • Trusted Sellers</span>
          <Link href={'/animals'}><button className="text-white btn btn-info">Explore More</button></Link>
</div>
  </div>
  );
};

export default Hero;