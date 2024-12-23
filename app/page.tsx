import { Banner } from "./components/Banner"
import { products } from "./components/Products"
import { ProductCard } from "./components/ProductCard"
import { poppins } from "./layout"

export default function Home() {
  return (
    <div className="container mx-auto ">
    <div>
    <Banner />
    </div>   
    <h3 className="text-2xl">Ultimos Productos</h3>
    <div  className={`${poppins.className} grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 
          2xl:grid-cols-5 gap-10 p-4`}>
      {products.map((product) => {
        return (
            <ProductCard key={product.id} id={product.id} name={product.name} price={product.price} image={product.images[0].image} stock={product.inStock} />
        )
      } 
      )}
    </div>
    </div>
    
   
  )
}
