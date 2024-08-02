import React from "react";
import styles from "./listingCard.module.css";

const ListingCard = ({ data, isActive }) => {
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
    <div
      className={
        styles.listCardContainer + " " + `${isActive && styles.isActive}`
      }
    >
      <div className={styles.name}> {data?.name}</div>
      <div className={styles.details}>
        {" "}
        {details?.length < 150 ? details : details.substring(0, 150) + "  ..."}
      </div>
    </div>
  );
};

export default ListingCard;
