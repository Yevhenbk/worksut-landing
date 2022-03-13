import Spinner from "../../../components/Spinner/Spinner";
import { SlideStyled1 } from "./SlideStyled1";
import { Tokens } from "../../../static/Tokens";
// import { SlideProptypes, SlidePropTypes } from '../SlidePropTypes';
// import { produceWithPatches } from "immer";
// import PropTypes from "prop-types";

/**
 * ! Define 1st view
 * * PatyVilas - 2022/02/10
 *  @param props {props}
 */

// const SlideProptypes = {
//     by: PropTypes.number.isRequired, // [0,1]
// };

// type SlidePropTypes = PropTypes.InferProps<typeof SlideProptypes>;

const Slide1: React.FC = () => {
  return (
    <>
      <SlideStyled1>
        <Spinner
          colorRight={Tokens.Colors.Text.Primary}
          colorLeft={Tokens.Colors.Text.Secondary}
          colorTop={Tokens.Colors.Text.Primary}
          colorBottom={Tokens.Colors.Text.Primary}
        />
      </SlideStyled1>
    </>
  );
};

// * Export view
export default Slide1;
