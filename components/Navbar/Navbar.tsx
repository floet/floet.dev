import { useState } from "react";
import Link from "next/link"
import { Menu }  from "@styled-icons/heroicons-outline";
import styled from "styled-components";
import NavbarMenu from "./NavbarMenu";
import { Link as LinkScroll } from "react-scroll"

const Navbar = () => {
  const [ showMenu, setShowMenu ] = useState("none");

  return (
    <Container className='max-w-7xl mx-auto py-8 xl:py-10 flex items-center justify-between px-8 2xl:px-0' name="navbar">
      <Link href="/">
        <div className="text-2xl font-semibold hover:text-green-500 transition-all cursor-pointer">
          Floet
        </div>
      </Link>

      <div className="hidden md:flex items-center space-x-8 text-gray-400">
        <LinkScroll to="comp-1" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-green-500 transition-all">Link 1</LinkScroll>
        <LinkScroll to="comp-2" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-green-500 transition-all">Link 2</LinkScroll>
        <LinkScroll to="comp-3" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-green-500 transition-all">Link 3</LinkScroll>
        <LinkScroll to="comp-4" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-green-500 transition-all">Link 4</LinkScroll>
        <LinkScroll to="clientes" spy={true} smooth={true} duration={500} className="cursor-pointer hover:text-green-500 transition-all">Clientes</LinkScroll>
      </div>

      <div className="hidden md:block"></div> {/* apenas para separar o flex, layouts acima de 768px */}

      <MenuIcon onClick={() => setShowMenu("in")}/>
      <NavbarMenu show={showMenu} setShow={setShowMenu}/>
    </Container>
  )
}

export default Navbar

const Container = styled.div<any>``

const MenuIcon = styled(Menu)<any>`
  height: 25px;
  width: 25px;
  cursor: pointer;

  &:hover{
    color: #10B981;
    transition: all .3s;
  }

  @media(min-width: 768px){
    display: none;
  }
`