import { connect } from "react-redux"
import { Card } from "../Card/Card";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./Cards.module.css";

const Cards = ({ nineCards }) => {
  return (
    <>
      <Filters/>
      <div className={styles.cardsContainer}>
        {
          nineCards.map(({ id, healthScore, title, image, summary, steps, diets }) => (
            <Card
              key={id}
              id={id}
              title={title}
              healthScore={healthScore}
              summary={summary}
              image={image}
              steps={steps}
              diets={diets}
            />))
        }
      </div>
      <Pagination/>
    </>

  )
}

const mapStateToProps = (state) => {
  return {
    nineCards: state.nineCards
  }
}

export default connect(mapStateToProps, null)(Cards);


