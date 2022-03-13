import { Slide2Styled, Slide2StyledText } from "./SlideStyled2";
import Text from "../../../components/Text/Text";
import { Tokens } from "../../../static/Tokens";
import { SlidePropTypes } from "../SlidePropTypes";

const Slide2: React.FC<SlidePropTypes> = () => {
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

// * Export component
export default Slide2;
