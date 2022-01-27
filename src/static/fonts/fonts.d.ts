declare module "*.ttf";
import GilroyRegular from "./GilroyRegular.ttf";
import { createGlobalStyle } from "styled-components";

// * Export font style as a global property
export const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Gilroy';
        src: local('Gilroy'), local('Gilroy'),
        url(${GilroyRegular}) format('ttf'),
        font-style: normal;
    }
`;
