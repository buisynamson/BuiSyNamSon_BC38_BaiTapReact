import React from "react";
import SingleProduct from "./Single";
import styles from "./Glass.module.css";

export default function ProductList(props) {
  return (
    <React.Fragment>
      <div className="container">
        <div className={styles.main}>
          {props.glasses.map((glass) => {
            return <SingleProduct key={glass.id} glass={glass} />;
          })}
          <div className={styles.card_item}>
          <img className={styles.model_img} src="./glassesImage/model.jpg" />
          </div>
        </div>
      <div className="buttons">
        {props.btns.map((btn,id) =>{
            return (
                <button className={styles.btn} key={id} value={btn} onClick={props.handleBtns}> {btn}
                </button>
            )
        })}
        
      </div>
      </div>
    </React.Fragment>
  );
}


