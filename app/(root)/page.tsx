import { getLatestProducts } from "@/lib/actions/product.action"
import ProductList from "@/components/shared/product/product-list"

const Homepage = async () => {

  const products = await getLatestProducts()

  return ( 
    <>
      <ProductList 
        data={products} 
        title="New arrivals" 
      />
    </>
   )
}
 
export default Homepage