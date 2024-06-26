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
import LogoTitle from "../../../components/LogoTitle/LogoTitle";
import { SlideProptypes, SlidePropTypesTyped, T } from "../SlidePropTypes";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import LanguageSelector from "../../../components/LanguageSelector/LanguageSelector";
import { Languages } from "../../../static/Languages";

const _TranslateYInitialValue: number = 100;
const _TranslateXInitialValue: number = -100;
const _BatchConversion: number = 100;
const _Sleeper = 0.2;

const Slide3: React.FC<SlidePropTypesTyped> = (props) => {
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
      <Slide3Styled>
        <Slide3ContentLeftStyled>
          <div className="progress">
            <ProgressBar progress={100} />
          </div>
          <Slide3TextLeftStyled
            opacity={T.Opacity(props.by)}
            translateX={T.TranslateX(
              _TranslateXInitialValue,
              props.by,
              _BatchConversion,
              _Sleeper
            )}
            translateY={T.TranslateY(
              _TranslateYInitialValue,
              props.by,
              _BatchConversion,
              _Sleeper
            )}
          >
            <Text
              text="bienvenido a la nueva forma de encontrar trabajo y contratar personas."
              styler={(text) => Styler.UpperCasing(text)}
            />
            <br />
            <Text
              text="bienvenido al cambio."
              styler={(text) => Styler.UpperCasing(text)}
            />
          </Slide3TextLeftStyled>
        </Slide3ContentLeftStyled>
        <Scrollable />
        <Slide3ContentRightStyled>
          <Slide3TextRightStyled
            opacity={T.Opacity(props.by)}
            translateX={T.TranslateX(
              _TranslateXInitialValue,
              props.by,
              _BatchConversion,
              _Sleeper
            )}
            translateY={T.TranslateY(
              _TranslateYInitialValue,
              props.by,
              _BatchConversion,
              _Sleeper
            )}
          >
            <div className="Streesed">
              <Text text="Nuestra misión es dar a las empresas lo que necesitan y a los trabajadores lo que buscan, impulsando un " />
            </div>
            <br />
            <Text text="Las plataformas de búsqueda de empleo	actuales están obsoletas, seguro que tú también te habrás dado cuenta. Pero todo ello está a punto de saltar por los aires." />
          </Slide3TextRightStyled>
          <div className="progressRight">
            <ProgressBar progress={100} />
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

Slide3.propTypes = SlideProptypes;

// * Export component
export default Slide3;
