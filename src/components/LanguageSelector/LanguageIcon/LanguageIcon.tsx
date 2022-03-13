// import { closeSync } from 'fs'
import * as PropTypes from "prop-types";
import React, { useState } from "react";
import { Tokens } from "../../../static/Tokens";
import {
  LanguageIconHeaderStyled,
  LanguageIconStyled,
  LanguageSelectorContainerStyled,
  LanguageSelectorStyled,
} from "./LanguageIconStyled";

// * Define proptypes
const LanguageSelectorProptypes = {
  color: PropTypes.string,
  text: PropTypes.string,
  languages: PropTypes.arrayOf(
    PropTypes.shape({
      iso: PropTypes.string.isRequired,
      title: PropTypes.string.isRequired,
      default: PropTypes.bool.isRequired,
    }).isRequired
  ).isRequired,
};

// * Define the type to infer props
type LanguagePropsTyped = PropTypes.InferProps<
  typeof LanguageSelectorProptypes
>;

interface Language {
  iso: string;
  title: string;
  default: boolean;
}

/**
 * ! Language select component
 * * PatyVilas - 2022/02/15
 */
const LanguageSelector: React.FC<LanguagePropsTyped> = ({ languages }: any) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const langsLength = languages.length;
  const arc = Math.PI * (1 / langsLength);
  const radius = 45;

  const CountPosition = (i: number) => {
    const angle = i * arc - 199.7;
    const x = radius * Math.cos(angle);
    const y = radius * Math.sin(angle);

    const left = 80 + x + "%";
    const top = 5 + y + "%";
    return {
      left,
      top,
    };
  };

  const LanguagesForSelection = () => {
    return languages.filter((lan: Language, i: number) => i !== selectedIndex);
  };

  const GetDefaultLanguage = () =>
    languages.filter((lan: Language) => lan.default);

  const OpenSelector = () => setIsOpen(!isOpen);

  const HandleLanguageChanged = (lan: Language) => {
    setSelectedIndex(languages.indexOf(lan));
    setIsOpen(!isOpen);
    console.log(
      `Language changed to ${languages[languages.indexOf(lan)].title}`
    );
  };

  return (
    <>
      <LanguageSelectorContainerStyled color={Tokens.Colors.Button.Default}>
        <LanguageIconHeaderStyled
          onClick={OpenSelector}
          onChange={GetDefaultLanguage}
        >
          {languages[selectedIndex].iso.toLowerCase()}
        </LanguageIconHeaderStyled>
        {isOpen && (
          <LanguageSelectorStyled>
            {LanguagesForSelection().map((lan: Language, i: number) => {
              let position = CountPosition(i);
              return (
                <LanguageIconStyled
                  onClick={() => HandleLanguageChanged(lan)}
                  left={position.left}
                  top={position.top}
                  key={i}
                >
                  {lan.iso}
                </LanguageIconStyled>
              );
            })}
          </LanguageSelectorStyled>
        )}
      </LanguageSelectorContainerStyled>
    </>
  );
};

// * Proptypes
LanguageSelector.propTypes = LanguageSelectorProptypes;
// * Export component
export default LanguageSelector;