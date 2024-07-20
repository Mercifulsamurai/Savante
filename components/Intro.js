import Image from "next/image";
import Typewriter from "./Typewriter";

const Intro = ({ text }) => {
  return (
    <div className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-gradient-to-r from-slate-800 via-stone-400 to-red-200 bg-blend-darken p-4">
      <div className="w-full lg:w-1/2 flex flex-col justify-center items-start p-4">
        <Typewriter text={text} />
      </div>
      <div className="w-full lg:w-1/2 flex justify-center items-center p-4">
        <Image 
          src="/influencer-hero-img-1536x1411.png"
          width={500}
          height={500}
          alt="Picture of the author"
          className="object-contain"
        />
      </div>
    </div>
  );
};

export default Intro;
