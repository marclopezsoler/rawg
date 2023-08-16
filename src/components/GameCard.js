import {
  faAndroid,
  faAppStoreIos,
  faApple,
  faLinux,
  faPlaystation,
  faWindows,
  faXbox,
} from "@fortawesome/free-brands-svg-icons";
import { faN } from "@fortawesome/free-solid-svg-icons";
import React from "react";
import styles from "../styles/GameCard.module.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function GameCard({
  title,
  image,
  reviews,
  platform1,
  platform2,
  platform3,
  platform4,
  platform5,
  platform6,
  platform7,
  released,
  genre1,
  genre2,
}) {
  const cardStyle = {
    backgroundImage: `linear-gradient(
      180deg,
      rgba(0, 0, 0, 0.2) 0%,
      rgba(0, 0, 0, 0.95) 100%
    ), url(${image})`,
    backgroundSize: "cover",
  };

  const platformIcons = {
    playstation: faPlaystation,
    windows: faWindows,
    linux: faLinux,
    xbox: faXbox,
    apple: faApple,
    android: faAndroid,
    appstore: faAppStoreIos,
    nintendo: faN,
  };

  const platformsToShow = [
    platform1,
    platform2,
    platform3,
    platform4,
    platform5,
    platform6,
    platform7,
  ].filter(Boolean);

  return (
    <div className={styles.game_card} style={cardStyle}>
      <section className={styles.icons}>
        {platformsToShow.map((platform, index) => (
          <span key={index}>
            {platformIcons[platform.toLowerCase()] && (
              <>
                <FontAwesomeIcon
                  icon={platformIcons[platform.toLowerCase()]}
                  color="white"
                  className={styles.icon}
                />
                <div className={styles.icon_name}>
                  <span className={styles.icon_point}></span>
                  <a className={styles.icon_name_child}>{platform}</a>
                </div>
              </>
            )}
          </span>
        ))}
      </section>
      <h2 className={styles.title}>{title}</h2>
    </div>
  );
}

export default GameCard;
