import { Slide2Styled, Slide2StyledText } from "./SlideStyled2";
import Text from "../../../components/Text/Text";
import { Tokens } from "../../../static/Tokens";
import { SlidePropTypesTyped, SlideProptypes } from "../SlidePropTypes";

const _Slide2Configurations = [
  {
    translateY: 60,
    opacity: 0,
  },
  {
    translateY: 60,
    opacity: 0,
  },
  {
    translateY: 0,
    opacity: 1,
  },
];
const _Slide2Steps: number = _Slide2Configurations.length;

const Slide2: React.FC<SlidePropTypesTyped> = (props) => {

  // * Functionalities
  const BreakPoint = (s: number): number => (1 / _Slide2Steps) * s;
  const Slide2Mapper = () => {
    switch (true) {
      case props.by < BreakPoint(1):
        return _Slide2Configurations[0];
      case props.by < BreakPoint(2):
        return _Slide2Configurations[1];
      case props.by < BreakPoint(3):
        return _Slide2Configurations[2];
      default:
        return _Slide2Configurations[0];
    }
  };

  // * View Builder
  return (
    <>
      <Slide2Styled>
        <Slide2StyledText
          opacity={Slide2Mapper().opacity}
          translateY={Slide2Mapper().translateY}
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
