import React from "react";
import PropTypes from "prop-types";
import { TextStyled } from "./TextStyled";

// * Define proptypes object
const TextProptypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  bgColor: PropTypes.string,
  fontFamily: PropTypes.string,
  fontSize: PropTypes.string,
  fontWeight: PropTypes.string,
  lineHeight: PropTypes.string,
  width: PropTypes.number,
  styler: PropTypes.func,
};

// * Define the type to infer props
type TextPropsTyped = PropTypes.InferProps<typeof TextProptypes>;

/**
 * ! Define the landing title component
 * * danielcostarosenthal - 2022/02/01
 * @param props {props}
 */

const Text: React.FC<TextPropsTyped> = (props: any) => {
  // * View Builder
  return (
    <>
      <TextStyled
        color={props.color}
        bgColor={props.bgColor}
        fontFamily={props.fontFamily}
        fontSize={props.fontSize}
        fontWeight={props.fontWeight}
        lineHeight={props.lineHeight}
        width={props.width}
      >
        {props.styler ? props.styler(props.text) : props.text}
      </TextStyled>
    </>
  );
};

// * Proptypes
Text.propTypes = TextProptypes;

// * Export component
export default Text;
