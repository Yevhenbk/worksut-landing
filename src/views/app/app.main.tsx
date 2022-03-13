import "./app.main.scss";
import React, { useEffect, useState } from "react";
import { Next, Back } from "../../functions/functions.slider";
import Slide1 from "../Slides/Slide1/Slide1";
import Slide2 from "../Slides/Slide2/Slide2";
import Slide3 from "../Slides/Slide3/Slide3";
import Slide4 from "../Slides/Slide4/Slide4";
import { useAppSelector, useAppDispatch } from "../../core/core.app.hooks";

// * Constants
const _BatchMapper = 50;

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

  const PossitionMapper = (p: number): number =>
    p / _BatchMapper - Math.floor(p / _BatchMapper);

  // * Builders
  const ViewBuilder = () =>
    !loaded ? (
      <Slide1
        end={() => {
          console.log("Se cargo, hora de cambiar");
          setLoaded(true);
        }}
      />
    ) : (
      BuilderSlide()
    );

  // TODO: Pending error and remain slides
  const BuilderSlide = () => {
    switch (true) {
      case position <= _BatchMapper:
        return <Slide2 by={PossitionMapper(position)} />;
      case position > _BatchMapper && position <= _BatchMapper * 2:
        return <Slide3 by={PossitionMapper(position)} />;
      case position > _BatchMapper * 2 && position <= _BatchMapper * 3:
        return <Slide4 by={PossitionMapper(position)} />;
      default:
        return <h1>SLIDE FALTA</h1>;
    }
  };

  // * View Builder
  return ViewBuilder();
};

// * Export the application
export default App;
