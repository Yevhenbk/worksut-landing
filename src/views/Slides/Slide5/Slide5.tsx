import React, { useEffect, useState } from "react";
import { SlideStyled5 } from "./SlideStyled5";
import { Tokens } from "../../../static/Tokens";
import Label from "../../../components/Label/Label";
import Input from "../../../components/Input/Input";
import { DivStyled5 } from "./SlideStyled5";
import SocialSection from "../../../components/SocialSection/SocialSection";
import LogoTitle from "../../../components/LogoTitle/LogoTitle";
import PropTypes from "prop-types";
import LanguageSelector from "../../../components/LanguageSelector/LanguageSelector";
import { Languages } from "../../../static/Languages";

const Slide5Proptypes = {
    by: PropTypes.number.isRequired,
    handleSubmit: PropTypes.func.isRequired,
    handleEmail: PropTypes.func.isRequired,
    onLanguageChanged: PropTypes.func.isRequired,
    language: PropTypes.shape({
        iso: PropTypes.string.isRequired,
        title: PropTypes.string.isRequired,
    }).isRequired,
};

type Slide5ProptypesTyped = PropTypes.InferProps<typeof Slide5Proptypes>;

// * Regexs
const _EmailValidator =
    /^([A-Za-z0-9_\-\.])+\@([A-Za-z0-9_\-\.])+\.([A-Za-z]{2,4})$/;

const Slide5: React.FC<Slide5ProptypesTyped> = (props) => {
    // * Hooks
    const [email, setEmail] = useState<string>();

    useEffect(() => {
        props.handleEmail(email);
    }, [email]);

    // * View Builder
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
        <SlideStyled5>
          <DivStyled5>
            <Label
              color={Tokens.Colors.Text.Secondary}
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

Slide5.propTypes = Slide5Proptypes;

// * Export component
export default Slide5;
