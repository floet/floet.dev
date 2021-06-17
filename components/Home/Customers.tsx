import styled from "styled-components";

const Customers = () => {
  return (
    <Container className="max-w-3xl mx-auto">
      <h2 className={`text-4xl font-semibold leading-tight`}>Take a look at just a few of our thousands of happy customers.</h2>
      <div className="mt-6 font-light">We help thousands of companies from all over the globe create the best products they can — from enterprise corporations, venture-backed startups, to bootstrapped companies, we love creating products you'll enjoy.</div>

      <Grid>
        <a href="https://promo.shell.com.br/" target="_blank" rel="noopener">
          <img src="images/logo-promoshell.svg" alt="Shell" draggable={false} />
        </a>
        <a href="https://kods.klabin.com.br/?l=PT" target="_blank" rel="noopener">
          <img src="images/logo-klabin.svg" alt="Klabin" draggable={false} />
        </a>
        <a href="https://www.3rpetroleum.com.br/" target="_blank" rel="noopener">
          <img src="images/logo-3r.svg" alt="3r Petroleum" draggable={false} />
        </a>
        <a href="https://novamarca.novonor.com.br/?l=PT" target="_blank" rel="noopener">
          <img src="images/logo-novonor.png" alt="Novonor" draggable={false} />
        </a>
      </Grid>
    </Container>
  )
}

export default Customers;

const Container = styled.div<any>`
  margin-top: 12rem; 
  margin-bottom: 4rem; 

  @media(max-width: 440px){
    margin-top: 8rem;
  }
`;

const Grid = styled.div`
  margin-top: 5rem;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  column-gap: 4rem;
  row-gap: 6rem;
  align-items: center;
  justify-items: center;

  img {
    max-width: 150px;
    cursor: pointer;
    transition: ease-in-out 300ms;
    /* filter: grayscale(100%); */

    @media(min-width: 1280px){
      &:hover{
        transform: scale(1.1);
      }
    }
  }

  @media(max-width: 440px){
    grid-template-columns: repeat(2, 1fr);
    column-gap: 2rem;
  }
`;