import "./app.main.scss";
import React, { useEffect, useState } from "react";
import { Next, Back } from "../../functions/functions.slider";
import { Subscribe, SetEmail } from "../../functions/functions.newsletter";
import Slide1 from "../Slides/Slide1/Slide1";
import Slide2 from "../Slides/Slide2/Slide2";
import Slide3 from "../Slides/Slide3/Slide3";
import Slide4 from "../Slides/Slide4/Slide4";
import { useAppSelector, useAppDispatch } from "../../core/core.app.hooks";
import Slide5 from "../Slides/Slide5/Slide5";
import Slide6 from "../Slides/Slide6/Slide6";
import { analytics } from "../../index";
import { logEvent } from "firebase/analytics";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { Languages } from "../../static/Languages";
import { Language } from "../../components/LanguageSelector/LanguageSelector";

// * Constants
const _BatchMapper: number = 30;
const _MaxSizer: number = 91;
const _DefaultIndexLanguage = 1;

const App: React.FC = () => {
  // * Hooks
  const [loaded, setLoaded] = useState<boolean>(false);
  const position = useAppSelector((state) => state.slider.position);
  const dispatch = useAppDispatch();
  const [language, setLanguage] = useState<Language>(
    Languages[_DefaultIndexLanguage]
  );

  useEffect(() => window.removeEventListener("wheel", () => {}));
  useEffect(() => {
    logEvent(analytics, "Start Application");
    window.addEventListener("wheel", HandleScroll);
  }, []);
  useEffect(
    () => logEvent(analytics, `Loaded state changed - ${loaded}`),
    [loaded]
  );
  useEffect(() => {
    logEvent(analytics, `Language changed - ${language.title}`);
  }, [language]);

  // * Functionalities
  const HandleScroll = (ev: any) => {
    dispatch(ev.deltaY > 0 ? Next() : Back());
  };

  const PositionMapper = (p: number): number =>
    p / _BatchMapper - Math.floor(p / _BatchMapper);
  const ProgressMapper = (p: number) =>
    (p * 100) / _MaxSizer < 100 ? (p * 100) / _MaxSizer : 100;
  const HandleLanguageSelector = (i: number) => setLanguage(Languages[i]);

  // * Builders
  const ViewBuilder = () =>
    !loaded ? (
      <Slide1 end={() => setLoaded(true)} />
    ) : (
      <>
        <ProgressBar progress={ProgressMapper(position)} />
        {BuilderSlide()}
      </>
    );

  // TODO: Pending error and final on slide 6
  const BuilderSlide = () => {
    switch (true) {
      case position <= _BatchMapper:
        logEvent(analytics, "Second Slide - Start");
        return (
          <Slide2
            by={PositionMapper(position)}
            onLanguageChanged={HandleLanguageSelector}
            language={language}
          />
        );
      case position > _BatchMapper && position <= _BatchMapper * 2:
        logEvent(analytics, "Third Slide - Start");
        return (
          <Slide3
            by={PositionMapper(position)}
            onLanguageChanged={HandleLanguageSelector}
            language={language}
          />
        );
      case position > _BatchMapper * 2 && position < _BatchMapper * 3:
        logEvent(analytics, "Fourth Slide - Start");
        return (
          <Slide4
            by={PositionMapper(position)}
            onLanguageChanged={HandleLanguageSelector}
            language={language}
          />
        );
      case position >= _BatchMapper * 3:
        logEvent(analytics, "Fifth Slide - Start");
        return (
          <Slide5
            by={PositionMapper(position)}
            handleSubmit={() => {
              logEvent(analytics, "Subscribe newsletter - Send action");
              dispatch(Subscribe());
            }}
            handleEmail={(e: string) => {
              logEvent(analytics, `Update email newsletter - ${e}`);
              dispatch(SetEmail(e));
            }}
            onLanguageChanged={HandleLanguageSelector}
            language={language}
          />
        );
      // case position > _BatchMapper * 5:
      //logEvent(analytics, "Sixth Slide - Start");
      /* return (
          <Slide6
            by={PositionMapper(position)}
            onLanguageChanged={HandleLanguageSelector}
            language={language}
          />
        ); */
      default:
        logEvent(analytics, "Wrong Slide - Error");
        return <h1>SLIDE FALTA</h1>;
    }
  };

  // * View Builder
  return ViewBuilder();
};

// * Export the application
export default App;
