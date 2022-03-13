import React from "react";
import * as PropTypes from "prop-types";
import Slide1 from "./Slide1/Slide1";
import Slide2 from "./Slide2/Slide2";
import Slide3 from "./Slide3/Slide3";
import Slide4 from "./Slide4/Slide4";
import Slide5 from "./Slide5/Slide5";
import Slide6 from "./Slide6/Slide6";

export module SliderCtrl {
  export const BatchSize: number = 100;
  export const Slides: React.FC[] = [
    Slide1,
    Slide2,
    Slide3,
    Slide4,
    Slide5,
    Slide6,
  ];
}

export const SlideProptypes = {
  by: PropTypes.number.isRequired, // [0,1]
};

export type SlidePropTypes = PropTypes.InferProps<typeof SlideProptypes>;
