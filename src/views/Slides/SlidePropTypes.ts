import * as PropTypes from "prop-types";

export const SlideProptypes = {
  by: PropTypes.number.isRequired,
  onLanguageChanged: PropTypes.func.isRequired,
  language: PropTypes.shape({
    iso: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired
};

export namespace T {
  export const TranslateY = (initial: number, by: number, batch: number, sleeper: number=0) => by+sleeper > 1 ? 0 : initial - ((by+sleeper)*(batch));
  export const TranslateX = (initial: number, by: number, batch: number, sleeper: number=0) => by+sleeper > 1 ? 0 : initial + ((by+sleeper)*batch);
  export const Opacity = (by: number) => by;
  export const Scale = (max: number, by: number, min: number) => by > 0.9 ? min : max - by*max;
}

export type SlidePropTypesTyped = PropTypes.InferProps<typeof SlideProptypes>;
