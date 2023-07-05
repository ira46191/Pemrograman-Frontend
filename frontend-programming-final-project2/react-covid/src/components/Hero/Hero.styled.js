import { styled } from "styled-components";

const StyledHero = styled.div`
  margin: 1rem;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  nav { 
    margin-bottom: 1rem;
  }

  h2 {
    color: #ff4e5b;
    /* margin-bottom: 1rem; */
    font-size: 3.5rem;
    font-family: "open sans";
  }

  h4 {
    color: #5498fd;
    margin-top: 0.2rem;
    font-size: 1.25rem;
    font-family: "open sans";
    margin-bottom: 1rem;

  }

  p {
    color: #4b4c5c;
    font-family: "open sans";
    margin-bottom: 1rem;
    text-align: justify;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  @media screen and (min-width:760px){
    
  }

  @media screen and (min-width: 992px) {
      max-width: 1200px;
      margin: 3rem auto;
  
    section {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }
  
    nav {
      flex-basis: 40%;
    }
  
    aside {
      flex-basis: 60%;
    }
  }
`;

export default StyledHero;