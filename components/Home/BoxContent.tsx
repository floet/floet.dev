import styled from "styled-components";
import { ArrowRight } from "@styled-icons/bootstrap";
import Link from "next/link";

interface IBoxContent {
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
    <Container mt={marginTop} mb={marginBottom}>
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
          <div className="flex items-center justify-center md:bg-gray-200 md:py-14 md:px-10 mt-10 md:mt-20">
            <img src={image} alt="Aqui tem uma imagem" draggable={false} className="md:max-w-xl md:max-h-560px shadow-lg md:shadow-none"/>
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