import { SpinnerContainer, SpinnerStyled } from "./SpinnerStyled";
import * as PropTypes from "prop-types";
import Counter from "../Counter/Counter";
import { Tokens } from "../../static/Tokens";

// * Define proptypes
const SpinnerPropstypes = {
  colorTop: PropTypes.string,
  colorRight: PropTypes.string,
  colorBottom: PropTypes.string,
  colorLeft: PropTypes.string,
  handleLoaded: PropTypes.func.isRequired,
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
          colorRight={props.colorRight}
          colorLeft={props.colorLeft}
          colorTop={props.colorTop}
          colorBottom={props.colorBottom}
        />
        <Counter
          end={() => props.handleLoaded()}
          color={Tokens.Colors.Text.Primary}
        ></Counter>
      </SpinnerContainer>
    </>
  );
};
// * Proptypes
Spinner.propTypes = SpinnerPropstypes;
// * Export component
export default Spinner;
