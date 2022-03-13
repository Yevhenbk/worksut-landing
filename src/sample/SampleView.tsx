import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../core/core.app.hooks";
import { Next, Back } from "../functions/functions.slider";
import { Tokens } from "../static/Tokens";
import { Styler } from "../services/Settings/Settings.Styler";
import "./SampleView.scss";
import Input from "../components/Input/Input";
import Label from "../components/Label/Label";
import LogoTitle from "../components/LogoTitle/LogoTitle";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Scrollable from "../components/Scrollable/Scrollable";
import SocialSection from "../components/SocialSection/SocialSection";
import Spinner from "../components/Spinner/Spinner";
import Text from "../components/Text/Text";
import Slide1 from "../views/Slides/Slide1/Slide1";
import Slide2 from "../views/Slides/Slide2/Slide2";
import Slide3 from "../views/Slides/Slide3/Slide3";
import Slide4 from "../views/Slides/Slide4/Slide4";
import Slide5 from "../views/Slides/Slide5/Slide5";
import Slide6 from "../views/Slides/Slide6/Slide6";
import { Languages } from "../static/Languages";
import LanguageSelector from "../components/LanguageSelector/LanguageIcon/LanguageIcon";

/**
 * ! Main Instance of the application
 * * whitehatdevv - 2022/01/21
 */

const SampleView = () => {
  const position = useAppSelector((state) => state.slider.position);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>();
  useEffect(() => {
    //console.log(`${email}`)
  }, [email]);

  return (
    <>
      <LanguageSelector
        languages={Languages}
        onLanguageChanged={(index: number) => {
          console.log(`Language changed`);
        }}
        selectedIndex={1}
      ></LanguageSelector>
      <LogoTitle
        color={Tokens.Colors.Text.Secondary}
        fontWeight={Tokens.Typography.Weights.Bolder}
        fontFamily={Tokens.Typography.FontFamily.Primary}
        text="worksut"
      />
      <div>
        <div>
          <h1 className="positionTitle">Position {position}</h1>
          <button className="positionButton" onClick={() => dispatch(Back())}>
            Back
          </button>
          <button className="positionButton" onClick={() => dispatch(Next())}>
            Next
          </button>
        </div>
        <div>
          <Spinner
            colorRight={Tokens.Colors.Text.Secondary}
            colorLeft={Tokens.Colors.Text.Primary}
            colorTop={Tokens.Colors.Text.Secondary}
            colorBottom={Tokens.Colors.Text.Secondary}
            handleLoaded={() => {
              console.log("Loaded");
            }}
          />
        </div>
        <Label
          color={Tokens.Colors.Text.Secondary}
          fontWeight={Tokens.Typography.Weights.Bolder}
          fontFamily={Tokens.Typography.FontFamily.Primary}
          text="Apúntate y consigue ventajas exclusivas antes que nadie"
        ></Label>

        <Input
          color={Tokens.Colors.Text.Primary}
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
      </div>
      <div>
        <Input
          color={Tokens.Colors.Text.Primary}
          type="email"
          placeholder="Introduce tu correo electronico"
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
      </div>
      <div className="mt-3">
        <Text
          color={Tokens.Colors.Text.Secondary}
          fontWeight={Tokens.Typography.Weights.Bold}
          fontFamily={Tokens.Typography.FontFamily.Primary}
          fontSize={Tokens.Typography.Sizes.Website.Small}
          text="bienvenido a la nueva forma de encontrar trabajo y contratar personas."
          styler={(text) => Styler.UpperCasing(text)}
          width={20}
        />
      </div>
      <div className="mt-3">
        <Text
          color={Tokens.Colors.Text.Secondary}
          fontWeight={Tokens.Typography.Weights.Bold}
          fontFamily={Tokens.Typography.FontFamily.Primary}
          fontSize={Tokens.Typography.Sizes.Website.Small}
          text="bienvenido al cambio."
          styler={(text) => Styler.UpperCasing(text)}
        />
      </div>
      <div className="mt-3">
        <Text
          color={Tokens.Colors.Text.Secondary}
          fontWeight={Tokens.Typography.Weights.Black}
          fontSize={Tokens.Typography.Sizes.Website.xSmall}
          text="text component"
          styler={(text) => Styler.UpperCasing(text)}
        />
      </div>
      <div className="mt-3">
        <ProgressBar progress={80} />
      </div>
      <div className="mt-3">
        <Scrollable />
      </div>
      <div className="titleSections">
        <br />
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
      </div>
      {/* <Slide1 />
      <Slide2 />
      <Slide3 />
      <Slide4 />
      <Slide5 />
      <Slide6 /> */}
    </>
  );
};

// * Export the application
export default SampleView;
