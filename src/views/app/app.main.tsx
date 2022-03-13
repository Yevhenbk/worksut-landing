import "./app.main.scss";
import React, { useEffect, useState } from "react";
import Slide1 from "../Slides/Slide1/Slide1";
import Slide2 from "../Slides/Slide2/Slide2";

const App: React.FC = () => {
  // * Hooks
  const [loaded, setLoaded] = useState<boolean>(false);

  // * Functionalities
  const HandleScroll = () => {
    console.log(window.pageYOffset);
  };

  // * Scroll behaviour
  useEffect(() => window.addEventListener("scroll", HandleScroll), []);
  useEffect(() => window.removeEventListener("scroll", () => {}));

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
        <Slide2
          end={() => {
            console.log("Cambiamos de slide");
          }}
          by={10}
        />
      )}
    </>
  );
};

// * Export the application
export default App;
