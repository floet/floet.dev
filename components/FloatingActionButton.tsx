import { useLayoutEffect, useState } from "react";
import styled from "styled-components"
import { ChevronDoubleUp } from "@styled-icons/bootstrap";

interface IFloatinActionButton {
  handleButton: unknown;
}

const FloatinActionButton = ({
  handleButton
}:IFloatinActionButton) => {
  const [show, setShow] = useState(false);
  useLayoutEffect(() => {
    window.onscroll = () => {
      if (window.pageYOffset >= 200 ) {
        setShow(true);
      } else {
        setShow(false);
      }
    };
  },[]);

  return (
    <Container onClick={handleButton} show={show}>
      <ChevronDoubleUp height="20px" width="20px" color="#ffffff"/>
    </Container>
  )
}

export default FloatinActionButton;

const Container = styled.div<any>`
  opacity: ${({show}) => show ? "1" : "0"};

  position: fixed;
  bottom: 30px;
  right: 2rem;

  cursor: pointer;
  width: 50px;
  height: 50px;
  border-radius: 100%;
  box-shadow: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  background-color: #121212;
  transition: ease-in-out 300ms;

  display: flex;
  align-items: center;
  justify-content: center;

  @media(min-width: 1280px){
    &:hover{
      opacity: .8;
    }
  }

  @media(max-width: 440px){
    right: 1rem; 
  }
`;