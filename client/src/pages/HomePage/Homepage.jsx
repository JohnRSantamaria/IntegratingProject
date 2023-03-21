import Navigation from '../../components/Navigation/Navigation';
import { Outlet } from 'react-router-dom';
import { connect } from 'react-redux';


const Homepage = () => {

  return (
    <div>
      <Navigation/>
      <Outlet/>
    </div>
  )
}

export default connect()(Homepage);