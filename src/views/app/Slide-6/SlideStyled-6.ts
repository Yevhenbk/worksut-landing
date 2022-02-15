import styled from "styled-components";
// * Interface definition for props configuration
interface SlideStyle6Props {
  bgColor: string;
  width: number;
  height: number;
}
// .TextIcon {
//   display: flex-inline;

// }

// * Styled landing title
export const SlideStyled6 = styled.div<SlideStyle6Props>`
  width: ${(props) => props.width}%;
  height: ${(props) => props.height}vh;
  display: flex;
  flex-direction: column;
  align-items: left;
  justify-content: center;
  padding: 12.188rem;
  background-color: ${(props) => props.bgColor};
`;
export const Icon = styled.img`
  width: 40px;
  height: 40px;
  left: 5px;
  margin-right: 16px;
`;
export const TextIcon = styled.div`
  display: inline-flex;
  margin-top:10px;
  
`;
