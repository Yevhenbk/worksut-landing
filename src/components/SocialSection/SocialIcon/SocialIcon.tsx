import React from "react";
import * as PropTypes from "prop-types";
import { ImageIconStyled } from "./SocialIconStyle";

// * Define Proptypes
const SocialIconPropTypes = {
  icon: PropTypes.shape({
    src: PropTypes.string.isRequired,
    alt: PropTypes.string.isRequired,
  }).isRequired,
  url: PropTypes.string.isRequired,
};

// * Define typealias
type SocialIconTypeAlias = PropTypes.InferProps<typeof SocialIconPropTypes>;

/**
 * ! Define social icon component
 * * whitehatdevv - 2022/01/27
 */

const SocialIcon: React.FC<SocialIconTypeAlias> = (props: any) => {
  return (
    <ImageIconStyled href={props.url} target="_blank">
      <img
        src={require(`./../../../static/img/social/${props.icon.src}`)}
        alt={props.icon.src}
      />
    </ImageIconStyled>
  );
};

// * Define proptypes
SocialIcon.propTypes = SocialIconPropTypes;

// * Export items
export default SocialIcon;
