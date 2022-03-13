import "./app.main.scss";
import React, { useEffect, useState } from "react";
import { Next, Back } from "../../functions/functions.slider";
import Slide1 from "../Slides/Slide1/Slide1";
import Slide2 from "../Slides/Slide2/Slide2";
import Slide3 from "../Slides/Slide3/Slide3";
import Slide4 from "../Slides/Slide4/Slide4";
import { useAppSelector, useAppDispatch } from "../../core/core.app.hooks";
import Slide5 from "../Slides/Slide5/Slide5";
import Slide6 from "../Slides/Slide6/Slide6";
import ProgressBar from "../../components/ProgressBar/ProgressBar";

// * Constants
const _BatchMapper: number = 50;
const _MaxSizer: number = 151;

const App: React.FC = () => {
  // * Hooks
  const [loaded, setLoaded] = useState<boolean>(false);
  const position = useAppSelector((state) => state.slider.position);
  const dispatch = useAppDispatch();

  useEffect(() => window.removeEventListener("wheel", () => {}));
  useEffect(() => window.addEventListener("wheel", HandleScroll), []);

  // * Functionalities
  const HandleScroll = (ev: any) => {
    dispatch(ev.deltaY > 0 ? Next() : Back());
  };

  const PositionMapper = (p: number): number =>
    p / _BatchMapper - Math.floor(p / _BatchMapper);
  const ProgressMapper = (p: number) =>
    (p * 100) / _MaxSizer < 100 ? (p * 100) / _MaxSizer : 100;

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
        return <Slide2 by={PositionMapper(position)} />;
      case position > _BatchMapper && position <= _BatchMapper * 2:
        return <Slide3 by={PositionMapper(position)} />;
      case position > _BatchMapper * 2 && position <= _BatchMapper * 3:
        return <Slide4 by={PositionMapper(position)} />;
      case position > _BatchMapper * 3 && position <= _BatchMapper * 4:
        return <Slide5 by={PositionMapper(position)} />;
      // case position > _BatchMapper * 5:
      //   return <Slide6 by={PositionMapper(position)} />;
      default:
        return <h1>SLIDE FALTA</h1>;
    }
  };

  // * View Builder
  return ViewBuilder();
};

// * Export the application
export default App;
