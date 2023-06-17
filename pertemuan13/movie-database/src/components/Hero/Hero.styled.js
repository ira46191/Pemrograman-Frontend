import styled from "styled-components";

// Membuat Styled Component Hero
const StyledHero = styled.div`
  margin: 5rem auto;
  padding: 1rem;
  /* margin-bottom: 1rem; */

  section {
    display: flex;
    align-items: center;
    flex-direction: column;
    text-align: center;
  }

  main {
    margin-bottom: 1rem;
  }

  h2 {
    color: #2f3e46;
    margin-bottom: 1rem;
    font-size: 2.44rem;
  }

  h3 {
    color: #52b788;
    margin-bottom: 1rem;
    font-size: 1.59rem;
  }

  p {
    color: #64748b;
    margin-bottom: 1rem;
  }

  img {
    max-width: 100%;
    height: auto;
    border-radius: 25px;
  }

  /* Medium Screen */
  @media (min-width: 768px) {
    /*
   * Nothing TODO Here.
   * We dont change style Hero. 
   */
  }

  /* Large Screen */
  @media (min-width: 992px) {
    div {
      max-width: 1200px;
    }

    section {
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
    }

    main {
      flex-basis: 40%;
    }

    aside {
      flex-basis: 60%;
      display: flex;
      justify-content: flex-end;
    }

    img {
      align-self: flex-end;
    }

    Button {
      background-color: #468faf;
    }
  }
`;

export default StyledHero;
