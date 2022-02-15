import React from "react";
import PropTypes from "prop-types";
import { Slide2Styled } from "./SlideStyled-2";
import Text from "../../../components/Text/Text";
import { Tokens } from "../../../static/Tokens";

// * Define proptypes object
const Slide2Proptypes = {
  bgColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

// * Define the type to infer props
type Slide2PropsTyped = PropTypes.InferProps<typeof Slide2Proptypes>;

/**
 * ! Define the landing title component
 * * danielcostarosenthal - 2022/02/07
 * @param props {props}
 */

const Slide2: React.FC<Slide2PropsTyped> = (props: any) => {
  // * View Builder
  return (
    <>
      <Slide2Styled
        bgColor={props.bgColor}
        width={props.width}
        height={props.height}
      >
        <Text
          color={Tokens.Colors.Text.Primary}
          fontFamily={Tokens.Typography.FontFamily.Secondary}
          fontWeight={Tokens.Typography.Weights.Black}
          fontSize={Tokens.Typography.Sizes.Website.Large}
          text="worksut"
        />
      </Slide2Styled>
    </>
  );
};

// * Proptypes
Slide2.propTypes = Slide2Proptypes;

// * Export component
export default Slide2;
