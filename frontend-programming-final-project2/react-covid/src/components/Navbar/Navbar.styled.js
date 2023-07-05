import styled from "styled-components";

const StyledNavbar = styled.div`
  background-color: #ff4e5b;
  padding: 1rem;
  color: white;

  h1 {
    margin-bottom: 1rem;
  }

  ul {
    list-style: none;
  }

  li {
    margin-bottom: 1rem;
  }

  /* medium screen */
  @media (min-width: 768px) {
    nav {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }
    h1 {
      margin: 0;
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

export default StyledNavbar;
