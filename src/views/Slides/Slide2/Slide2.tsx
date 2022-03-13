import { Slide2Styled, Slide2StyledText } from "./SlideStyled2";
import Text from "../../../components/Text/Text";
import { Tokens } from "../../../static/Tokens";
import { SlidePropTypes } from "../Slides";

/**
 * ! Define the landing title component
 * * danielcostarosenthal - 2022/02/07
 * @param props {props}
 */

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
