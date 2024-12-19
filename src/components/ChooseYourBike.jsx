import { Guide } from "./Guide";
export const ChooseYourBike = () => {
  return (
    <div className="w-4/5 m-auto py-20">
      <div className="flex flex-col lg:flex-row border shadow-xl rounded-xl border-gray-200">
        <div className="flex flex-col p-6 justify-around">
          <h2 className="text-6xl pb-8">Let’s find your perfect bike!</h2>
          <div>
          <h3 className="text-3xl">How it works?</h3>
          <p className="pt-6 xl:pb-20">Morbi tristique, massa in faucibus gravida, metus lectus dapibus felis, egestas sodales nisl ex vel turpis. Interdum et malesuada fames ac ante ipsum primis in faucibus. Fusce sed faucibus dui, a pretium erat.</p>
          </div>
        </div>
        <img className="hidden lg:block rounded-xl" src="../src/assets/findYourBike.png" alt="Bike Parking" />
      </div>
      <Guide />
    </div>
  )
}