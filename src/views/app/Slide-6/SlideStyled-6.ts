import styled from "styled-components";
// * Interface definition for props configuration
interface SlideStyle6Props {
  bgColor: string;
  width: number;
  height: number;
}
// * Styled landing title
export const SlideStyled6 = styled.div<SlideStyle6Props>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  background-color: ${(props) => props.bgColor};
`;