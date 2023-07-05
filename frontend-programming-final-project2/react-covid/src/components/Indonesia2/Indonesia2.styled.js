import { styled } from "styled-components";

const StyledIndonesia2 = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 8p;

  nav {
    width: auto;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    font-size: large;
    padding: 2rem;
  }

  h3 {
    font-size: 180%;
  }

  p {
    font-size: 200%;
  }
  @media screen and (min-width: 760px) {
    nav {
      width: 700px;
      height: 150px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 16px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    }
  }

  @media screen and (min-width: 992px) {

    nav {
      width: 300px;
      height: 200px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      padding: 16px;
      margin-right: 16px;
      background-color: #fff;
      margin-bottom: 1rem;
    }
  }
`;

export default StyledIndonesia2;
