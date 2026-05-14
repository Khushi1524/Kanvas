import { assets } from "../assets/assets"
import Card from "./Card"

const CardList = () => {
  return (
    <div className="grid grid-cols-3 place-content-center gap-6 py-20 max-w-300 m-auto">
      <Card heading={"Discover Unique"} icon={assets.search} description={"Explore a curated gallery of exclusive pieces from world-class creators.Explore a curated gallery of exclusive pieces from world-class creators.Explore a curated gallery of exclusive pieces from world-class creators."}/>

      <Card heading={"Commission Pieces"} icon={assets.paint} description={"Work directly with artists to bring your specific vision to life.Explore a curated gallery of exclusive pieces from world-class creators.Explore a curated gallery of exclusive pieces from world-class creators."}/>

      <Card heading={"Track Every Order"} icon={assets.track} description={"Full transparency from the first sketch to the final delivery at your door.Explore a curated gallery of exclusive pieces from world-class creators.Explore a curated gallery of exclusive pieces from world-class creators."}/>
    </div>
  )
}

export default CardList