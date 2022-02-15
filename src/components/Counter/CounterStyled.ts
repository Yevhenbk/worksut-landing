import styled from "styled-components";

// * Interface definition for counter props
interface CounterStyledProps {
  color: string;
}

// * Styler counter
export const CounterStyled = styled.h1<CounterStyledProps>`
  color: ${(props) => props.color};
  font-size: 3em;
  justify-content: center;
  align-items: center;

  @media (min-width: 500px) {
    font-size: 6em;
  }
  @media (min-width: 700px) {
    font-size: 8em;
  }
  @media (min-width: 900px) {
    font-size: 10em;
  }
`;

export const CounterCointainerStyled = styled.div`
  display: flex;
  justify-content: center;
  position: absolute;
`;
