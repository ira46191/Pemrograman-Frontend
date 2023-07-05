import { styled } from "styled-components";

const StyledFooter = styled.div`
  background-color: #ff4e5b;
  padding: 1rem;
  color: white;

  footer {
    display: flex;
    flex-direction: column;
  }

  h2 {
    margin-bottom: 0.5rem;
    margin-left: 2rem;
    font-family: "open sans";
    font-size: 1.5rem;
  }

  p {
    font-size: small;
  }

  ul {
    display: flex;
    font-family: "open sans";
    flex-direction: column;
    list-style: none;
    margin-bottom: 1rem;
  }

  li {
    margin-bottom: 1rem;
    margin-left: 1.4rem;
    font-size: 1.01rem;
  }

  @media screen and (min-width: 760px) {
    footer {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      /* margin-top: 1rem; */
      /* margin-bottom: 1rem; */
    }

    ul {
      display: flex;
      flex-direction: row;
    }

    li {
      margin: 0 1rem;
    }
  }
`;

export default StyledFooter;
