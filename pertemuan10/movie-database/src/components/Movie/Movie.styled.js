import styled from "styled-components"; 

// Membuat Styled Component Movie
const StyledMovie = styled.div`
  margin-bottom: 1rem;
  align-items: center;

  img {
    border-radius: 25px;
    max-width: 100%;
    height: auto;
    margin-bottom: 1rem;
    width: 300px;
    height: 400px;
  }

  h3 {
    color: #52796f;
    font-size: 1.95rem;
    margin-bottom: 0.5rem;
  }

  p {
    color: #64748b;
  }

  @media (min-width: 768px) {
    flex-basis: 50%;
  }

  @media (min-width: 992px) {
    flex-basis: 25%;
    padding: 1rem;
  }
`;

export default StyledMovie;