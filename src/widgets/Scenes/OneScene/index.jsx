import React, { useState } from "react";
import back from "../../../assets/scene/1/1.png";
import styles from "./onescene.module.scss";

export const OneScene = () => {
  const [counter, setCounter] = useState(1);
  // window.addEventListener("wheel", () => {
  //     setCounter(counter + 1);
  //     console.log(counter);
  // });
  return (
    <div className="wrapper">
      <div className={`backgroud-image-block`}>
        <img className={`backgroud-image animation-scale`} src={back} alt="" />
        <div className={`dialog-window ${styles.dialog}`}>
          МНЕ СНЯТСЯ СЧАСТЛИВЫЕ СНЫ. В НИХ НЕБО ЧИСТОЕ И НЕ ЗАПЯТНАНО ГРЯЗНЫМ
          ДЫХАНИЕМ ГОРОДА.
        </div>
      </div>
    </div>
  );
};
