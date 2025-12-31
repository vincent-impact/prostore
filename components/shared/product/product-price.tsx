import { cn } from "@/lib/utils"

const ProductPrice = ({ value, className } : { value: number, className?: string }) => {

  // Ensure 2 decimal places
  const formattedPrice = value.toFixed(2)

  //Get the int and float
  const [intPart, decimalPart] = formattedPrice.split('.')

  return ( 
    <p className={ cn('text-2xl', className) }>
      <span className="text-xs align-super">$</span>
      {intPart}
      <span className="text-xs align-super">.{decimalPart}</span>
    </p>
  )
}
 
export default ProductPrice