import { LogoTitleStyled } from "./LogoTitleStyled";
import * as PropTypes from "prop-types";

const LogoTitleProptypes = { 
    text: PropTypes.string.isRequired
}

type LogoTitleTyped = PropTypes.InferProps<typeof LogoTitleProptypes>;

/**
 * ! Simple title component
 * * aslansn - 2022-02-01
 */
const LogoTitle: React.FC<LogoTitleTyped> = (props: any) => { 
    return (
        <LogoTitleStyled>
            {props.text}
        </LogoTitleStyled>
    )
};

LogoTitle.propTypes = LogoTitleProptypes;

export default LogoTitle;