import { SlideStyled6, Icon, TextIcon, DivStyle6 } from "./SlideStyled6";
import { Tokens } from "../../../static/Tokens";
import Label from "../../../components/Label/Label";
import Text from "../../../components/Text/Text";
import iconLike from "../../../static/img/iconLike.png";
import SocialSection from "../../../components/SocialSection/SocialSection";
import LogoTitle from "../../../components/LogoTitle/LogoTitle";
import { SlideProptypes, SlidePropTypesTyped } from "../SlidePropTypes";
import LanguageSelector from "../../../components/LanguageSelector/LanguageSelector";
import { Languages } from "../../../static/Languages";

const Slide6: React.FC<SlidePropTypesTyped> = (props) => {
    return (
      <>
        <LanguageSelector
          color={Tokens.Colors.Text.Secondary}
          languages={Languages}
          selectedIndex={0}
          onLanguageChanged={props.onLanguageChanged}
        />
        <LogoTitle
          text="worksut"
          color={Tokens.Colors.Text.Secondary}
        />
        <SlideStyled6>
          <DivStyle6>
            <Label
              color={Tokens.Colors.Text.Secondary}
              fontFamily={Tokens.Typography.FontFamily.Primary}
              fontWeight={Tokens.Typography.Weights.SemiBold}
              text="Apúntate y consigue ventajas exclusivas antes que nadie"
            />

            <TextIcon>
              <Icon src={iconLike} />
              <Text
                color={Tokens.Colors.Text.Secondary}
                text="Correo enviado. Échale un ojo a nuestras redes y entérate de todo lo que se cuece."
              />
            </TextIcon>
          </DivStyle6>
        </SlideStyled6>

        <SocialSection
          networks={[
            {
              icon: Tokens.Icons.Social.Primary.Instagram,
              url: Tokens.Icons.URL.Social.Instagram,
            },
            {
              icon: Tokens.Icons.Social.Primary.Twitter,
              url: Tokens.Icons.URL.Social.Twitter,
            },
            {
              icon: Tokens.Icons.Social.Primary.Linkedin,
              url: Tokens.Icons.URL.Social.Linkedin,
            },
          ]}
        />
      </>
    );
};

Slide6.propTypes = SlideProptypes;

// * Export component
export default Slide6;
