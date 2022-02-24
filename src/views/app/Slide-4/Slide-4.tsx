import PropTypes from 'prop-types';
import LogoTitle from '../../../components/LogoTitle/LogoTitle';
import SocialSection from '../../../components/SocialSection/SocialSection';
import Text from '../../../components/Text/Text';
import { Tokens } from '../../../static/Tokens';
import {
    HeroContainer,
    SlideStyled4,
    SpanNewContainer,
    SvgStyled,
    CrossLineStyled,
} from './SlideStyled-4';

// * Define proptypes object
const Slide4Proptypes = {
    bgColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
    fontSize: PropTypes.string,
};

// * define the type of the infer props
type Slide4PropTyped = PropTypes.InferProps<typeof Slide4Proptypes>;

/**
 * ! Define 4th view
 * * PatyVilas / 2022-02-12
 *  @param props {props}
 */
const Slide4: React.FC<Slide4PropTyped> = (props: any) => {
    return (
      <>
        <SlideStyled4
          bgColor={props.bgColor}
          width={props.width}
          height={props.height}
        >
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
              fontFamily={Tokens.Typography.FontFamily.Secondary}
              text="ÚNETE A LA"
            />
            <SpanNewContainer>
              <Text
                color={Tokens.Colors.Text.Primary}
                fontWeight={Tokens.Typography.Weights.Bolder}
                fontFamily={Tokens.Typography.FontFamily.Secondary}
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
              fontFamily={Tokens.Typography.FontFamily.Secondary}
              text="FORMA"
            />

            <Text
              color={Tokens.Colors.Text.Primary}
              fontWeight={Tokens.Typography.Weights.Bolder}
              fontFamily={Tokens.Typography.FontFamily.Secondary}
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

// * Protypes
Slide4.propTypes = Slide4Proptypes;
// * Export view
export default Slide4;
