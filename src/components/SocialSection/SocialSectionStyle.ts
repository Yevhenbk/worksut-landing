import styled from 'styled-components'

// * Define style of the div
export const DivStyleSocialSection = styled.div`
  display: flex;
  flex-direction: row;
  align-content: space-between;
  position: relative;
  bottom: 3.5em;
  left: 1.5em;

  @media (min-width: 500px) {
    bottom: 4em;
    left: 1.75em;
  }
  @media (min-width: 700px) {
    bottom: 4.5em;
    left: 2em;
  }
`;
