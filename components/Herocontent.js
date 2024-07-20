

import Image from "next/image";

const Herocontent = () => {
  return (
    <div className="min-h-40 bg-gray-200">
      <h2 className="flex justify-center text-3xl md:text-4xl lg:text-5xl py-4 text-neutral-600">
        Join Our Network
      </h2>
      <div className="flex flex-col lg:flex-row items-center justify-center min-h-96 p-4">
        <div className="w-full lg:w-1/2 flex items-center justify-center p-4">
          <Image
            src="/strategy-discussion.png"
            width={350}
            height={350}
            alt="Picture of people discussing strategy"
            className="object-contain"
          />
        </div>
        <div className="w-full lg:w-1/2 flex flex-col items-start justify-center p-4">
          <h2 className="flex items-center justify-start text-xl md:text-2xl py-4 text-zinc-700">
            <span className="h-8 w-2 bg-red-700 mx-2"></span>We can Help you Grow.
          </h2>
          <div className="text-sm md:text-xl text-zinc-600 italic font-Roboto p-2">
            Unlock the full potential of your brand with our expert AI-powered influencer connections! We specialize in seamlessly bridging the gap between brands and influencers, creating powerful collaborations that resonate with audiences. Leveraging cutting-edge AI technology, we ensure your brand partners with the perfect influencers to amplify your message, boost engagement, and drive real results. Whether you're a budding brand or an established name, our strategic, AI-driven approach elevates your digital presence. Let's connect your brand with the voices that matter and watch your influence soar!
          </div>
        </div>
      </div>
    </div>
  );
};

export default Herocontent;
