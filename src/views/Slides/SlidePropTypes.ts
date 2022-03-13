import * as PropTypes from 'prop-types';

export const SlideProptypes = {
    by: PropTypes.number.isRequired, // [0,1]
};

export type SlidePropTypes = PropTypes.InferProps<typeof SlideProptypes>;
