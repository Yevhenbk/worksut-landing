import "./app.main.scss";
import React, { useEffect, useState } from "react";
import { Next, Back } from "../../functions/functions.slider";
import Slide1 from "../Slides/Slide1/Slide1";
import Slide2 from "../Slides/Slide2/Slide2";
import Slide3 from "../Slides/Slide3/Slide3";
import { useAppSelector, useAppDispatch } from "../../core/core.app.hooks";

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

  const PossitionMapper = (p: number): number => p / _BatchMapper;

  const BuilderSlide = () => {
    if (position > 50) {
      return <Slide3 />;
    } else {
      return (
        <Slide2
          end={() => {
            console.log("Fuera");
          }}
          by={PossitionMapper(position)}
        />
      );
    }
  };

  // * View Builder
  return (
    <>
      {!loaded ? (
        <Slide1
          end={() => {
            console.log("Se cargo, hora de cambiar");
            setLoaded(true);
          }}
        />
      ) : (
        BuilderSlide()
      )}
    </>
  );
};

// * Export the application
export default App;
