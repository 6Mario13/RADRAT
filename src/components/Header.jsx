import { Logo } from "./Logo"
import { Nav } from "./Nav"
export const Header = () => {
  return (
    <>
      <header className=" top-0 left-0 right-0 h-28 flex justify-between items-center px-14 lg:px-24 py-4 text-gray-300  bg-gray-700 ">
        <Logo />
        <Nav />
      </header>
    </>
  )
}