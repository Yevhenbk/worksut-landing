import { Styler } from "../../../services/Settings/Settings.Styler";
import {
  Slide3Styled,
  Slide3ContentLeftStyled,
  Slide3ContentRightStyled,
  Slide3TextLeftStyled,
  Slide3TextRightStyled,
} from "./SlideStyled3";
import { Tokens } from "../../../static/Tokens";
import Text from "../../../components/Text/Text";
import SocialSection from "../../../components/SocialSection/SocialSection";
import Scrollable from "../../../components/Scrollable/Scrollable";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import LogoTitle from "../../../components/LogoTitle/LogoTitle";

/**
 * ! Define the landing title component
 * * danielcostarosenthal - 2022/02/08
 * @param props {props}
 */

const Slide3: React.FC = () => {
  // * View Builder
  return (
    <>
      <Slide3Styled>
        <LogoTitle
          fontWeight={Tokens.Typography.Weights.Bolder}
          fontFamily={Tokens.Typography.FontFamily.Primary}
          text="worksut"
        />
        <Slide3ContentLeftStyled>
          <div className="progress">
            <ProgressBar
              progress={100}
              bgColor={Tokens.Colors.Button.Default}
              height={2}
              dur={"1.5"}
              delay={"0"}
            />
          </div>
          <Slide3TextLeftStyled>
            <Text
              text="bienvenido a la nueva forma de encontrar trabajo y contratar personas."
              styler={(text) => Styler.UpperCasing(text)}
              fontFamily={Tokens.Typography.FontFamily.Primary}
            />
            <br />
            <Text
              text="bienvenido al cambio."
              styler={(text) => Styler.UpperCasing(text)}
              fontFamily={Tokens.Typography.FontFamily.Primary}
            />
          </Slide3TextLeftStyled>
        </Slide3ContentLeftStyled>
        <Scrollable />
        <Slide3ContentRightStyled>
          <Slide3TextRightStyled>
            <Text text="Nuestra misión es dar a las empresas lo que necesitan y a los trabajadores lo que buscan, impulsando un " />
            <Text
              text="innovador sistema y una nueva experiencia de usuario nunca antes vista."
              color={Tokens.Colors.Text.Primary}
              bgColor={Tokens.Colors.Backgrounds.Primary}
            />
            <br />
            <Text
              text="Las plataformas de búsqueda de empleo	actuales están obsoletas, seguro que tú también te habrás dado cuenta. Pero todo ello está a punto de saltar por los aires."
              fontFamily={Tokens.Typography.FontFamily.Primary}
            />
          </Slide3TextRightStyled>
          <div className="progressRight">
            <ProgressBar
              progress={100}
              bgColor={Tokens.Colors.Button.Default}
              height={2}
              dur={"1.5"}
              delay={"4"}
              fill={"both"}
            />
          </div>
        </Slide3ContentRightStyled>
      </Slide3Styled>
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
            url: Tokens.Icons.URL.Social.Twitter,
          },
        ]}
      />
    </>
  );
};

// * Export component
export default Slide3;
