import { ProductDetails } from "../../components/ProductDetails";
import { products } from "@/utils/Products";
import { poppins } from "../../layout"

type idParam = {
    productId: string
}
export const Product = async({params}: {params : idParam}) => {
    const { productId } = await params;
    const product = products.find((product) => product.id === productId)
    return (
        <div className={`${poppins.className} container mx-auto`}>
            <ProductDetails key={product.id} data={product}/>
        </div>
    )
  
}

export default Product;