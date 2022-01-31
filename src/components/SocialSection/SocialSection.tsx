import React from "react";
import * as PropTypes from "prop-types";
import { DivStyleSocialSection } from "./SocialSectionStyle";
import SocialIcon from "./SocialIcon/SocialIcon";

// * Define props for the component
const SocialSectionProps = {
  networks: PropTypes.arrayOf(
    PropTypes.shape({
      icon: PropTypes.shape({
        src: PropTypes.string.isRequired,
        alt: PropTypes.string.isRequired,
      }).isRequired,
      url: PropTypes.string.isRequired,
    })
  ).isRequired,
};

// * Typealias to rename props
type SocialSectionPropDefinition = PropTypes.InferProps<
  typeof SocialSectionProps
>;

/**
 * ! Define the social section content
 * * whitehatdevv - 2022/01/27
 */
const SocialSection: React.FC<SocialSectionPropDefinition> = (props: any) => {
  return (
    <>
      <DivStyleSocialSection>
        {props.networks.map((item: any) => (
          <SocialIcon icon={item.icon} url={item.url} />
        ))}
      </DivStyleSocialSection>
    </>
  );
};

// * Set props
SocialSection.propTypes = SocialSectionProps;

// * Export content
export default SocialSection;
