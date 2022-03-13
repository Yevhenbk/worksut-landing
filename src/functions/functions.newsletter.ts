import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import {NetworkClient, NetworkRequest} from 'worksut-networking';
import HTTPMethod from 'worksut-networking'

// * Network client
enum APIResourcePaths {
  SUBSCRIBE = '/subscribe'
}
const Client = new NetworkClient(process.env.BACKEND_URL!)
interface SubscribeResponse {
  message?: string;
  status: boolean;
}

// * DTO representing response from the server
interface NewsletterResponse {
  status: boolean;
  message?: string;
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
    SetEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload
    },
    Subscribe: (state) => {
      console.log(`Subscribe: ${state.email} to newsletter`);
      // * Create body
      const body: object = {email: state.email}; 
      // * Create headers
      const headers = new Headers();
      headers.append('Content-type', 'application/json');
      headers.append('Accept', 'application/json')
      // * Set request
      const request = new NetworkRequest<SubscribeResponse>(APIResourcePaths.SUBSCRIBE, undefined, headers, undefined, HTTPMethod.post, body);
      Client.send(request, (dom?: SubscribeResponse, err?: Error) => {
        if (err) {
          state.response = {message: err.message, status: false};
        }
        state.response = {message: dom?.message, status: dom?.status || false}
      });
    },
  },
});

// * Export items
export const { Subscribe, SetEmail } = NewsletterSlice.actions;
export const NewsletterSliceReducer = NewsletterSlice.reducer;
