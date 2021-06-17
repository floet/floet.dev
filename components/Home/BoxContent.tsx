import styled from "styled-components";
import { ArrowRight } from "@styled-icons/bootstrap";
import Link from "next/link";

interface IBoxContent {
  compName?:string;
  isFirstBox?: boolean;
  marginTop?: string;
  marginBottom?: string;
  title: string;
  description: string;
  labelLink?: string;
  linkTo?: string;
  image?: string;
}

const BoxContent = ({
  compName = "",
  isFirstBox,
  marginTop,
  marginBottom,
  title,
  description,
  labelLink,
  linkTo,
  image
} : IBoxContent) => {
  return (
    <Container mt={marginTop} mb={marginBottom} name={compName}>
      <div className="max-w-3xl mx-auto">
        <h2 className={`${isFirstBox ? "text-5xl": "text-4xl"} font-semibold leading-tight`}>{title}</h2>
        <div className="mt-6 font-light">{description}</div>
        {
          labelLink ? (
            <div className="mt-4 text-base font-light text-indigo-700 flex items-center cursor-pointer max-w-max hover:opacity-80 transition-all">
              <Link href={linkTo}>{labelLink}</Link>
              <ArrowRightIcon />
            </div>
          ) : null
        }
      </div>
      {
        image ? (
          <div className="flex items-center justify-center md:bg-gray-100 md:py-14 mt-10 md:mt-20">
            <img src={image} alt="Aqui tem uma imagem" draggable={false} className="max-w-xl w-full lg:max-w-2xl md:max-h-560px rounded-md shadow-lg"/>
          </div>
        ) : null
      }
    </Container>
  )
}

export default BoxContent;

const Container = styled.div<any>`
  margin-top: ${({mt}) => mt || 0}; 
  margin-bottom: ${({mb}) => mb || 0}; 

  @media(max-width: 440px){
    margin-top: 8rem;
  }
`;

const ArrowRightIcon = styled(ArrowRight)<any>`
  color: #4338CA;
  width: 15px;
  height: 15px;
  margin-left: .675rem;
  margin-top: .1rem;
`;