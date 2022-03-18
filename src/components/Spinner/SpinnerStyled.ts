import styled, { keyframes } from "styled-components";

// * Inteface definition for spinner props
interface SpinnerStyledProps {
  colorTop: string;
  colorRight: string;
  colorBottom: string;
  colorLeft: string;
}

// * Style for spinner container
export const SpinnerContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  margin: 0 auto;
`;

// * Define keyframes
const SpinAnimation = keyframes`
  0% {transform: rotate(0deg);}
  100% {transform: rotate(360deg);}    
`;

// * Styled for the spinner
export const SpinnerStyled = styled.div<SpinnerStyledProps>`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 1em;
  position: relative;
  border-right: 6px solid ${(props) => props.colorRight};
  border-left: ${(props) => props.colorLeft};
  border-top: 6px solid ${(props) => props.colorTop};
  border-bottom: ${(props) => props.colorBottom};
  animation: ${SpinAnimation} 1.75s linear infinite;

  @media (min-width: 500px) {
    border-right: 8px solid ${(props) => props.colorRight};
    border-left: ${(props) => props.colorLeft};
    border-top: 8px solid ${(props) => props.colorTop};
    border-bottom: ${(props) => props.colorBottom};
    width: 200px;
    height: 200px;
  }
  @media (min-width: 700px) {
    border-right: 12px solid ${(props) => props.colorRight};
    border-left-color: ${(props) => props.colorLeft};
    border-top: 12px solid ${(props) => props.colorTop};
    border-bottom: ${(props) => props.colorBottom};
    width: 300px;
    height: 300px;
  }
  @media (min-width: 900px) {
    border-right: 14px solid ${(props) => props.colorRight};
    border-left-color: ${(props) => props.colorLeft};
    border-top: 14px solid ${(props) => props.colorTop};
    border-bottom: ${(props) => props.colorBottom};
    width: 350px;
    height: 350px;
  }
`;