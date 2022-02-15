import React from "react";
import * as PropTypes from "prop-types";
import { ProgressBarContainer, ProgressStatus } from "./ProgressBarStyle";

// * Define proptypes
const ProgressBarProptypes = {
  progress: PropTypes.oneOf([...new Array(101)].map((_, i) => i)),
  bgColor: PropTypes.string,
};

// * Define typealias
type ProgressBarTyped = PropTypes.InferProps<typeof ProgressBarProptypes>;

/**
 * ! Define progress bar component
 * * whitehatdevv - 2022/01/28
 * @abstract This progress bar works with the interval [0,100]
 */
const ProgressBar: React.FC<ProgressBarTyped> = (props: any) => {
  return (
    <>
      <ProgressBarContainer>
        <ProgressStatus
          progress={props.progress}
          bgColor={props.bgColor}
        ></ProgressStatus>
      </ProgressBarContainer>
    </>
  );
};

// * Set proptypes
ProgressBar.propTypes = ProgressBarProptypes;

// * Export component
export default ProgressBar;
