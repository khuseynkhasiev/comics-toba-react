import React from "react";
import styles from "./twoscene.module.scss";

import orel from "../../../assets/scene/2/or.png";
import back from "../../../assets/scene/2/2.png";
import obl_1 from "../../../assets/scene/2/obl/1.png";
import obl_2 from "../../../assets/scene/2/obl/2.png";
import obl_3 from "../../../assets/scene/2/obl/3.png";
import obl_4 from "../../../assets/scene/2/obl/4.png";

export const TwoScene = () => {
  return (
    <div className="wrapper">
      <div className={`backgroud-image-block`}>
        <img
          className={`backgroud-image ${styles.backgroudImage}`}
          src={back}
          alt=""
        />
        <img src={obl_1} alt="" className={styles.obl} />
        <img src={obl_2} alt="" className={styles.obl} />
        <img src={obl_3} alt="" className={styles.obl} />
        <img src={obl_4} alt="" className={styles.obl} />
        <img src={orel} alt="" className={styles.orel} />
        <div className={`dialog-window ${styles.dialog}`}>
          ОГРОМНЫЕ ЗЕЛЁНЫЕ РАВНИНЫ ВСТРЕЧАЮТСЯ С МОГУЧИМИ ГОРНЫМИ ХРЕБТАМИ.
        </div>
      </div>
    </div>
  );
};
