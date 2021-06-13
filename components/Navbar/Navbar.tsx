import { useState } from "react";
import Link from "next/link"
import { Menu }  from "@styled-icons/heroicons-outline";
import styled from "styled-components";
import NavbarMenu from "./NavbarMenu";

const Navbar = () => {
  const [ showMenu, setShowMenu ] = useState("none");

  return (
    <div className='py-8 xl:py-10 flex items-center justify-between px-4 2xl:px-0'>
      <Link href="/">
        <div className="text-2xl md:text-lg font-semibold hover:text-green-500 transition-all cursor-pointer">
          Floet
        </div>
      </Link>
      <MenuIcon onClick={() => setShowMenu("in")}/>
      <NavbarMenu show={showMenu} setShow={setShowMenu}/>
    </div>
  )
}

export default Navbar

const MenuIcon = styled(Menu)<any>`
  height: 25px;
  width: 25px;
  cursor: pointer;

  &:hover{
    color: #10B981;
    transition: all .3s;
  }
`