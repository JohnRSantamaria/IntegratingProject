import { Card } from "../Card/Card";
import styles from "./Cards.module.css";

export const Cards = () => {
  return (
    <div className={styles.cardsContainer}>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
      <Card/>
    </div>
  )
}

