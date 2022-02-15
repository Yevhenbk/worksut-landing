import PropTypes  from 'prop-types';
import Spinner from '../../../components/Spinner/Spinner';
import { SlideStyled1 } from './SlideStyled-1';
import { Tokens } from '../../../static/Tokens';

// * Define proptypes object
const Slide1Proptypes = {
    bgColor: PropTypes.string,
    width: PropTypes.number,
    height: PropTypes.number,
}

// * Define the type of to infer props
type Slide1PropTyped = PropTypes.InferProps<typeof Slide1Proptypes>

/**
 * ! Define 1st view 
 * * PatyVilas - 2022/02/10
 *  @param props {props}
 */
const Slide1: React.FC<Slide1PropTyped> = (props: any) => {
    return (
      <>
        <SlideStyled1
          bgColor={props.bgColor}
          width={props.width}
          height={props.height}
        >
          <Spinner
            color={Tokens.Colors.Text.Primary}
            colorOff={Tokens.Colors.Text.Secondary}
          ></Spinner>
        </SlideStyled1>
      </>
    );
}
// * Proptypes
Slide1.propTypes = Slide1Proptypes
// * Export view
export default Slide1