import { connect } from 'react-redux'

import Home from '../components/Home'
import { loginSuccess, logoutSuccess } from '../actions'

const mapStateToProps = state => {
  return {
    account: state.account
  }
}

export default connect(
  mapStateToProps
)(Home)
