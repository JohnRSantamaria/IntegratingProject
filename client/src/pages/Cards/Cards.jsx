import { connect } from "react-redux"
import { Card } from "../Card/Card";
import Filters from "../../components/Filters/Filters";
import Pagination from "../../components/Pagination/Pagination";
import styles from "./Cards.module.css";
import Search from "../../components/Search/Search";

import { Loader } from "../../components/Loader/Loader";
const Cards = ({ nineCards, isLoadingState }) => {

  return (
    <>    
      <Filters/>
      <Search/>

      <div className={styles.cardsContainer}>
        {
          isLoadingState?<Loader/>:
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
    nineCards: state.nineCards,
    isLoadingState: state.isLoadingState
  }
}

export default connect(mapStateToProps)(Cards);


