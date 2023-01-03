import React from "react";
import styles from "./Glass.module.css";

export default function Single(props) {
  return (
    <React.Fragment>
      <div className={styles.card_item}>
        <img className={styles.model} src="./glassesImage/model.jpg" />
        <img src={props.glass.url} className={styles.card_img} />
        <div className="card-body">
          <h5 className="card-title bg-info p-4">
            {props.glass.name}
          </h5>
          <p className={styles.card_text}>{props.glass.desc}</p>
        </div>
      </div>
    </React.Fragment>
  );
}
