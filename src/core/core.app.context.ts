import { configureStore } from "@reduxjs/toolkit";
import { NewsletterSliceReducer } from "../functions/functions.newsletter";
import { SliderReducer } from "../functions/functions.slider";

/**
 * ! Define all the reducers used on the entire applicion
 * * whitehatdevv - 2022/01/27
 * @reducer slider => Control the navigation flow
 */
export const Store = configureStore({
  reducer: {
    slider: SliderReducer,
    newsletter: NewsletterSliceReducer,
  },
});

// * Export all the needed states
export type RootState = ReturnType<typeof Store.getState>;
export type AppDispatch = typeof Store.dispatch;
