import React from "react";
import PropTypes from "prop-types";
import { SlideStyled6, Icon, TextIcon } from "./SlideStyled-6";
import { Tokens } from "../../../static/Tokens";
import Label from "../../../components/Label/Label";
import Text from "../../../components/Text/Text";
import iconLike from "../../../static/img/iconLike.png";
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
        <Label
          color={Tokens.Colors.Text.Secondary}
          fontWeight={Tokens.Typography.Weights.Bolder}
          fontSize={Tokens.Typography.Sizes.Website.Regular}
          fontFamily={Tokens.Typography.FontFamily.Primary}
          text="Apúntate y consigue ventajas exclusivas antes que nadie"
        ></Label>
        <TextIcon>
        <Icon src={iconLike} />
          <Text
            color={Tokens.Colors.Text.Secondary}
            fontWeight={Tokens.Typography.Weights.Black}
            fontSize={Tokens.Typography.Sizes.Website.xSmall}
            text="Correo enviado. Échale un ojo a nuestras redes y entérate de todo lo que se cuece."
            // styler={(text) => Styler.UpperCasing(text)}
          ></Text>
        </TextIcon>
      </SlideStyled6>
    </>
  );
};
// * Proptypes
Slide6.propTypes = Slide6Proptypes;
// * Export component
export default Slide6;
