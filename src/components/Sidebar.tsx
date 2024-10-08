import { Link } from "react-router-dom";
import { AiOutlineHome } from "react-icons/ai";
import { BsGraphUpArrow } from "react-icons/bs";



const Sidebar = () => {
  return (
    <nav className="w-full md:max-w-[300px] bg-[#2b1146] md:h-screen font-bold text-2xl md:p-[20px] py-[10px] px-[15px] text-[#eceff1]">
      <div className="gap-y-5 flex md:block items-center justify-between">
        <div>
          <Link
            to="/"
            className="flex items-center text-[#f4544c] md:text-3xl md:mb-[20px]"
          >

            <h1 className="mb-[5px]">Contact Management</h1>
          </Link>
        </div>

        <ul className="md:block flex items-center">
          <li>
            <Link to="/" className="py-[20px] flex items-center hover:text-[#f4544c]">
              <AiOutlineHome className="mx-2" />
              <h1 className="hidden md:flex">Home</h1>
            </Link>
          </li>

          <li>
            <Link to="/dashboard" className="flex items-center hover:text-[#f4544c]">
              <BsGraphUpArrow className="mx-2" />
              <h1 className="hidden md:flex">Charts and Maps</h1>
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Sidebar;
