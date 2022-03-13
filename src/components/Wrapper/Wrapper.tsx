import React from "react";
import PropTypes from "prop-types";
import { ButtonStyled } from "./WrapperStyled";

// * Define props
const WrapperProptypes = {
  handleClick: PropTypes.func.isRequired,
  icon: PropTypes.shape({
    enabled: PropTypes.string.isRequired,
    disabled: PropTypes.string.isRequired,
  }),
  disabled: PropTypes.bool.isRequired,
  alt: PropTypes.string.isRequired,
};

// * Define type for props
type WrapperProps = PropTypes.InferProps<typeof WrapperProptypes>;

/**
 * ! Wrapper icon with button
 * * whitehatdevv - 2022/01/26
 * @param props {props}
 */
const Wrapper: React.FC<WrapperProps> = (props: any) => {
  // * Methods
  const HandleClick = () => props.handleClick();

  // * View builder
  return (
    <ButtonStyled
      disabled={!props.disabled}
      onClick={HandleClick}
      type="button"
    >
      <img className='IconWrapper'
        src={require(`../../static/img/${
          props.disabled ? props.icon.enabled : props.icon.disabled
        }`)}
        alt={props.alt}
      ></img>
    </ButtonStyled>
  );
};

// * Proptypes
Wrapper.propTypes = WrapperProptypes;

// * Export component
export default Wrapper;
