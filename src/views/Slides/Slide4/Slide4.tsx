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
import LanguageSelector from "../../../components/LanguageSelector/LanguageSelector";
import { Languages } from "../../../static/Languages";

const _MaxScaleWrapper = 7;
const _MinimumScaleWrapper = 1;

const Slide4: React.FC<SlidePropTypesTyped> = (props) => {
  return (
    <>
      <LanguageSelector
        color={Tokens.Colors.Text.Primary}
        languages={Languages}
        selectedIndex={0}
        onLanguageChanged={props.onLanguageChanged}
      />
      <LogoTitle text="worksut" color={Tokens.Colors.Text.Primary} />
      <SlideStyled4>
        <HeroContainer
          scale={T.Scale(_MaxScaleWrapper, props.by, _MinimumScaleWrapper)}
        >
          <Text text="ÚNETE A LA" />
          <SpanNewContainer>
            <Text text="NUEVA" />
            <SvgStyled>
              {props.by > 0.5 ? (
                <>
                  <CrossLineStyled
                    strokeColor={Tokens.Colors.Text.Primary}
                    strokeWidth={12}
                    x1="0"
                    y1="5"
                    x2="240"
                    y2="70"
                    opacity="0"
                  >
                    <animate
                      attributeName="opacity"
                      from="0"
                      to="1"
                      begin="1.5"
                      dur="0.05s"
                      fill="freeze"
                    />
                  </CrossLineStyled>
                  <CrossLineStyled
                    strokeColor={Tokens.Colors.Text.Primary}
                    strokeWidth={12}
                    x1="0"
                    y1="70"
                    x2="240"
                    y2="5"
                    opacity="0"
                  >
                    <animate
                      attributeName="opacity"
                      from="0"
                      to="1"
                      begin="2.5"
                      dur="0.1s"
                      fill="freeze"
                    />
                  </CrossLineStyled>
                </>
              ) : null}
            </SvgStyled>
          </SpanNewContainer>
          <Text text="FORMA" width={100} />
          <Text text="DE ENCONTRAR EMPLEO" />
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
