import React from 'react'
import PropTypes from 'prop-types'
import { Styler } from '../../../services/Settings/Settings.Styler'
import {
  Slide3Styled,
  Slide3ContentLeftStyled,
  Slide3ContentRightStyled,
  Slide3TextLeftStyled,
  Slide3TextRightStyled,
} from "./SlideStyled-3";
import { Tokens } from "../../../static/Tokens";
import Text from "../../../components/Text/Text";
import SocialSection from "../../../components/SocialSection/SocialSection";
import Scrollable from "../../../components/Scrollable/Scrollable";
import ProgressBar from "../../../components/ProgressBar/ProgressBar";
import LogoTitle from "../../../components/LogoTitle/LogoTitle";


// * Define proptypes object
const Slide3Proptypes = {
  width: PropTypes.number,
  height: PropTypes.number,
  color: PropTypes.string,
  bgColor: PropTypes.string,
};

// * Define the type to infer props
type Slide3PropsTyped = PropTypes.InferProps<typeof Slide3Proptypes>;

/**
 * ! Define the landing title component
 * * danielcostarosenthal - 2022/02/08
 * @param props {props}
 */

const Slide3: React.FC<Slide3PropsTyped> = (props: any) => {
  // * View Builder
  return (
    <>
      <Slide3Styled
        width={props.width}
        height={props.height}
        transform={props.transform}
        bgColor={props.bgColor}
      >
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
              fontFamily={Tokens.Typography.FontFamily.Secondary}
            />
            <br />
            <Text
              text="bienvenido al cambio."
              styler={(text) => Styler.UpperCasing(text)}
              fontFamily={Tokens.Typography.FontFamily.Secondary}
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

// * Proptypes
Slide3.propTypes = Slide3Proptypes

// * Export component
export default Slide3
