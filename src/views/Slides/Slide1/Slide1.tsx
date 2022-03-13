import Spinner from "../../../components/Spinner/Spinner";
import { SlideStyled1 } from "./SlideStyled1";
import { Tokens } from "../../../static/Tokens";

/**
 * ! Define 1st view
 * * PatyVilas - 2022/02/10
 *  @param props {props}
 */
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
