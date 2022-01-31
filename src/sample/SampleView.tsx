import { useEffect, useState } from "react";
import Input from "../components/Input/Input";
import ProgressBar from "../components/ProgressBar/ProgressBar";
import Scrollable from "../components/Scrollable/Scrollable";
import "./SampleView.scss";

/**
 * ! Main Instance of the application
 * * whitehatdevv - 2022/01/21
 */
const SampleView = () => {
  const [email, setEmail] = useState<string>();
  useEffect(() => {
    console.log(email);
  }, [email]);
  return (
    <>
      <div>
        <Input
          type="email"
          placeholder="Introduce tu correo electronico"
          handleChange={setEmail}
          validator={new RegExp("^[a-z]{2,}$")}
          wrapper={{
            icon: {
              enabled: "wrapper_input_enabled.png",
              disabled: "wrapper_input_disabled.png",
            },
            alt: "Icon setted to sent email",
            handleClick: () => {
              console.log("Click");
            },
          }}
        />
      </div>
      <div className="mt-3">
        <ProgressBar progress={50}></ProgressBar>
      </div>
      <div className="mt-3">
        <Scrollable></Scrollable>
      </div>
    </>
  );
};

// * Export the application
export default SampleView;
