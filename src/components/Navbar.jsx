import React, { useState } from "react";
import { MenuIcon, XIcon } from "@heroicons/react/outline";

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleClick = () => setNav(!nav);
  const handleClose = () => setNav(!nav);

  return (
    <div className='w-screen h-[80px] z-10 bg-zinc-200 fixed drop-shadow-lg'>
      Navbar
      
    </div>
  );
};

export default Navbar;
