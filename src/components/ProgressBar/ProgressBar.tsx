import React from "react";
import * as PropTypes from "prop-types";
import { ProgressBarContainer, ProgressStatus } from "./ProgressBarStyle";

// * Define proptypes
const ProgressBarProptypes = {
    progress: PropTypes.oneOf([...new Array(101)].map((_, i) => i)),
    bgColor: PropTypes.string,
    height: PropTypes.number,
    dur: PropTypes.string,
    direction: PropTypes.string,
    timing: PropTypes.string,
    delay: PropTypes.string,
    fill: PropTypes.string,
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
                    height={props.height}
                    dur={props.dur}
                    direction={props.direction}
                    timing={props.timing}
                    delay={props.delay}
                    fill={props.fill}
                ></ProgressStatus>
            </ProgressBarContainer>
        </>
    );
};

// * Set proptypes
ProgressBar.propTypes = ProgressBarProptypes;

// * Export component
export default ProgressBar;
