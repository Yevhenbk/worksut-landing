import { Slide2Styled, Slide2StyledText } from "./SlideStyled2";
import Text from "../../../components/Text/Text";
import { Tokens } from "../../../static/Tokens";
import { SlidePropTypesTyped, SlideProptypes, T } from "../SlidePropTypes";

const _TranslateYInitialValue: number = 10;
const _BatchConversion: number = 15;

const Slide2: React.FC<SlidePropTypesTyped> = (props) => {
  // * View Builder
  return (
    <>
      <Slide2Styled>
        <Slide2StyledText
          opacity={T.Opacity(props.by)}
          translateY={T.TranslateY(
            _TranslateYInitialValue,
            props.by,
            _BatchConversion
          )}
        >
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
