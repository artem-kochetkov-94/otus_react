import { Login, userActions } from './'
import { connect } from 'react-redux'
import { AppState, AppDispatch } from 'rdx/index'
import { bindActionCreators } from 'redux'

const mapStateToProps = (state: AppState) => ({})

const mapDispatchToProps = (dispatch: AppDispatch) =>
  bindActionCreators(
    {
      loginRequest: userActions.loginRequest,
    },
    dispatch,
  )

export const LoginContainer = connect(
  mapStateToProps,
  mapDispatchToProps,
)(Login)

export type StateProps = ReturnType<typeof mapStateToProps>
export type DispatchProps = ReturnType<typeof mapDispatchToProps>
export type ReduxToProps = StateProps & DispatchProps
