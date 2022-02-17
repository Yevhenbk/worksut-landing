import React from "react";
import PropTypes from "prop-types";
import { SlideStyled6, Icon, TextIcon, DivStyle6 } from "./SlideStyled-6";
import { Tokens } from "../../../static/Tokens";
import Label from "../../../components/Label/Label";
import Text from "../../../components/Text/Text";
import iconLike from "../../../static/img/iconLike.png";
import SocialSection from "../../../components/SocialSection/SocialSection";
import LogoTitle from "../../../components/LogoTitle/LogoTitle";

// * Define proptypes object
const Slide6Proptypes = {
  bgColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};
// * Define the type to infer props
type Slide6PropsTyped = PropTypes.InferProps<typeof Slide6Proptypes>;
/**
 * ! Define the landing title component
 * * MgTablante & CarolTraba - 2022/02/10
 * @param props {props}
 */
const Slide6: React.FC<Slide6PropsTyped> = (props: any) => {
  // * View Builder

  return (
    <>
      <SlideStyled6
        bgColor={props.bgColor}
        width={props.width}
        height={props.height}
      >
        <LogoTitle
          color={Tokens.Colors.Text.Secondary}
          fontWeight={Tokens.Typography.Weights.Bolder}
          fontFamily={Tokens.Typography.FontFamily.Primary}
          text="worksut"
        />
        <DivStyle6>
          <Label
            color={Tokens.Colors.Text.Secondary}
            /* fontWeight={Tokens.Typography.Weights.Black} */
            fontSize={Tokens.Typography.Sizes.Mobile.Medium}
            fontFamily={Tokens.Typography.FontFamily.Secondary}
            text="Apúntate y consigue ventajas exclusivas antes que nadie"
          />
          <TextIcon>
            <Icon src={iconLike} />
            <Text
              color={Tokens.Colors.Text.Secondary}
              /* fontWeight={Tokens.Typography.Weights.Black} */
              fontSize={Tokens.Typography.Sizes.Mobile.Small}
              text="Correo enviado. Échale un ojo a nuestras redes y entérate de todo lo que se cuece."
              // styler={(text) => Styler.UpperCasing(text)}
            />
          </TextIcon>
        </DivStyle6>
      </SlideStyled6>

      <SocialSection
        networks={[
          {
            icon: Tokens.Icons.Social.Red.Instagram,
            url: Tokens.Icons.URL.Social.Instagram,
          },
          {
            icon: Tokens.Icons.Social.Red.Twitter,
            url: Tokens.Icons.URL.Social.Twitter,
          },
          {
            icon: Tokens.Icons.Social.Red.Linkedin,
            url: Tokens.Icons.URL.Social.Linkedin,
          },
        ]}
      />
    </>
  );
};
// * Proptypes
Slide6.propTypes = Slide6Proptypes;
// * Export component
export default Slide6;
