import * as PropTypes from "prop-types";
import { useEffect, useState } from "react";
import { CounterCointainerStyled, CounterStyled } from "./CounterStyled";

// * Define proptypes
const CounterPropstypes = {
  color: PropTypes.string,
};

// * Define the type to infer props
type CounterPropsTyped = PropTypes.InferProps<typeof CounterPropstypes>;

/**
 * ! Counter of loading
 * * PatyVilas - 2022/02/10
 * @param props
 */
const Counter: React.FC<CounterPropsTyped> = (props: any) => {
  const [count, setCount] = useState(0);
  const duration = 1;
  const end = 100;

  useEffect(() => {
    let start = 0;

    if (start === end) return;

    const incrementTime = (duration / end) * 1000;

    const timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementTime);
  }, [duration, end]);

  return (
    <>
      <CounterCointainerStyled>
        <CounterStyled color={props.color}>{count}%</CounterStyled>
      </CounterCointainerStyled>
    </>
  );
};

// * Proptypes
Counter.propTypes = CounterPropstypes;
// * Export component
export default Counter;
