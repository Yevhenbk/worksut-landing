import Spinner from "../../../components/Spinner/Spinner";
import { SlideStyled1 } from "./SlideStyled1";
import { Tokens } from "../../../static/Tokens";
import { SlideProptypes, SlidePropTypes } from "../SlidePropTypes";

const Slide1: React.FC<SlidePropTypes> = (props) => {
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

Slide1.propTypes = SlideProptypes;

// * Export view
export default Slide1;
