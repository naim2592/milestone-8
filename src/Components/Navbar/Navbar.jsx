import { useState } from "react";
import Link from "../link/Link";
import { FaBarsStaggered} from "react-icons/fa6";
import { IoCloseOutline } from "react-icons/io5";


const Navbar = () => {
    const routes = [
        { id: 1, name: "Home", path: "/" },
        { id: 2, name: "About", path: "/about" },
        { id: 3, name: "Services", path: "/services" },
        { id: 4, name: "Contact", path: "/contact" },
        { id: 5, name: "Profile", path: "/profile" }
      ];
      
      const [open,setOpen]=useState(true)
    return (
        <div className="relative">
            <div onClick={()=>setOpen(!open)}>
                {
                  open===false?<IoCloseOutline className="text-2xl"/>:<FaBarsStaggered className="text-xl md:hidden" />
                }
            
            </div>
            <nav>
            <ul className={` md:flex mr-4 absolute md:static bg-purple-500 text-white duration-1000 left-4 p-4 rounded-xl ${open===false?'top-5':'-top-60'}`} >
               {
              
                 routes.map(rout=><Link key={rout.id} rout={rout}></Link>)
               
               }
               </ul>
            </nav>
        </div>
    );
};

export default Navbar;