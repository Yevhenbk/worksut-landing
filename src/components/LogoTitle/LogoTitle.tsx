import * as PropTypes from "prop-types";
import { LogoTitleStyled } from "./LogoTitleStyled";
import { Tokens } from '../../static/Tokens';

const LogoTitleProptypes = {
  text: PropTypes.string.isRequired,
  color: PropTypes.string,
  fontWeight: PropTypes.string,
  fontSize: PropTypes.string,
  styler: PropTypes.func,
  fontFamily: PropTypes.string,
};

type LogoTitleTyped = PropTypes.InferProps<typeof LogoTitleProptypes>;

/**
 * ! Simple title component
 * * aslansn - 2022-02-01
 */
const LogoTitle: React.FC<LogoTitleTyped> = (props: any) => {
  return (
    <>
      <LogoTitleStyled
        color={props.color}
        fontWeight={props.fontWeight}
        fontSize={props.fontSize}
        fontFamily={Tokens.Typography.FontFamily.Primary}
        backGround={props.backGround}
      >
        {props.styler ? props.styler(props.text) : props.text}
      </LogoTitleStyled>
    </>
  );
};
// * Proptypes
LogoTitle.propTypes = LogoTitleProptypes;
// * Export component
export default LogoTitle;
