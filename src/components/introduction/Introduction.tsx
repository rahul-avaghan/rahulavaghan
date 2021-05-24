import { Fragment } from "react";
import Avatar from "../avatar/Avatar";
import SocialMedia from "../socialmedia/SocialMedia";
import styles from "./Introduction.module.css";

export default function Introduction() {
  return (
    <div className={styles.introductionContainer}>
      <Avatar />
      <div>
        <h1>Rahul Avaghan</h1>
        <p>{`Full Stack developer with ${
          new Date().getFullYear() - 2013
        }  years of experience in verity of technologies.`}</p>
        <p> Berlin, Germany 🇩🇪 </p>
      </div>
      <SocialMedia />
    </div>
  );
}
