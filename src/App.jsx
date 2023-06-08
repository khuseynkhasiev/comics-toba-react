import { Main } from "./pages/MainPage";
import "./index.scss";
import "./shared/animation/animation.scss";
import { useEffect, useState } from "react";
import Error from "./widgets/Error";

const App = () => {
  let orientation =
    window.screen.orientation.type === "portrait-primary" ? true : false;
  const [checkOrientation, setCheckOrientation] = useState(orientation);

  const handleOrientationWindow = () => {
    if (window.screen.orientation.type === "portrait-primary") {
      setCheckOrientation(true);
    } else {
      setCheckOrientation(false);
    }
  };

  useEffect(() => {
    window.addEventListener("orientationchange", handleOrientationWindow);
    return () => {
      window.removeEventListener("orientationchange", handleOrientationWindow);
    };
  }, [checkOrientation]);

  if (checkOrientation) return <Error />;
  return (
    <div className="App">
      <Main />
    </div>
  );
};

export default App;
