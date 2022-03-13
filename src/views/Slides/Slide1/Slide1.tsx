import Spinner from "../../../components/Spinner/Spinner";
import { SlideStyled1 } from "./SlideStyled1";
import { Tokens } from "../../../static/Tokens";
// import { SlideProptypes, SlidePropTypes } from '../SlidePropTypes';
// import { produceWithPatches } from "immer";
import PropTypes from "prop-types";

const Slide1Proptypes = {
  loader: PropTypes.func.isRequired,
};

type Slide1ProptypesTyped = PropTypes.InferProps<typeof Slide1Proptypes>;

const Slide1: React.FC<Slide1ProptypesTyped> = (props) => {
  return (
    <>
      <SlideStyled1>
        <Spinner
          colorRight={Tokens.Colors.Text.Primary}
          colorLeft={Tokens.Colors.Text.Secondary}
          colorTop={Tokens.Colors.Text.Primary}
          colorBottom={Tokens.Colors.Text.Primary}
          handleLoaded={() => props.loader()}
        />
      </SlideStyled1>
    </>
  );
};

Slide1.propTypes = Slide1Proptypes;

// * Export view
export default Slide1;
