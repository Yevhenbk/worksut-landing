import * as PropTypes from "prop-types";

export const SlideProptypes = {
  by: PropTypes.number.isRequired,
  end: PropTypes.func,
};

export namespace T {
  export const TranslateY = (initial: number, by: number, batch: number) => initial - (by*batch);
  export const TranslateX = (initial: number, by: number, batch: number) => initial + (by*batch);
  export const Opacity = (by: number) => by;
  export const Scale = (max: number, by: number, min: number) => by > 0.9 ? min : max - by*max;
}

export type SlidePropTypesTyped = PropTypes.InferProps<typeof SlideProptypes>;