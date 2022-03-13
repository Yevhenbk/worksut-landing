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

/**
 * ! Define 4th view
 * * PatyVilas / 2022-02-12
 *  @param props {props}
 */
const Slide4: React.FC = () => {
  return (
    <>
      <SlideStyled4>
        <LogoTitle
          color={Tokens.Colors.Text.Primary}
          fontWeight={Tokens.Typography.Weights.Bolder}
          fontFamily={Tokens.Typography.FontFamily.Primary}
          text="worksut"
        />
        <HeroContainer>
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
                  begin="3s"
                  dur="0.2s"
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
                  begin="3.5s"
                  dur="0.2s"
                  fill="freeze"
                />
              </CrossLineStyled>
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

// * Export view
export default Slide4;
