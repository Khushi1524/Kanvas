import { useNavigate } from "react-router-dom"
import { dummyArts } from "../assets/assets"
import ProductCard from "./ProductCard"
import SectionTitle from "./SectionTitle"

const ProductList = () => {
    const navigate = useNavigate();

  return (
    <div className="py-20 max-w-300 m-auto">
    <SectionTitle title="Trending Art" subtitle="Discover the latest and greatest artwork from our community of talented creators." />
    <div  className="grid grid-cols-4 place-content-start place-items-start gap-6 mt-12">
       {dummyArts.slice(0,4).map((art, index)=>{
        return <ProductCard art={art} key={index} /> 
       }) }
    </div>
    <div className="text-center">
       <button className="my-16 px-4 py-2 text-sm font-medium border border-gray-300 roundded bg-white hover:bg-gray-50 transition-all cursor-pointer" onClick={()=> {navigate("/artworks"); scrollTo(0, 0)} }>View All Artwork</button>
       </div>
    </div>
  )
}

export default ProductList