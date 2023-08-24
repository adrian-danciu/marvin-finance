import logoFull from "../../assets/full_logo.png";

const NavBar = () => {
  return (
    <section className="fixed top-0 left-0 w-full flex flex-row justify-evenly items-center h-[50px] px-20 py-10 shadow-md bg-white bg-opacity-60 backdrop-blur-md">
      <img src={logoFull} alt="Marv." className="h-[120px] w-[120px] mt-5" />
      <ul className="flex flex-row justify-center items-center gap-10 w-full ml-[8.3%] text-lg">
        <a className="nav-links">
          <li>Home</li>
        </a>
        <a className="nav-links">
          <li>About</li>
        </a>
        <a className="nav-links">
          <li>Contact</li>
        </a>
      </ul>
      <div className="flex flex-row justify-center items-center gap-10">
        <button className="border-btn w-[115px] h-[55px]">Sign up</button>
        <button className="full-btn w-[115px] h-[55px]">Login</button>
      </div>
    </section>
  );
};

export default NavBar;
