import styled, { keyframes } from "styled-components";

// * Inteface definition for spinner props
interface SpinnerStyledProps {
  color: string;
  colorOff: string;
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
  border: 6px solid ${(props) => props.color};
  width: 100px;
  height: 100px;
  border-radius: 50%;
  padding: 1em;
  position: relative;
  border-left-color: ${(props) => props.colorOff};
  animation: ${SpinAnimation} 1.75s linear infinite;

  @media (min-width: 500px) {
    border: 8px solid ${(props) => props.color};
    border-left-color: ${(props) => props.colorOff};
    width: 200px;
    height: 200px;
  }
  @media (min-width: 700px) {
    border: 12px solid ${(props) => props.color};
    border-left-color: ${(props) => props.colorOff};
    width: 300px;
    height: 300px;
  }
  @media (min-width: 900px) {
    border: 14px solid ${(props) => props.color};
    border-left-color: ${(props) => props.colorOff};
    width: 400px;
    height: 400px;
  }
`;