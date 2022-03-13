import React, { useState } from "react";
import { SlideStyled5 } from "./SlideStyled5";
import { Tokens } from "../../../static/Tokens";
import Label from "../../../components/Label/Label";
import Input from "../../../components/Input/Input";
import { DivStyled5 } from "./SlideStyled5";
import SocialSection from "../../../components/SocialSection/SocialSection";
import LogoTitle from "../../../components/LogoTitle/LogoTitle";
import { SlideProptypes, SlidePropTypesTyped } from "../SlidePropTypes";

// * Regexs
const _EmailValidator =
  /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const Slide5: React.FC<SlidePropTypesTyped> = (props) => {
  // * Hooks
  const [email, setEmail] = useState<string>();

  // * View Builder
  return (
    <>
      <SlideStyled5>
        <LogoTitle
          color={Tokens.Colors.Text.Secondary}
          fontWeight={Tokens.Typography.Weights.Bolder}
          fontFamily={Tokens.Typography.FontFamily.Primary}
          text="worksut"
        />

        <DivStyled5>
          <Label
            color={Tokens.Colors.Text.Secondary}
            fontFamily={Tokens.Typography.FontFamily.Primary}
            fontWeight={Tokens.Typography.Weights.Bolder}
            text="Apúntate y consigue ventajas exclusivas antes que nadie"
          />
          <Input
            color={Tokens.Colors.Text.Secondary}
            type="email"
            placeholder="Introduce tu correo electronico"
            handleChange={setEmail}
            validator={new RegExp(_EmailValidator)}
            wrapper={{
              icon: {
                enabled: "wrapper_input_enabled.png",
                disabled: "wrapper_input_disabled.png",
              },
              alt: "Icon setted to sent email",
              handleClick: () => {
                console.log(`Send email ${email}`);
              },
            }}
          />
        </DivStyled5>
      </SlideStyled5>
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

Slide5.propTypes = SlideProptypes;

// * Export component
export default Slide5;
