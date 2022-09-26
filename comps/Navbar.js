import Link from "next/link";
import Image from "next/image"

const Navbar = () => {
  return (
    <nav className="relative container mx-auto p-6">
      {/* <div className="logo">
        <Image src="/docker.svg" alt="" width={30} height={30} />
      </div>
       */}
      <div className="flex items-center justify-content">
        <div className="pt-2">
          <Image src="/assets/img/logo.svg" alt="" width="300" height="60" />
        </div>
        <div className="hidden space-x-6 md:flex">
          <Link href="/"><a className="hover:text-darkGrayishBlue">Home</a></Link>
          <Link href="/about"><a className="hover:text-darkGrayishBlue">About</a></Link>
          <Link href="/ninjas"><a className="hover:text-darkGrayishBlue">Ninja Listing</a></Link>
        </div>

        <a href="#" className="hidden p-3 px-6 pt-2 text-white bg-red-500 rounded-full baseline hover:bg-brightRedLight md:block">Get Started</a>

        <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
          <span className="hamburger-top"></span>
          <span className="hamburger-middle"></span>
          <span className="hamburger-bottom"></span>
        </button>
      </div>

      {/* Mobile Menu */}
      <div className="md:hidden">
        <div id="menu" className="absolute flex-col items-center hidden self-end py-8 mt-10 space-y-6 font-bold bg-white sm:w-auto sm:self-center left-6 right-6 drop-shadow-md">
        <Link href="/"><a className="hover:text-darkGrayishBlue">Home</a></Link>
          <Link href="/about"><a className="hover:text-darkGrayishBlue">About</a></Link>
          <Link href="/ninjas"><a className="hover:text-darkGrayishBlue">Ninja Listing</a></Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;