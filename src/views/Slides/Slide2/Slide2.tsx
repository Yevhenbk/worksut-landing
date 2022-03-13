import { Slide2Styled, Slide2StyledText } from "./SlideStyled2";
import Text from "../../../components/Text/Text";
import { Tokens } from "../../../static/Tokens";
import { SlidePropTypesTyped, SlideProptypes } from "../SlidePropTypes";
import { useEffect } from "react";

const Slide2: React.FC<SlidePropTypesTyped> = (props) => {
  useEffect(() => {
    console.log(`BY: ${props.by}`);
  }, [props.by]);

  // * View Builder
  return (
    <>
      <Slide2Styled>
        <Slide2StyledText>
          <Text
            color={Tokens.Colors.Text.Primary}
            fontWeight={Tokens.Typography.Weights.Black}
            text="worksut"
          />
        </Slide2StyledText>
      </Slide2Styled>
    </>
  );
};

Slide2.propTypes = SlideProptypes;

// * Export component
export default Slide2;
