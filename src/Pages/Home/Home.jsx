import React, { useState, useEffect } from "react";
import styles from "./home.module.css";
import data from "../../data";
import ListingCard from "../../Components/ListingCard/ListingCard";
import DetailsCard from "../../Components/DetailsCard/DetailsCard";

const Home = () => {
  const [selectedData, setSelectedData] = useState(data[0]);
  const [images, setImages] = useState([]);

  // ------- -------handling active card-------------------
  const handleActiveCard = (e) => {
    setSelectedData(e);
  };

  // ---------------api call to get images-----------------
  const getImages = async () => {
    const url = "https://picsum.photos/v2/list";

    const data = await fetch(url);
    const JsonData = await data.json();
    const fdata = await JsonData;
    setImages(fdata);
  };

  // --------------function for shuffling array----------------
  const shuffleImages = (img) => {
    const shuffledArray = img.slice().sort(() => Math.random() - 0.5);
    return shuffledArray;
  };

  useEffect(() => {
    getImages();
  }, []);

  // -----------for shuffle image in interval of 10 second-----------------
  useEffect(() => {
    const interval = setInterval(() => {
      setImages((prevImages) => shuffleImages(prevImages));
    }, 10000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className={styles.homePageParentContainer}>
      <div className={styles.leftContainer}>
        {data.map((ele) => {
          return (
            <div key={ele.id} onClick={() => handleActiveCard(ele)}>
              <ListingCard data={ele} isActive={selectedData.id === ele.id} />
            </div>
          );
        })}
      </div>
      <div className={styles.rightContainer}>
        <DetailsCard data={selectedData} images={images} />
      </div>
    </div>
  );
};

export default Home;
