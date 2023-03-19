import { connect, useDispatch } from "react-redux"
import { orderAlpha, orderHalthier } from "../../redux/actions/actions";

const Order = () => {
  const dispatch = useDispatch();

  const handlerAlpha = (event) => {
    dispatch(orderAlpha(event.target.value))
  }

  const handlerScore = (event) => {
    dispatch(orderHalthier(event.target.value))
  }

  return (

    <span>
      <select value="Alphabetical" onChange={handlerAlpha}>
        <option disabled hidden>Alphabetical</option>
        <option value="az">a-z</option>
        <option value="za">z-a</option>
      </select>

      <select value="Health Score" onChange={handlerScore}>
        <option disabled hidden>Health Score</option>
        <option value="healthier">healthier</option>
        <option value="less healthy">less healthy</option>
      </select>
    </span>

  )
}

export default connect()(Order);
