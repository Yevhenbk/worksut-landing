import styled from "styled-components";

// * Define style for the icon
export const ImageIconStyled = styled.a`
  margin: 0.7%;
  text-decoration: none;
  :hover {
    text-decoration: none;
  }

  & + a {
    margin-left: 1em;
  }
  .Icon {
    width: 18px;
    @media (min-width: 500px) {
      width: 24px;
    }
  }
`;
