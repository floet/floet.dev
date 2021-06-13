import { useRef, useEffect } from "react";
import styled from 'styled-components';

interface IMenu {
  show: string;
  setShow: any;
}

const NavbarMenu = ({
  show,
  setShow = null
} : IMenu) => {
  const menuRef = useRef(null);

  function handleOutside(e) {
    if (show.includes("in") && menuRef?.current && !menuRef?.current?.contains(e.target)) {
      setShow("out");
    }
  }

  useEffect(() => {
    document.addEventListener("keyup", handleOutside);
    document.addEventListener("mouseover", handleOutside);
    return () => {
      document.removeEventListener("keyup", handleOutside);
      document.removeEventListener("mouseover", handleOutside);
    };
  },[show])

  return (
    <>
      <Menu ref={menuRef} animation={show === "in" ? `menuIn` : show === "out" ? "menuOut" : "none"}>
        <div className="max-w-7xl mx-auto">
          <div className="px-8 py-8">Menu</div>
        </div>
      </Menu>
      <Shadow animation={show === "in" ? "shadowIn" : show === "out" ? "shadowOut" : "none"} />
    </>
  )
}

export default NavbarMenu;

const Menu = styled.div<any>`
  background-color: #fff;
  box-shadow: 0 2px 8px -1px rgba(0,0,0,0.3);
  height: 360px;
  width: 100vw;
  
  z-index: 2;
  position: absolute;
  top: -360px;
  left: 0;

  animation: ${(props) => props.animation} ease-in-out 300ms;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes menuIn {
    from {
      top: 0;
      opacity: 0;
    }

    to {
      top: 0;
      opacity: 1;
    }
  }

  @keyframes menuOut {
    from {
      top: 0;
      opacity: 1;
    }

    to {
      opacity: 0;
      top: -360px;
    }
  }
`;

//shadow
const Shadow = styled.div<any>`
  background-color: rgba(0,0,0,0.3);
  height: 100vh;
  width: 100vw;
  
  position: fixed;
  z-index: 1;
  top: -100vh;
  left: 0;

  animation: ${(props) => props.animation} ease-in-out 300ms;
  animation-fill-mode: forwards;
  opacity: 0;

  @keyframes shadowIn {
    from {
      opacity: 0;
      top: 0;
    }

    to {
      opacity: 1;
      top: 0;
    }
  }

  @keyframes shadowOut {
    from {
      opacity: 0;
      top: 0;
    }

    to {
      opacity: 0;
      top: -100vh;
    }
  }
`;