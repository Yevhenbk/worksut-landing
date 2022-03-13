import "./app.main.scss";
import React, { useEffect, useState } from "react";
import ProgressBar from "../../components/ProgressBar/ProgressBar";
import { SliderCtrl } from "../Slides/Slides";

/**
 * ! Main Instance of the application
 * * whitehatdevv - 2022/01/21
 */
const App = () => {
  const [subPosition, setSubPosition] = useState<number>(0);
  const [position, setPosition] = useState<number>(0);
  const [slide, setSlide] = useState<React.FC>(ProgressBar);

  const HandleScroll = () => {
    const position = window.pageYOffset;
    setPosition(position);
  };

  const HandleSubScroll = (s: number) => {
    setSubPosition(s / 100);
  };

  useEffect(() => {
    const r = position % SliderCtrl.BatchSize;
    if (r == 0) {
      HandleSubScroll(r);
      const pos = position / SliderCtrl.BatchSize - 1;
      if (pos < SliderCtrl.Slides.length) {
        const item = SliderCtrl.Slides[pos];
        setSlide(item);
      }
    }
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
      <ProgressBar />
      {slide}
    </>
  );
};

// * Export the application
export default App;
