import React from "react";
import AccountBoxRoundedIcon from "@mui/icons-material/AccountBoxRounded";
import SendRoundedIcon from "@mui/icons-material/SendRounded";
import IconButton from "@mui/material/IconButton";
import styles from "./Header.module.css";

const Header = () => {
  return (
    <div className={styles.header}>
      <IconButton>
        <AccountBoxRoundedIcon
          fontSize="large"
          className={styles.header__icon}
        />
      </IconButton>
      <img
        className={styles.header__logo}
        src="/DogProfile.svg"
        alt="logo of a dog profile"
      />
      <IconButton>
        <SendRoundedIcon fontSize="large" className={styles.header__icon} />
      </IconButton>
    </div>
  );
};

export default Header;
