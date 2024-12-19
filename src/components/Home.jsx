

export const Home = () => {
  return (
    <div className="top-50">
      <div className=" flex flex-col">
        <img className="sm:relevant w-full " src="./src/assets/hero3.png" alt="Hero" />
        <div className="sm:absolute flex flex-col gap-3 pl-24 pt-16 text-3xl font-bold sm:text-gray-100 md:text-6xl italic">
          <span>Welcome to</span>
          <span>the Bicycle</span>
          <span>Types Guide</span>
        </div>
      </div >
      
      <div className="w-4/5 m-auto py-20">
        <div className="lg:flex rounded-2xl shadow mb-20">
          <div className="p-6 ">
            <h2 className="text-2xl pb-6">Discover the World of Bicycles</h2>
            <hr />
            <p className="pt-2">Welcome to Bike Guide, your ultimate resource for everything about bicycles! Whether you are a seasoned cyclist or a beginner just starting out, our guide is here to help you navigate the exciting world of bikes. Dive into our comprehensive resources and find the bike that best suits your needs, lifestyle, and riding preferences.</p>
          </div>
          
            <img className="w-full lg:w-1/2 rounded-2xl" src="../src/assets/bikeSign.png" alt="bike sign image" />
          
        </div>

        <div className="lg:flex flex-row-reverse rounded-2xl shadow">
          <div className="p-6">
            <h2 className="text-2xl pb-6">Why Choose Cycling?</h2>
            <hr />
            <p className="pt-2">
              Cycling is a great way to stay fit and healthy. It improves cardiovascular health, strengthens muscles, and boosts mental well-being.
              Bicycles are an eco-friendly alternative to cars. They produce zero emissions and help reduce traffic congestion.
              Save money on gas, parking, and car maintenance. Bicycles are a cost-effective way to travel.
              Join a community of cyclists and participate in group rides, events, and challenges. Cycling is a fun and social activity for all ages.
            </p>

          </div>
          <img className="w-full lg:w-1/2 rounded-2xl " src="../src/assets/bikemetal.png" alt="bike parking rack image" />
        </div>
      </div>
    </div>
  )
}