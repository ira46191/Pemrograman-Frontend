import { styled } from "styled-components";

const StyledIndonesiaa = styled.div`
  margin: 1rem;

  section {
    margin: 5rem 0;
    text-align: center;
  }

  h1 {
    margin-bottom: 1rem;
    font-size: 3.5rem;
    font-family: "open sans";
    color: #ff4e5b;
  }

  p {
    color: #5498fd;
    font-family: "open sans";
  }

  aside {
    display: flex;
    flex-direction: column;
    font-family: "open sans";
    font-size: large;
    /* background-color: #84a98c; */
  }

  @media screen and (min-width: 760px) {
    aside {
      flex-direction: row;
      flex-wrap: wrap;
      justify-content: center;
      align-items: center;
      color: #4d4e55;
    }
  }

  @media screen and (min-width: 992px) {
    max-width: 1200px;
    margin: 3rem auto;
  }
`;

export default StyledIndonesiaa;
