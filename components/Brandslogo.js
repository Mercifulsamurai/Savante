import Image from "next/image"

const brands = [
    {name: "adidas", image: "/adidas.png"},
    {name: "cocacola", image: '/cocacola.webp'},
    {name: "gap", image: '/gap.jpg'},
    {name: "dominos", image: '/Gucci.png'},
    {name: "Gucci", image: '/Gucci.png'},
    {name: "hp", image: '/hp.png'},
    {name: "kfc", image: '/kfc.png'},
    {name: "lacoste", image: '/lacoste.png'},
    {name: "mastercard", image: '/mastercard.png'},
    {name: "nutella", image: '/nutella.png'},
    {name: "pepsi", image: '/pepsi.png'},
    {name: "starbucks", image: '/starbucks.png'},
]

const Brandslogo = () => {
    return(

    
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 p-4">
        {brands.map((brand) => (
          <div key={brand.name} className=" h-auto overflow-hidden">
            <div className="flex items-center justify-center p-4 w-full h-48">
              <Image src={brand.image} alt={brand.name} width={100} height={100} className="object-contain w-full h-full" />
            </div>
          </div>
        ))}
      </div>
    )
}

export default Brandslogo