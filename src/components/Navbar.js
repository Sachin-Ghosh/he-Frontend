// // components/Navbar.tsx
// import React from "react";
// import Link from "next/link";
// import { FiMenu } from "react-icons/fi";
// // import { useAuth } from "@/context/AuthContext";
// // import { PiUser } from "react-icons/pi";

// const Navbar = () => {
//   //   const { token, logout } = useAuth();
  

//   return (
//     <div className="navbar bg-base-100 z-50 fixed top-0 left-0 w-full">
//       <FiMenu />
//       <div className="flex-1">
//         <Link href="/" className="btn btn-ghost text-xl">Godawn</Link>
//       </div>
//       <div className="flex-none gap-2">
//         <div className="form-control">
//           <input
//             type="text"
//             placeholder="Search"
//             className="input input-bordered w-24 md:w-auto"
//           />
//         </div>
//         <div className="dropdown dropdown-end">
//           <div
//             tabIndex={0}
//             role="button"
//             className="btn btn-ghost btn-circle avatar"
//           >
//             <div className="w-10 rounded-full">
//               <img
//                 alt="Tailwind CSS Navbar component"
//                 src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
//               />
//             </div>
//           </div>
//           <ul
//             tabIndex={0}
//             className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52"
//           >
//             <li>
//               <Link href="/login">
//                 Login
//               </Link>
//             </li>
//             <li>
//               <Link href="/signUp">
//                 Sign Up
//               </Link>
//             </li>
//             <li>
//             <Link href="/dashboard">
//                 Dashboard
//               </Link>
//             </li>
//             <li>
//               <Link href="/invoice">
//                 Invoice
//               </Link>
//             </li>
//             <li>
//               <Link href="/inventory">
//                 Inventory
//               </Link>
//             </li>
//             <li>
//               <a>Logout</a>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </div>
//   );
// };
// export default Navbar;



import React, { useState, useEffect, useRef } from "react";
import { useAuth } from "@/context/AuthContext";
import Link from "next/link";
import { FiMenu } from "react-icons/fi";
import { PiCallBell, PiUser } from "react-icons/pi";
import { MdDashboardCustomize,MdOutlineInventory } from "react-icons/md";
import { LiaFileInvoiceDollarSolid } from "react-icons/lia";
import { FaShoppingBasket } from "react-icons/fa";
import { BiSolidReport } from "react-icons/bi";
import { IoQrCodeOutline } from "react-icons/io5";

import Image from "next/image";



const Navbar = () => {
  const { token, logout,authUser } = useAuth();
  // const isAdmin = user && user.role === 'Admin'; // Check if the user is an admin
  const [sidebarOpen, setSidebarOpen] = useState(false);

  // Ref to the sidebar element
  const sidebarRef = useRef(null);

  // Close sidebar when a link is clicked
  const closeSidebar = () => {
    setSidebarOpen(false);
  };

  // Close sidebar when user clicks outside the sidebar
  const handleClickOutside = (event) => {
    if (sidebarRef.current && !sidebarRef.current.contains(event.target)) {
      setSidebarOpen(false);
    }
  };

  // Add event listener to handle clicks outside the sidebar
  useEffect(() => {
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  const [toggleDropdown, setToggleDropdown] = useState(false);
  return (

    <div className="flex z-100 navbar  bg-violet-950 bg-opacity-1  mt-4 mr-[120px]"
    style={{ borderBottom: "1.4px solid #a4a4a4" }}>
       {token && (
       <div>
      {/* Menu Icon */}
      <FiMenu className="cursor-pointer" size={30} onClick={toggleSidebar} />

      {/* Sidebar */}
      {sidebarOpen && (
        <div
          ref={sidebarRef}
          className="fixed top-0 left-0 h-full w-44 bg-black bg-opacity-70 backdrop-blur-sm  p-4 flex flex-col"
        >
          <ul className=" space-y-8 mt-7">
            <li>
              
              <Link href="/dashboard" className="text-xl  gap-2 flex flex-row text-white" onClick={closeSidebar}>
              <MdDashboardCustomize  size={24}/>

                  Dashboard
               
              </Link>
            </li>
            <li>
              <Link href="/inventory" className="text-xl  gap-2 flex flex-row text-white" onClick={closeSidebar}>
              <MdOutlineInventory size={24} />

                  Inventory
              
              </Link>
            </li>
            <li>
              <Link href="/sales" className="text-xl gap-2 flex flex-row text-white" onClick={closeSidebar}>
              <FaShoppingBasket  size={24}/>

                  Sales
              
              </Link>
            </li>
            <li>
              
              <Link href="/invoice" className="text-xl gap-2 flex flex-row text-white" onClick={closeSidebar}>
              <LiaFileInvoiceDollarSolid size={24} />

                  Invoice
               
              </Link>
            </li>
            {authUser?.role === "Admin" && ( // Render the report link only for admin users
                  <li>
                    <Link href="/report" className="text-xl gap-2 flex flex-row text-white" onClick={closeSidebar}>
                    <BiSolidReport size={24} />

                      Report
                    </Link>
                  </li>
                )}
            <li>
              <Link href="/QRCodeGenerator" className="ttext-xl gap-2 flex flex-row text-white" onClick={closeSidebar}>
              <IoQrCodeOutline  size={24}/>

              QRCode
               
              </Link>
            </li>
          </ul>
        </div>
      )}
      </div>
      )}

      {/* Rest of Navbar */}
      <nav className="flex-between w-full pt-3">
      <Link  href={token ? "/dashboard" : "/ "}  className='flex flex-center'>
        <Image src='/HomeHelpers.png'
          alt='logo'
          width={100}
          height={100}
          className='object-contain'
        />
        <p className='logo_text'>HomeHelpers</p>
      </Link>
      {/* Desktop Navigation */}
      {!token && (
          <>
            <div className="sm:flex hidden">
              <Link href="/login" className="flex items-center btn btn-ghost normal-case text-xl text-primary">
              <PiUser size={24}  className="mr-2" />Login
              
              </Link>
              <Link href="/login" className="flex btn btn-ghost normal-case text-xl text-primary mt-0">
              <PiCallBell size={24}  className="mr-2" />Contact Us
              </Link>
            </div>
            </>
            
          )}
         {/* mobile Navigation */}
        {!token && (
          <>
            <div className="sm:hidden flex relative">
            <Image src='/images/menu.jpg' width={40} height={40}  onClick={() => setToggleDropdown(!toggleDropdown)}/>
            {toggleDropdown && (
              <div className='dropdown'>
                <Link
                  href='/login'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                 Login
                </Link>
                <Link
                  href='/create-prompt'
                  className='dropdown_link'
                  onClick={() => setToggleDropdown(false)}
                >
                  Contact Us{'>'}
                </Link>
              </div>
            )}
          </div>
            
            </>
            
          )}
      </nav>
      <div className="flex-none gap-2">
        {/* <div className="form-control">
          <input
            type="text"
            placeholder="Search"
            className="input input-bordered w-24 md:w-auto"
          />
        </div> */}
        {!token && (
    <li style={{ listStyleType: 'none' }}>
      <Link href="/signUp" style={{ display: 'none' }}>
        Sign Up
      </Link>
    </li>
  )}
          {/* Desktop Navigation*/}
        
        {token && (
        <div className="dropdown dropdown-end">
          <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
            {/* <div className="w-10 rounded-full"> */}
                <PiUser size={28} />
              {/* <img
                alt="Tailwind CSS Navbar component"
                src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg"
              /> */}
            {/* </div> */}
          </div>
          <ul className="mt-3 z-[1] p-2 shadow menu menu-sm dropdown-content bg-base-100 rounded-box w-52">
            {/* <li>
              <Link href="/login">Login</Link>
            </li> */}
            <li>
              <Link href="/profile">Profile</Link>
            </li>
            <li>
              <Link href="/signUp">Sign Up</Link>
            </li>
            <li>
            <button onClick={logout}>Logout</button>
            </li>
          </ul>
        </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
