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
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const DivStyled5 = styled.div`
  left: 195px;
  top: 384px;
  position: absolute;
  margin-left: 15rem;
`;
