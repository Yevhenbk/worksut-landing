declare module '*.ttf'
import GilroyRegular from './GilroyRegular.ttf'
import { createGlobalStyle } from 'styled-components'
import GothamMedium from './GothamMedium.ttf'

// * Export font style as a global property
export const FontStyle = createGlobalStyle`
    @font-face {
        font-family: 'Gilroy';
        src: local('Gilroy'), local('Gilroy'), url(${GilroyRegular}), format('ttf');
        font-style: normal
    }
       @font-face {
        font-family: 'Gotham';
        src: local('Gotham'), local('Gotham'), url(${GothamMedium}), format('ttf');
        font-style: normal
    }
`
