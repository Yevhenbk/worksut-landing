import { SpinnerContainer, SpinnerStyled } from "./SpinnerStyled";
import * as PropTypes from "prop-types";
import Counter from "../Counter/Counter";

// * Define proptypes
const SpinnerPropstypes = {
  color: PropTypes.string,
  colorOff: PropTypes.string,
};

// * Define the type to infer props
type SpinnerPropsTyped = PropTypes.InferProps<typeof SpinnerPropstypes>;

/**
 * ! Loading spinner
 * * PatyVilas - 2022/02/10
 * @param props
 */
const Spinner: React.FC<SpinnerPropsTyped> = (props: any) => {
  return (
    <>
      <SpinnerContainer>
        <SpinnerStyled
          color={props.color}
          colorOff={props.colorOff}
        ></SpinnerStyled>
        <Counter></Counter>
      </SpinnerContainer>
    </>
  );
};
// * Proptypes
Spinner.propTypes = SpinnerPropstypes;
// * Export component
export default Spinner;
