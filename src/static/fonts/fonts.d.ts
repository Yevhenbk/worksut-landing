declare module "*.ttf";
import { createGlobalStyle } from "styled-components";
import PoppinsRegular from "./Poppins-Regular.ttf";

// * Export font style as a global property
export const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Poppins';
        src: local('Poppins'), local('Poppins'), url(${PoppinsRegular}), format('ttf');
        font-style: normal
    }
`;
