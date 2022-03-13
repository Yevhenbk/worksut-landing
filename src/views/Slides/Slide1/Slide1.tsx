import Spinner from "../../../components/Spinner/Spinner";
import { SlideStyled1 } from "./SlideStyled1";
import { Tokens } from "../../../static/Tokens";
import PropTypes from "prop-types";

const Slide1PropTypes = {
  end: PropTypes.func.isRequired,
};

type Slide1PropTypesTyped = PropTypes.InferProps<typeof Slide1PropTypes>;

const Slide1: React.FC<Slide1PropTypesTyped> = (props) => {
  return (
    <>
      <SlideStyled1>
        <Spinner
          colorRight={Tokens.Colors.Text.Primary}
          colorLeft={Tokens.Colors.Text.Secondary}
          colorTop={Tokens.Colors.Text.Primary}
          colorBottom={Tokens.Colors.Text.Primary}
          handleLoaded={() => props.end()}
        />
      </SlideStyled1>
    </>
  );
};

Slide1.propTypes = Slide1PropTypes;

// * Export view
export default Slide1;
