import styled from "styled-components";

// * Interface definition for props configuration
interface SlideStyled5Props {
  bgColor: string;
  width: number;
  height: number;
}

// * Styled landing title
export const SlideStyled5 = styled.div<SlideStyled5Props>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}vh;
  background-color: ${(props) => props.bgColor};
  display: flex;
  flex-direction: column;
  position: relative;
`;

export const DivStyled5 = styled.div`
  top: 15em;
  left: 2em;
  position: absolute;

  @media (min-width: 500px) {
    top: 20em;
    left: 3em;
  }
  @media (min-width: 700px) {
    top: 30em;
    left: 8em;
  }
  @media (min-width: 900px) {
    top: 20em;
    left: 12em;
  }
`;
