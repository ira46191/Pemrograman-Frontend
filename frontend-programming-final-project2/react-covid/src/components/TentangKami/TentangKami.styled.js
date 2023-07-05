import { styled } from "styled-components";

const StyledTentangKami = styled.div`
  margin: 1rem;
  flex-direction: column;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  margin-bottom: 2rem;
  padding: 0.5rem 1rem;
  border-radius: 8px;

  section {
    display: flex;
    flex-direction: column;
    text-align: center;
  }

  img {
    max-width: 100%;
    height: auto;
    /* border-radius: 25px; */
    margin: 1rem;
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

  aside {
    align-items: center;
    text-align: center;
  }

  h5 {
    margin-bottom: 1rem;
    font-family: "open sans";
    color: white;
  }

  h1 {
    color: white;
    margin-top: 0.2rem;
    font-size: 3.5rem;
    font-family: "open sans";
    margin: 1rem;
  }

  h3 {
    margin-bottom: 1rem;
    font-family: "open sans";
    color: white;
  }

  summary {
    width: auto;
    height: auto;
    border: 1px solid #ccc;
    border-radius: 8px;
    margin-bottom: 16px;
    box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
    font-size: large;
    padding: 2rem;
    background-color: #ff4e5b;
    /* padding: 16px; */
    margin-right: 1px;
  }

  @media screen and (min-width: 760px) {
    summary {
      width: 700px;
      height: 150px;
      border: 1px solid #ccc;
      border-radius: 8px;
      margin-bottom: 16px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      background-color: #ff4e5b;
      padding: 16px;
      margin-right: 1px;
    }
  }

  @media screen and (min-width: 992px) {
    flex-direction: row;
    padding: 20px;
    margin-bottom: 0;

    /* margin-left: 1rem; */
    /* max-width: 1200px;
      margin: 3rem auto; */

    section {
      margin: 0 1rem;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
      text-align: left;
      margin: 5rem 0;
      text-align: center;
    }

    article {
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      align-items: center;
    }

    summary {
      width: 12rem;
      height: 12rem;
      border: 1px solid #ccc;
      border-radius: 8px;
      box-shadow: 2px 2px 4px rgba(0, 0, 0, 0.3);
      /* padding: 16px; */
      padding: 2rem;
      margin-right: 1px;
      background-color: #fff;
      margin-bottom: 1rem;
      background-color: #ff4e5b;
    }

    nav {
      flex-basis: 40%;
    }

    main {
      flex-basis: 60%;
    }
  }
`;

export default StyledTentangKami;
