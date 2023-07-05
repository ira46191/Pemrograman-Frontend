import styled from "styled-components";
import { Link } from "react-router-dom";


const StyledLink = styled(Link)`
  color: #fff;
  text-decoration: none;

  &:hover {
    color: #468faf; 
  }

  &:active {
    color: #468faf; 
  }
`;
export default StyledLink;