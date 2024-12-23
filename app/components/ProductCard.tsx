import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
  id: string
  name: string
  price: number
  image: string,
  stock: boolean
}

export const ProductCard = ({ id, name, price, image, stock }: ProductCardProps) => {
  return (
  <Link href={`/product/${id}`}>
      <div className="flex flex-col group relative transition-transform hover:scale-105 p-3 gap-3">
        <div className="relative aspect-square overflow-hidden w-full">
          <Image
            src={image}
            alt={name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-center rounded-lg"
            priority
          />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 truncate">{name}</h3>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-900">${price}</p>
          <p>{stock ? "Disponible" : "No disponible"}</p>
        </div>
      </div>
    </Link>    
    )
}

