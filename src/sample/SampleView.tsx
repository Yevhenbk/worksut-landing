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
import Slide1 from "../views/app/Slide-1/Slide-1";
import Slide2 from "../views/app/Slide-2/Slide-2";
import Slide3 from "../views/app/Slide-3/Slide-3";
import Slide4 from "../views/app/Slide-4/Slide-4";
import Slide5 from "../views/app/Slide-5/Slide-5";
import Slide6 from "../views/app/Slide-6/Slide-6";

/**
 * ! Main Instance of the application
 * * whitehatdevv - 2022/01/21
 */

const SampleView = () => {
  const position = useAppSelector((state) => state.slider.position);
  const dispatch = useAppDispatch();
  const [email, setEmail] = useState<string>();
  useEffect(() => {
    console.log(email);
  }, [email]);

  return (
    <>
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
            color={Tokens.Colors.Text.Secondary}
            colorOff={Tokens.Colors.Text.Primary}
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
          fontFamily={Tokens.Typography.FontFamily.Secondary}
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
          fontFamily={Tokens.Typography.FontFamily.Secondary}
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
        <ProgressBar progress={80} bgColor={Tokens.Colors.Button.Default} />
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
      <div>
        <Slide1
          bgColor={Tokens.Colors.Backgrounds.Primary}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Slide2
          bgColor={Tokens.Colors.Backgrounds.Primary}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Slide3
          color={Tokens.Colors.Text.Primary}
          bgColor={Tokens.Colors.Backgrounds.Secondary}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Slide4
          bgColor={Tokens.Colors.Backgrounds.Primary}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Slide5
          bgColor={Tokens.Colors.Backgrounds.Secondary}
          width={100}
          height={100}
        />
      </div>
      <div>
        <Slide6
          bgColor={Tokens.Colors.Backgrounds.Secondary}
          width={100}
          height={100}
        />
      </div>
    </>
  );
};

// * Export the application
export default SampleView;
