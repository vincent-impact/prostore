import Image from "next/image"
import loader from "@/assets/loader.gif"

const LoadingPage = () => {
  return ( 
    <div className="flex justify-center items-center h-screen w-screen">
      <Image 
        src={loader} 
        alt="Loading..." 
        width={150} 
        height={150} 
        className="mx-auto mt-20"
        unoptimized
      />
    </div> 
  )
}
 
export default LoadingPage