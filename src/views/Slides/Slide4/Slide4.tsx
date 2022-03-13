import LogoTitle from "../../../components/LogoTitle/LogoTitle";
import SocialSection from "../../../components/SocialSection/SocialSection";
import Text from "../../../components/Text/Text";
import { Tokens } from "../../../static/Tokens";
import {
  HeroContainer,
  SlideStyled4,
  SpanNewContainer,
  SvgStyled,
  CrossLineStyled,
} from "./SlideStyled4";
import { SlideProptypes, SlidePropTypesTyped, T } from "../SlidePropTypes";

const _MaxScaleWrapper = 8;
const _MinimumScaleWrapper = 1;

const Slide4: React.FC<SlidePropTypesTyped> = (props) => {
  return (
    <>
      <SlideStyled4>
        <LogoTitle
          color={Tokens.Colors.Text.Primary}
          fontWeight={Tokens.Typography.Weights.Bolder}
          fontFamily={Tokens.Typography.FontFamily.Primary}
          text="worksut"
        />
        <HeroContainer
          scale={T.Scale(_MaxScaleWrapper, props.by, _MinimumScaleWrapper)}
        >
          <Text
            color={Tokens.Colors.Text.Primary}
            fontWeight={Tokens.Typography.Weights.Bolder}
            fontFamily={Tokens.Typography.FontFamily.Primary}
            text="ÚNETE A LA"
          />
          <SpanNewContainer>
            <Text
              color={Tokens.Colors.Text.Primary}
              fontWeight={Tokens.Typography.Weights.Bolder}
              fontFamily={Tokens.Typography.FontFamily.Primary}
              text="NUEVA"
            />
            <SvgStyled width={255} height={90}>
              {props.by > 0.1 ? (
                <>
                  <CrossLineStyled
                    strokeColor={Tokens.Colors.Text.Primary}
                    strokeWidth={12}
                    x1="5"
                    y1="10"
                    x2="250"
                    y2="80"
                    opacity="0"
                  >
                    <animate
                      attributeName="opacity"
                      from="0"
                      to="1"
                      begin="0.1"
                      dur="0.05s"
                      fill="freeze"
                    />
                  </CrossLineStyled>
                  <CrossLineStyled
                    strokeColor={Tokens.Colors.Text.Primary}
                    strokeWidth={12}
                    x1="5"
                    y1="80"
                    x2="250"
                    y2="10"
                    opacity="0"
                  >
                    <animate
                      attributeName="opacity"
                      from="0"
                      to="1"
                      begin="0.15"
                      dur="0.1s"
                      fill="freeze"
                    />
                  </CrossLineStyled>
                </>
              ) : null}
            </SvgStyled>
          </SpanNewContainer>
          <Text
            color={Tokens.Colors.Text.Primary}
            fontWeight={Tokens.Typography.Weights.Bolder}
            fontFamily={Tokens.Typography.FontFamily.Primary}
            text="FORMA"
          />

          <Text
            color={Tokens.Colors.Text.Primary}
            fontWeight={Tokens.Typography.Weights.Bolder}
            fontFamily={Tokens.Typography.FontFamily.Primary}
            text="DE ENCONTRAR EMPLEO"
          />
        </HeroContainer>
      </SlideStyled4>
      <SocialSection
        networks={[
          {
            icon: Tokens.Icons.Social.Secondary.Instagram,
            url: Tokens.Icons.URL.Social.Instagram,
          },
          {
            icon: Tokens.Icons.Social.Secondary.Twitter,
            url: Tokens.Icons.URL.Social.Twitter,
          },
          {
            icon: Tokens.Icons.Social.Secondary.Linkedin,
            url: Tokens.Icons.URL.Social.Linkedin,
          },
        ]}
      />
    </>
  );
};

Slide4.propTypes = SlideProptypes;

// * Export view
export default Slide4;
