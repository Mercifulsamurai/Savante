import Image from "next/image";

const categories = [
  { name: "influencer1", image: "/1.jpeg" },
  { name: "influencer2", image: "/2.jpeg" },
  { name: "influencer3", image: "/3.jpeg" },
  { name: "influencer4", image: "/4.jpeg" },
];

const Collabimage = () => {
  return (
    <div className="p-4">
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div key={category.name} className="border-2 rounded-l border-black shadow-xl h-80 overflow-hidden">
            <div className="flex items-center justify-center h-full">
              <Image
                src={category.image}
                alt={category.name}
                width={350}
                height={300}
                className="object-contain"
              />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Collabimage;

