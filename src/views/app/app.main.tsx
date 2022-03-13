import "./app.main.scss";
import React, { useEffect, useState } from "react";
// import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { SliderCtrl } from "../Slides/Slides";
// import { isPropertySignature } from "typescript";

/**
 * ! Main Instance of the application
 * * whitehatdevv - 2022/01/21
 * ! Some adjustments maded to slide show functionality
 * * ricklarios - 08/03/22
 */

const App = () => {
  const [subPosition, setSubPosition] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [slide, setSlide] = useState<React.FC>(SliderCtrl.Slides[0]);

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
    /* Added div to set its position to fixed */
    <div className="container">
      {/* <ProgressBar /> */}
      {slide}
    </div>
  );
};

// * Export the application
export default App;
