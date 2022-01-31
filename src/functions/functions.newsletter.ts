import { createSlice } from "@reduxjs/toolkit";

// * DTO representing response from the server
interface NewsletterResponse {
  message: string;
}

// * Interface with the object
interface NewsletterDTO {
  email: string;
  response?: NewsletterResponse;
}

// * Initial state
const InitialNewsletterState: NewsletterDTO = {
  email: "",
};

/**
 * ! Newsletter slicer to control subscribe
 * * whitehatdevv - 2022/01/27
 */
export const NewsletterSlice = createSlice({
  name: "Newsletter",
  initialState: InitialNewsletterState,
  reducers: {
    subscribe: (state) => {
      console.log(`Subscribe: ${state.email} to newsletter`);
      // TODO: Implement API Call
    },
  },
});

// * Export items
export const { subscribe } = NewsletterSlice.actions;
export const NewsletterSliceReducer = NewsletterSlice.reducer;
