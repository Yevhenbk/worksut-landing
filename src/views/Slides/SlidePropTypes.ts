import * as PropTypes from "prop-types";

export const SlideProptypes = {
  by: PropTypes.number, // [0,1]
  end: PropTypes.func.isRequired,
};

export type SlidePropTypes = PropTypes.InferProps<typeof SlideProptypes>;
