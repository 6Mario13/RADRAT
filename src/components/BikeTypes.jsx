import { BikeCard } from "./BikeCard"
import bikeTypesData from "../data/bikeTypesData"
export const BikeTypes = () => {
  return (
    <div className="">
      <div className="lg:flex items-center w-4/5 m-auto py-6 gap-6">
        <div className=" py-4">
          <h1 className="text-2xl py-4">Explore Different Types of Bicycles</h1>
          <p>When it comes to bicycles, one size does not fit all. There are various types of bikes designed for different terrains, riding styles, and purposes. Understanding the distinct features and benefits of each type can help you choose the perfect bike for your needs. In this section, we will take a closer look at the most common types of bicycles:</p>
        </div >
        <img className="rounded-lg w-full lg:w-1/2" src="../src/assets/homePhoto.png" alt="" />
      </div>
      <div className="py-10 w-5/6 gap-20 m-auto grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3">
        {bikeTypesData.map((bike) => (
          <BikeCard
            key={bike.id}
            type={bike.type}
            description={bike.description}
            image={bike.image}
          />
        ))}
      </div>
      
    </div>
  )
}