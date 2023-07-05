import { styled } from "styled-components";

const StyledRegion2 = styled.div`
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  /* align-items: center; */
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  aside {
    width: auto;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    font-size: large;
  }

  h3 {
    /* margin-bottom: 1rem; */
    display: block;
    text-align: center; 
  }

  p {
    /* margin-bottom: 0.5rem; */
    text-align: left;
    display: block;
    padding: 1rem;
  }

  @media screen and (min-width: 760px) {
    aside {
      width: 700px;
      height: 200px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 16px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      display: block;
    }
    h3 {
      display: block;
    }
  }

  @media screen and (min-width: 992px) {
    aside {
      width: 300px;
      height: 200px;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      padding: 16px;
      margin-right: 16px;
      background-color: #fff;
      display: block;
    }

    h3 {
    /* margin-bottom: 1rem; */
    display: block;
    text-align: center; 
  }

  p {
    /* margin-bottom: 0.5rem; */
    text-align: left;
    display: block;
    padding: 1rem;
  }
  }
`;

export default StyledRegion2;
