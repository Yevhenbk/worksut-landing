import styled from "styled-components";

// * Interface definition for props configuration
interface SlideStyled1Props {
  bgColor: string;
  width: number;
  height: number;
}

//*
export const SlideStyled1 = styled.div<SlideStyled1Props>`
  background-color: ${(props) => props.bgColor};
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;
