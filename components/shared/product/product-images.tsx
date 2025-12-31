'use client'

import { useState } from "react"
import Image from "next/image"
import { cn } from "@/lib/utils"

const ProductImages = ({ images } : { images : string[] } ) => {

  const [selectedImage, setSelectedImage] = useState(0)


  return (
    <div className="space-y-4">
      <Image 
        src={images[selectedImage]} 
        alt={`Product Image ${selectedImage + 1}`} 
        width={1000} height={1000} 
        className="min-h-75 object-cover object-center" 
      />
      <div className="flex">
        { images.map((image, index) => (
          <div 
            key={index} 
            onClick={() => setSelectedImage(index)}
            className={cn("border mr-2 cursor-pointer hover:border-orange-600", selectedImage === index && "border-orange-500")}
          >
            <Image 
              src={image}
              alt="image"
              width={100} height={100}
            />
          </div>
        )) }
      </div>
    </div>
  )
}
 
export default ProductImages;