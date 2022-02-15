import React, { useEffect, useState } from "react";
import PropTypes from "prop-types";
import { SlideStyled5 } from "./SlideStyled-5";
import { Tokens } from "../../../static/Tokens";
import Label from "../../../components/Label/Label";
import Input from "../../../components/Input/Input";
import { DivStyled5 } from "./SlideStyled-5";
import SocialSection from "../../../components/SocialSection/SocialSection";
import LogoTitle from "../../../components/LogoTitle/LogoTitle";

// * Define proptypes object
const Slide5Proptypes = {
  bgColor: PropTypes.string,
  width: PropTypes.number,
  height: PropTypes.number,
};

// * Define the type to infer props
type Slide5PropsTyped = PropTypes.InferProps<typeof Slide5Proptypes>;

/**
 * ! Define the landing title component
 * * MgTablante & CarolTraba - 2022/02/10
 * @param props {props}
 */

const Slide5: React.FC<Slide5PropsTyped> = (props: any) => {
  // * View Builder
  const [email, setEmail] = useState<string>();
  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <>
      <SlideStyled5
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

        <DivStyled5>
          <Label
            color={Tokens.Colors.Text.Secondary}
            fontWeight={Tokens.Typography.Weights.Bolder}
            fontSize={Tokens.Typography.Sizes.Mobile.Medium}
            fontFamily={Tokens.Typography.FontFamily.Primary}
            text="Apúntate y consigue ventajas exclusivas antes que nadie"
          ></Label>
          <Input
            color={Tokens.Colors.Text.Secondary}
            type="email"
            placeholder="Enter your email"
            handleChange={setEmail}
            validator={new RegExp("^[a-z]{2,}$")}
            wrapper={{
              icon: {
                enabled: "wrapper_input_enabled.png",
                disabled: "wrapper_input_disabled.png",
              },
              alt: "Icon setted to sent email",
              handleClick: () => {
                console.log("Click");
              },
            }}
          />
        </DivStyled5>
      </SlideStyled5>
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
Slide5.propTypes = Slide5Proptypes;

// * Export component
export default Slide5;
