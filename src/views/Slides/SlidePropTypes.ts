import * as PropTypes from "prop-types";

export const SlideProptypes = {
  by: PropTypes.number,
  end: PropTypes.func,
};

export type SlidePropTypesTyped = PropTypes.InferProps<typeof SlideProptypes>;
