import React from "react";
import styles from "./detailsCard.module.css";

const DetailsCard = ({ data, images }) => {
  const details =
    data?.detail +
    " " +
    data?.detail +
    " " +
    data?.detail +
    " " +
    data?.detail +
    " " +
    data?.detail +
    " " +
    data?.detail;
  return (
    <div className={styles.detailsCardParent}>
      <div className={styles.heading}>{data.name}</div>
      <div className={styles.details}>{details}</div>
      <div className={styles.imageMainContainer}>
        <div className={styles.imgContainer}>
          {images?.map((ele) => {
            return (
              <div>
                <img src={ele?.download_url} alt="" />{" "}
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default DetailsCard;
