import "./app.main.scss";
import React, { useEffect, useState } from "react";
// import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { SlidePropTypes, SliderCtrl } from "../Slides/Slides";
import Slide1 from "../Slides/Slide1/Slide1";
import Slide2 from "../Slides/Slide2/Slide2";
// import { isPropertySignature } from "typescript";

/**
 * ! Main Instance of the application
 * * whitehatdevv - 2022/01/21
 * ! Some adjustments maded to slide show functionality
 * * ricklarios - 08/03/22
 */

type Slide = React.FC<SlidePropTypes>;

const App: React.FC = () => {
  const [subPosition, setSubPosition] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [slide, setSlide] = useState<Slide>(SliderCtrl.Slides[0]);

  const HandleScroll = () => {
    /* Added Math.floor to round scroll values to tens. */
    const position = Math.floor(window.pageYOffset / 10) * 10;
    setPosition(position);
    console.log("position: ", position);
  };

  const HandleSubScroll = (s: number) => {
    setSubPosition(s / 100);
    console.log(subPosition);
  };

  useEffect(() => {
    const r = position % SliderCtrl.BatchSize;
    HandleSubScroll(r); // Take this setting out of the conditional, otherwise r is always 0
    console.log("r: ", r);

    if (r === 0) {
      const pos = position / SliderCtrl.BatchSize; // Remove the -1, otherwise pos is incorrect
      console.log("pos: ", pos);
      if (pos < SliderCtrl.Slides.length) {
        const item = SliderCtrl.Slides[pos];
        setSlide(item);
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [position]);

  useEffect(() => {
    window.addEventListener("scroll", HandleScroll);
  }, []);

  useEffect(() => {
    return () => {
      window.removeEventListener("scroll", () => {});
    };
  });
  return (
    <>
      <Slide1
        loader={() => {
          console.log("Se cargo, hora de cambiar");
        }}
      />
      <Slide2 by={10} />
    </>
  );
};

// * Export the application
export default App;
