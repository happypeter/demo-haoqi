import React from 'react'
import Orders from '../components/Orders'
import { connect } from 'react-redux'

const OrdersContainer = props => <Orders {...props} />

const mapStateToProps = state => ({ })

export default connect(mapStateToProps)(OrdersContainer)
