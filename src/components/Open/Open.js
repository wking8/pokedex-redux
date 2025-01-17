import React from 'react'
import {Link} from 'react-router-dom'
import {connect} from 'react-redux'

const Open = (props) => (
  <div className="open">
    <div className="background">
      <div className="camera-ring">
        <Link to='/'>
          <div className="camera-circle" />
        </Link>
      </div>
      <div className="circles-container">
        <div className="little-circle red" />
        <div className="little-circle yellow" />
        <div className="little-circle green" />
      </div>
      <div className="inside">
        <h1>Welcome, {props.user}!</h1>
      </div>
    </div>
  </div>
)
function mapStateToProps(state) {
  const {user} = state.userInfo
  return {user}
}

export default connect(mapStateToProps)(Open)
