import { connect } from 'react-redux'
import { AppState, AppDispatch } from 'rdx/index'
import { Logout, userActions, userSelectors } from './'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state: AppState) => ({
  user: userSelectors.getUser(state),
})

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      logoutRequest: userActions.logoutRequest,
    },
    dispatch,
  )

export const LogoutContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Logout)

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ReturnType<typeof mapDispatchToProps>
export type ReduxToProps = StateProps & DispatchProps
