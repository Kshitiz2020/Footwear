import { headerLogo } from "../assets/images";
import { hamburger } from "../assets/icons";
function Navbar() {
  return (
    <header className="absolute z-10 w-full py-8 padding-x">
      <nav className="flex items-center justify-between max-container">
        <a href="/">
          <img src={headerLogo} alt="logo" width={130} height={29} />
        </a>
        <ul className="flex items-center justify-center flex-1 gap-16 max-lg:hidden"></ul>
      </nav>
    </header>
  );
}
export default Navbar;
