import Image from "next/image"
import Link from "next/link"

interface ProductCardProps {
    data: any
}

export const ProductCard = ({ data }: ProductCardProps) => {
  return (
  <Link href={`/product/${data.id}`}>
      <div className="flex flex-col group relative transition-transform hover:scale-105 p-3 gap-3">
        <div className="relative aspect-square overflow-hidden w-full">
          <Image
            src={data.images[0].image}
            alt={data.name}
            fill
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            className="object-contain object-center rounded-lg"
            priority
          />
        </div>
        <div>
          <h3 className="text-sm font-medium text-gray-900 truncate">{data.name}</h3>
        </div>
        <div className="flex justify-between items-center">
          <p className="text-lg font-semibold text-gray-900">${data.price}</p>
          <p>{data.inStock ? "Disponible" : "No disponible"}</p>
        </div>
      </div>
    </Link>    
    )
}

