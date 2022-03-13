// import { closeSync } from 'fs'
import * as PropTypes from "prop-types";
import React, { useState, useEffect } from "react";
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
    }).isRequired
  ).isRequired,
  selectedIndex: PropTypes.number.isRequired,
  onLanguageChanged: PropTypes.func.isRequired,
};

// * Define the type to infer props
type LanguagePropsTyped = PropTypes.InferProps<
  typeof LanguageSelectorProptypes
>;

export interface Language {
  iso: string;
  title: string;
}

/**
 * ! Language select component
 * * PatyVilas - 2022/02/15
 */
const LanguageSelector: React.FC<LanguagePropsTyped> = (props) => {
  const [selectedIndex, setSelectedIndex] = useState<number>(0);
  const [isOpen, setIsOpen] = useState<boolean>(false);

  // * Constants
  const __LangsLength = props.languages.length;
  const _Arc = Math.PI * (1 / __LangsLength);
  const _Radius = 45;

  useEffect(() => setSelectedIndex(props.selectedIndex), []);

  const CountPosition = (i: number) => {
    const angle = i * _Arc - 199.7;
    const x = _Radius * Math.cos(angle);
    const y = _Radius * Math.sin(angle);

    const left = 80 + x + "%";
    const top = 5 + y + "%";
    return {
      left,
      top,
    };
  };

  const LanguagesForSelection = () => {
    return props.languages.filter(
      (lan: Language, i: number) => i !== selectedIndex
    );
  };

  const OpenSelector = () => setIsOpen(!isOpen);

  const HandleLanguageChanged = (lan: Language) => {
    setSelectedIndex(props.languages.indexOf(lan));
    setIsOpen(!isOpen);
    props.onLanguageChanged(props.languages.indexOf(lan));
  };

  return (
    <>
      <LanguageSelectorContainerStyled color={Tokens.Colors.Button.Default}>
        <LanguageIconHeaderStyled onClick={OpenSelector}>
          {props.languages[selectedIndex].iso.toLowerCase()}
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
