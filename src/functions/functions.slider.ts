import { createSlice } from "@reduxjs/toolkit";

// * Slider needed interface to set the properties
interface Slider {
  position: number;
}

// * Compute initial position
const InitialSlider: Slider = {
  position: 0,
};

/**
 * ! Create all the slider slice to set the navigation
 * * whitehatdevv - 2022/01/27
 */
export const SliderSlice = createSlice({
  name: "Slider",
  initialState: InitialSlider,
  reducers: {
    Next: (state) => {
      state.position += 1;
      console.log(`Position: ${state.position}, next value`);
    },
    Back: (state) => {
      if (state.position > 0) {
        state.position -= 1;
        console.log(`Position: ${state.position}, back value}`);
      }
    },
  },
});

// * Export all the needed members
export const { Next, Back } = SliderSlice.actions;
export const SliderReducer = SliderSlice.reducer;
